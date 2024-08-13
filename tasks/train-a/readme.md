# Train-A

## Welcome to the final project

### Organization

The project is a collaborative (team group) effort involving a maximum of four team members. The project timeline you can find in [RSApp Schedule](https://app.rs.school/course/schedule), and the final product must be a serverless application accessible to the public.

### Project Purpose

The primary goal of this project is to develop a platform for managing train trips. User roles include anonymous users, authorized users, and a resource manager with distinct responsibilities.

#### Roles

- an anonymous user can search for routes and find trips, but before booking, they will be required to authorize.
- an authorized user can book trips and view their past trips.
- the resource manager has the authority to create trips and manage routes and schedules.

## Getting Started

Before starting, please note the following technical details:

### Technical Setup

To simulate the backend functionality, install the latest `@planess/train-a-backend@latest` npm package into your project. Modify the `src/main.ts` file as instructed:

#### src/main.ts

```diff
import { bootstrapApplication } from '@angular/platform-browser';
+ import { startServer } from '@planess/train-a-backend';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

- bootstrapApplication(AppComponent, appConfig)
+ startServer()
+  .then(() => bootstrapApplication(AppComponent, appConfig))
  .catch((err) => console.error(err));
```

### Project Data

A substantial amount of static data has been added to the database for testing purposes. This data does not accurately reflect real-world conditions but is sufficient for training.

### Manager credentials

> The manager and the root administrator can enter the system with  
> _email:_ <admin@admin.com>  
> _password:_ my-password

### Authorization token

Since user passed authorization and `{token: "some-token-here"}` was replied to the browser, developer should include this data into additional header record:

```yml
- headers
  - Authorization: Bearer ${some-token-here}
```

### Currency

Server saves only the number for the price. Frontend can be configured for whatever price you want.

## Assessment

Feel free to use all your knowledge and skills to implement the project, as the assessment will take place in two stages:

- Peer review: Your project will be reviewed by members of other teams in **cross-check session**.
- **Presentation**: You will present your project to a jury that will evaluate not only the technical result but also teamwork, communication, and task distribution. You will need to demonstrate each team member's contribution and area of responsibility.

## Clarifications

The provided description and requirements may contain errors or omissions. Please use the Discord channel for any questions or concerns.

### Page specifications

Detailed information about the pages can be observed in corresponding files:

#### User pages

- [Registration page](./sign-up.md)
- [Login page](./sign-in.md)
- [User Profile page](./profile.md)
- [Search page](./search.md) includes [trip details](./search-detail.md)
- [Order page](./order.md)

#### Manager pages

- [Admin overview](./admin/readme.md)
- [Stations management](./admin/stations.md)
- [Carriages/Cars management](./admin/carriages.md)
- [Route management](./admin/routes.md) including [Ride management](./admin/ride.md)

#### General requirements

All pages must adhere to a consistent theme using component libraries, packages, and styles. A [shared header](./header-fragment.md) fragment is provided for this purpose.

### Choose the appropriate strategy and good luck
