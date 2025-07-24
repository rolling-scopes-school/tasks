# Smart Home UI. Part 2

## Overview

This is the next step toward building the Smart Home UI application. In this part, you will implement authentication, routing, enhanced global layout behavior, support for dynamic loading dashboards, and backend API integration to replace previously used mock data.

## Architectural Notes

You may choose one of two architectural approaches:

- **Standalone components** using `provideHttpClient()` and `provideRouter()`
- **NgModules** using `HttpClientModule` and `RouterModule`

Both approaches are acceptable - choose one and stay consistent.

Ensure logic is implemented in services and component state mapping, representation in components.

Use a dedicated token storage service for reading, saving, and clearing tokens. Reuse this service in the login flow and HTTP interceptor.

Use the service to manage authentication state (e.g. via `BehaviorSubject` or `ReplaySubject`). Depending on your architecture, the logic can either be split into a separate service or be part of the login service used for making API calls. Subscribe to it in components like **Sidebar** to control UI visibility based on the user's authentication status.

The **Sidebar** is a global component included in the application layout. It should only be visible when the user is authenticated. It is part of the global layout (e.g. `AppComponent`).

### HTTP Interceptor

- Attaches the token (if available) to all outgoing requests as: `Authorization: Bearer ${token}`
- Optionally adds the `/api` prefix to relative URLs. This allows you to call `HttpClient` with paths like `http.get('/dashboards')` instead of writing the full `/api/dashboards` each time.
- If a request returns 401:
  - Clear token using the token service
  - Redirect to `/login`
- You may use multiple interceptors to organize logic separately if needed

## API Endpoints

- `POST /api/user/login`  
  Body:

  ```json
  { "userName": "string", "password": "string" }
  ```

  Response:

  ```json
  { "token": "string" }
  ```

- `GET /api/user/profile`  
  Headers: `Authorization: Bearer ${token}`  
  Response:

  ```json
  { "fullName": "string", "initials": "string" }
  ```

- `GET /api/dashboards`  
  Headers: `Authorization: Bearer ${token}`  
  Response:

  ```json
  [
    { "id": "overview", "title": "Overview", "icon": "home" },
    { "id": "electricity", "title": "Electricity", "icon": "bolt" }
  ]
  ```

- `GET /api/dashboards/:dashboardId`  
  Headers: `Authorization: Bearer ${token}`  
  Response:

  ```json
  {
    "tabs": [
      {
        "id": "overview",
        "title": "Overview",
        "cards": [
          {
            "id": "living-room-mixed",
            "title": "Living Room",
            "layout": "verticalLayout",
            "items": [
              {
                "type": "device",
                "icon": "lightbulb",
                "label": "Lamp",
                "state": true
              },
              {
                "type": "sensor",
                "icon": "thermostat",
                "label": "Temperature",
                "value": { "amount": 23.5, "unit": "°C" }
              }
            ]
          }
        ]
      }
    ]
  }
  ```

  TypeScript interfaces:

  ```ts
  interface Card {
    id: string;
    title: string;
    layout: "singleDevice" | "horizontalLayout" | "verticalLayout";
    items: CardItem[];
  }

  type CardItem = DeviceItem | SensorItem;

  interface DeviceItem {
    type: "device";
    icon: string;
    label: string;
    state: boolean;
  }

  interface SensorItem {
    type: "sensor";
    icon: string;
    label: string;
    value: {
      amount: number;
      unit: string;
    };
  }
  ```

## Login Flow

- On app start:

  - If a token is present in `localStorage`, call `GET /api/profile`
  - If it returns 200, use the returned data to display the user and consider them logged in. Set the authenticated status in the service
  - If it returns 401, clear the token and redirect to `/login`
  - If there is no token: skip the request and consider the user anonymous

- On login:

  - The login page is located at `/login` route.
  - It includes a centered layout form component for entering the `userName` and `password` fields.
  - Use the login form to submit credentials to `POST /api/login`
  - On 401 Unauthorized error: Show message - "Invalid login or password."
  - On other errors: Show message - "Unknown error occurred. Please try again later."

- On successfull login:
  - Save the token using the token service
  - Call `GET /api/profile`
  - Set the authenticated status in the service
  - Show user info in Sidebar footer

## Sidebar

The sidebar is a global layout component rendered for authenticated users.

It should:

- Be visible only when the user is logged in
- Show the list of dashboards from the backend, including title and icon
- Show the following in the Sidebar Footer: initials in a circle, full name, logout menu option with icon

## Empty State for Dashboards

If the backend returns an empty dashboards list, display a message like "You don’t have any dashboards yet. They’ll appear here as soon as you create them". The dashboard creation will be the part of the next assignment.

## Dashboards Navigation

- The dashboard page is accessible via route `/dashboard/:dashboardId/:tabId`
- This route is protected via a guard - only authenticated users can access it; otherwise, they are redirected to `/login`
- On login or reload:
  - Fetch dashboards list.
  - If dashboardId or tabId is missing/invalid: use the first available values from the backend
- The `DashboardPage` component from Part 1 should be reused
- Each tab contains a list of cards with the same structure as in Part 1

## 404 Page

- Should be styled similarly to the login page (centered layout)
- The sidebar should not be visible unless the user is logged in

## Evaluation Criteria (100 points)

- Login flow works: submits form, calls API, stores token, and loads profile - **15**
- HTTP Interceptor is implemented - **15**
  - Attaches the token to outgoing requests
  - Clears token and redirects to `/login` on 401 using the token service
  - Optionally prepends `/api` to relative URLs
- 404 route is configured and shown for unknown URLs - **10**
- Sidebar behavior - **20**
  - Visible only when authenticated
  - Displays user full name, initials, and logout button with icon
  - Displays list of dashboards with icons from the API
- Dashboard routing and rendering (routing, fallback, data loading, empty state) - **40**
  - Supports `:dashboardId` and `:tabId`
  - Falls back to the first dashboard and tab from the API if missing or invalid
  - Reuses the existing dashboard page component and loads card data from the API
  - Displays an empty state message if no dashboards are returned

## Penalties

- App fails to build or has console errors - **-30**
- Business logic is implemented inside components instead of services - **-15**
- HTTP Interceptor is missing **-15**
- Dashboard data is hardcoded or mock data is used - **-15**
- ESLint warnings or errors are present - **-10**
- Using the `any` type in TypeScript - **-10**
- Mandatory flag `strict: true` is not set in the TypeScript configuration file - **-10**
- The ESLint configuration file does not include the `no-explicit-any` rule - **-5**
- Failure to meet the [requirements](https://rs.school/docs/en/pull-request-review-process#pull-request-requirements-pr) when creating a `Pull Request` - **-5**
- Non-compliance with commit history and commit message [guidelines](https://rs.school/docs/en/git-convention#commit-requirements) - **-5**
- Failure to submit on time may lead to points loss according to the [Deadlines for Students requirements](https://rs.school/docs/en/pull-request-review-process#deadlines-for-students)

## Backend Instructions

You can find backend setup and API usage instructions here:

[Smart Home API](https://github.com/pavelrazuvalau/smart-home-json-server)
