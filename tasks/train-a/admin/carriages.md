# Carriages (manager)

**Browser path:** _/admin/carriages_

**Score**: 60

**Access**: only for manager (run by guards)

## Description

Each train can consist of carriages of different types. Manager can create several types of carriages and then compose trains from them for different routes.

### Main designation of carriage elements

Carriage is composed with parameters:

- **code**  - auto-generated unique code for item. User to update carriage.
- **name**   - unique name of the carriage type.
- **rows** - number of rows (16 in example below)
- **leftSeats** - - the number of seats to the left of the aisle in a row (2 in example below)
- **rightSeats** - the number of seats to the right of the aisle in a row (3 in example below)

![Designation of carriage elements](../designs/search-details/carriage%20hints.png)

### Requirements

#### Requirement 1: Page layout

- The page must display a "Create" button at the top.
- Below the "Create" button, there must be a list of already created carriages displayed vertically.
- Each carriage in the list must include:
  - The name of the carriage type.
  - A rendered picture of the train car based on its configuration parameters: rows, leftSeats, and rightSeats.
- If the manager clicks the "Create" button or the "Update" button for any existing carriage, a form must appear at the top of the page.

#### Requirement 2: Carriage configuration form

- The form must include fields for configuring the carriage:
  - rows: Number of rows in the carriage.
  - leftSeats: Number of seats to the left of the aisle.
  - rightSeats: Number of seats to the right of the aisle.
- The form must include a "Save" button.
- As the manager fills out the form, a dynamically rendered prototype of the carriage must be displayed to visualize the configuration.

#### Requirement 3: Saving and updating carriages

- When the manager clicks the "Save" button, the new or updated carriage must be inserted into the list of carriages.
- After saving, the form must disappear.

### Acceptance Criteria (60)

#### Acceptance Criteria 1: Page layout (10)

- The page must display a "Create" button at the top.
- Below the "Create" button, a list of existing carriages must be displayed vertically, each with:
  - The name of the carriage type.
  - A rendered picture of the carriage based on its configuration parameters.
  - "Update" button for each item.

#### Acceptance Criteria 2: Displaying carriage configuration form (15)

- When the manager clicks the "Create" button:
  - A form must appear at the top with fields for rows, leftSeats, and rightSeats.
  - A "Save" button must be present in the form.
  - A dynamically rendered prototype of the carriage must be displayed based on the values entered in the form fields.
- When the manager clicks the "Update" button for an existing carriage:
  - The form must appear at the top with the fields pre-filled with the current configuration of the selected carriage.
  - A "Update" button must be present in the form.
  - The dynamically rendered prototype must update according to changes made in the form.

#### Acceptance Criteria 3: Dynamically rendering prototype (25)

- As the manager fills out or updates the rows, leftSeats, and rightSeats fields in the form:
  - The prototype of the carriage must dynamically update to reflect the changes.

#### Acceptance Criteria 4: Saving and displaying new/updated carriages (10)

- When the manager clicks the "Save" button:
  - If creating a new carriage:
    - The new carriage must be added to the top of the list of carriages.
    - The form must disappear.
  - If updating an existing carriage:
    - The updated carriage must replace the old one in the list.
    - The form must disappear.

## API

### Retrieve carriage list

> `(GET) /api/carriage`

- Response 200 (application/json)
  - Attributes (array[object])
    - code: `type5` (string) - Carriage unique identifier
    - name: `Only-women` (string) - Carriage name
    - rows: `18` (number) - amount of rows in carriage
    - leftSeats: `2` (number) - amount of seats to the left of the aisle
    - rightSeats: `2` (number) - amount of seats to the right of the aisle

### Create new carriage type

> `(POST) /api/carriage`

- Request (application/json)
  - Body (object)
    - name: `Only-women` (string) - Carriage name
    - rows: `18` (number) - amount of rows in carriage
    - leftSeats: `2` (number) - amount of seats to the left of the aisle
    - rightSeats: `2` (number) - amount of seats to the right of the aisle

- Response 201 (application/json)
  - Attributes (object)
    - code: `type18` (string) - Carriage unique identifier

- Response 401 (application/json)
  - Attributes (object)
    - error:
      - message: `Access is not granted` (string) - Error message
      - reason: `invalidAccessToken` (string) - Wrong token idintifier

### Update carriage type

> `(PUT) /api/carriage/{code}`

- Request (application/json)
  - Parameters: (object)
    - code: `type18` (string) - Carriage unique identifierØ
  - Body: (object)
    - name: `Only-women` (string) - Carriage name
    - rows: `16` (number) - amount of rows in carriage
    - leftSeats: `2` (number) - amount of seats to the left of the aisle
    - rightSeats: `3` (number) - amount of seats to the right of the aisle

- Response 200 (application/json)
  - Attributes: (object)
    - code: `type18` (string) - Carriage unique identifier

- Response 401 (application/json)
  - Attributes: (object)
    - error:
      - message: `Access is not granted` (string) - Error message
      - reason: `invalidAccessToken` (string) - Wrong token idintifier

- Response 400 (application/json)
  - Attributes: (object)
    - error:
      - message: `Carriage not found` (string) - Error message
      - reason: `recordNotFound` (string) - Wrong token idintifier

## Next section

- [Routes](./routes.md)
