# Smart Home UI. Part 3

## Overview

In this part, you will implement full create/edit/delete support for dashboards, tabs, and cards. Users should be able to build dashboards from scratch or modify existing ones by adding, removing, and reordering tabs and cards. Each card can contain a list of devices and sensors.

All dashboard-related changes should be managed using NgRx Store + Effects and synchronized with the backend via API. Reactive Forms, Signals, and RxJS should be applied where appropriate.

## Backend Updates

The backend has been extended to support full dashboard editing.

### `GET /api/devices`

Returns a list of all available devices and sensors.

Response:

```json
[
  {
    "type": "device",
    "icon": "lightbulb",
    "label": "Living Room Light"
  },
  {
    "type": "sensor",
    "icon": "thermostat",
    "label": "Temperature",
    "value": {
      "amount": 22.5,
      "unit": "°C"
    }
  }
]
```

### `POST /api/dashboards/:dashboardId`

Saves the full structure of a dashboard (tabs + cards + content).

Sample Request Body:

```json
{
  "tabs": [
    {
      "id": "main",
      "title": "Main",
      "cards": [
        {
          "id": "living-room",
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
              "value": {
                "amount": 23.5,
                "unit": "°C"
              }
            }
          ]
        }
      ]
    }
  ]
}
```

### `DELETE /api/dashboards/:dashboardId`

Deletes the specified dashboard.

When deleting a dashboard, you should display a confirmation modal (e.g. "Are you sure you want to delete this dashboard?").

### `PATCH /api/devices/:deviceId`

Updates the state of a single device.

Request Body:

```json
{
  "state": true
}
```

---

## Architecture Requirements

- Use NgRx Store + Effects to manage the **currently selected dashboard**, i.e. the one loaded via `/dashboard/:dashboardId/:tabId`
- All dashboard modifications should go through actions and update the store
- You are not required to store the dashboard list in NgRx. Focus on managing only the currently selected dashboard in the store
- Use Angular Signals for UI state like Edit Mode
- All API interactions related to the selected dashboard should go through services and effects
- Device state changes should be handled via separate NgRx actions and effects, i.e. not bundled with dashboard updates

---

## NgRx Actions (Recommended Structure)

- `enterEditMode()` / `exitEditMode()`

- `addTab({ title: string })`
- `removeTab({ tabId: string })`
- `reorderTab({ tabId: string, direction: 'left' | 'right' })`

- `addCard({ tabId: string, layout: string })`
- `removeCard({ tabId: string, cardId: string })`
- `reorderCard({ tabId: string, cardId: string, newIndex: number })`  
  In the UI, you may show the position as `index + 1`. Movement should be reflected immediately in UI, but persisted only on Save

- `addItemToCard({ tabId: string, cardId: string, item: DeviceItem | SensorItem })`
- `removeItemFromCard({ tabId: string, cardId: string, itemId: string })`

- `saveDashboard()` - effect sends `POST /api/dashboards/:dashboardId`, then `exitEditMode()`
- `discardChanges()` - reverts to snapshot made at Edit Mode entry, then `exitEditMode()`

- `toggleDeviceState({ deviceId: string, newState: boolean })`  
  Effect sends `PATCH /api/devices/:deviceId`

---

## Functional Requirements

### Dashboard Creation

- An “Add Dashboard” button should be shown in the **Sidebar footer**
- Clicking it opens a modal with:

  - `id`: required, max 30 characters, should be unique (validated locally)
  - `title`: required, max 50 characters
  - `icon`: required

- On submit:
  - Send `POST /api/dashboards/:id` with empty structure
  - Reload dashboard list
  - Navigate to the created dashboard

---

### Dashboard Deletion

- Dashboards should be deletable from the view or sidebar
- Show a confirmation modal before deletion
- On confirm:
  - Send `DELETE /api/dashboards/:id`
  - Reload dashboard list
  - Navigate to `/dashboard`

---

### Edit Mode

- Controlled by a Signal
- Store a deep copy of current dashboard when entering the Edit Mode
- When exiting:
  - On Save - send full POST and call `exitEditMode()`
  - On Discard - revert state and call `exitEditMode()`

#### Tabs

- Add, remove, rename, reorder using left/right buttons
- Title: required, max 50 characters, unique within dashboard

#### Cards

- Creation starts with selecting layout: `singleDevice`, `horizontalLayout`, or `verticalLayout`
- After layout is selected, an empty card is added and devices/sensors can be inserted
- **Layout cannot be changed** after creation
- Reordering:
  - Use ↑/↓ buttons or a numeric input (index + 1)
  - Movement updates UI immediately, but is saved only on Save
- Empty cards should display an empty state

#### Card Content

- Add/remove items using list from `GET /api/devices`
- No validation: duplicates and empty cards are allowed

---

### Device Toggle

- Outside Edit Mode:
  - Dispatch `toggleDeviceState({ deviceId, newState })`
  - Effect sends `PATCH` request to backend
  - Store is updated accordingly

## Evaluation Criteria (100 points)

### Forms & Validation - **25 points**

- Dashboard creation form with required, max length, and uniqueness checks - **5**
- Tab rename form with required, max length, and local uniqueness - **5**
- Error messages and empty states displayed clearly - **5**
- Discard restores state and exits Edit Mode - **5**
- At least one Signal is used appropriately - **5**

### NgRx State Management - **35 points**

- Selected dashboard is stored and managed via NgRx - **10**
- All tab/card/item updates go through store actions - **10**
- Device toggle handled through separate actions/effects - **10**
- No direct mutation - **5**

### Functionality - **40 points**

- Dashboard creation and navigation works - **5**
- Full tab/card editing and reorder logic - **15**
- Reordering reflects immediately and persists on save - **5**
- Deletion logic for dashboards/tabs/cards/items - **15**

## Penalties

- Store is not used for dashboard - **-30**
- Device toggle handled locally - **-15**
- API not used for saving/deleting - **-15**
- Missing validation or broken forms - **-10**
- Business logic is implemented in components/templates - **-10**
- ESLint warnings or errors are present - **-10**
- Using the `any` type in TypeScript - **-10**
- Mandatory flag `strict: true` is not set in the TypeScript configuration file - **-10**
- The ESLint configuration file does not include the `no-explicit-any` rule - **-5**
- Failure to meet the [requirements](https://rs.school/docs/en/pull-request-review-process#pull-request-requirements-pr) when creating a `Pull Request` - **-5**
- Non-compliance with commit history and commit message [guidelines](https://rs.school/docs/en/git-convention#commit-requirements) - **-5**
- Failure to submit on time may lead to points loss according to the [Deadlines for Students requirements](https://rs.school/docs/en/pull-request-review-process#deadlines-for-students)
