# My orders

**Browser path**: _/orders_

**Score**: 40

**Access**: only for authenticated user (run by guards)

## Description

User is able to see their orders in the list.

### Requirements

#### Owner

- The order list is displayed in the user's account, showing each train ticket order with detailed information.
- Each item in the list includes the start trip station, start trip time, end trip station, end trip time, trip duration, carriage type, seat number, car number and price.
- Active but not completed orders have a "Cancel" button.

#### Manager

- Manager can see all orders regardless of owner in the list.
- Order item should contain user name of the order owner.
- Manager can cancel any active order.

### Acceptance Criteria (40)

#### Acceptance Criteria 1: Order list display (4)

- The order list is accessible from the site header.
- Each order in the list displays the following information:
  - Start trip station
  - Start trip time
  - End trip station
  - End trip time
  - Trip duration
  - Carriage type
  - Car number
  - Seat number
  - Price
- Orders are sorted by the start trip time in ascending order by default.

#### Acceptance Criteria 2: Start trip (4)

- The start trip station name is displayed correctly for each order.
- The start trip station is the departure station for the journey.
- The start trip time is displayed in a clear and readable format "MMMM dd hh:mm".
- The start trip time reflects the exact departure time of the train from the booked station.

#### Acceptance Criteria 3: End trip (4)

- The end trip station name is displayed correctly for each order.
- The end trip station is the arrival station for the journey.
- The end trip time is displayed in a clear and readable format "MMMM dd hh:mm".
- The end trip time reflects the exact arrival time of the train.

#### Acceptance Criteria 4: Trip duration (8)

- The trip duration is calculated and displayed in hours and minutes (e.g., 3h 45m, 45h 12m).
- The trip duration represents the total travel time from the start trip time to the end trip time.

#### Acceptance Criteria 5: Carriage type (4)

- The carriage type is displayed (e.g., Economy, Business, First Class).
- The carriage type reflects the class of service selected by the user.

#### Acceptance Criteria 6: Price (4)

- The price of the ticket is displayed in the local currency (e.g., $50.00).
- The price reflects the total cost of the ticket for the trip (between selected stations as segments).

#### Acceptance Criteria 7: Cancel button (4)

- Active but not completed orders display a "Cancel" button.
- Clicking the "Cancel" button prompts the user to confirm the cancellation.
- If confirmed, the order is cancelled and appear in the list with new status, also a success message is displayed.
- If there is an error during cancellation, an error message is displayed.
- The "Cancel" button is hidden for completed or past orders.

#### Acceptance Criteria 8: Manager (8)

- The manager must be able to view a list of all orders, not limited to their own.
- The manager must see a "Cancel Order" button next to each active order in the list.
- The "Cancel Order" button must be visible only for orders with an "active" status.
- When the manager clicks the "Cancel Order" button, a confirmation dialog must appear, asking the manager to confirm the cancellation.
- The dialog must display the order ID and customer name to ensure the correct order is being cancelled.
- Upon confirming the cancellation, the order status must change from "active" to "cancelled".
- The order list must immediately reflect this status change.
- A success message must be displayed to the manager, confirming the order has been cancelled.
- Cancelled orders must remain in the order list with their updated status for record-keeping purposes.

## API

### To retrieve orders

> `(GET) /api/order`

- Request (application/json)
  - Attributes: (object)
    - all: `true` (boolean, optional) - allows manager to retrieve all orders

- Response 200 (application/json)
  - Attributes: (array[object])
    - id: `64` (number) - Order identifier
    - rideId: `45` (number) - Ride identifier
    - routeId: `18` (number) - Route idenfitier
    - seatId: `33` (number) - Seat index in the whole train
    - userId: `3` (number) - User identifier
    - status: `active|completed|rejected|canceled` (string) - Order status indicates current order state
    - path: `[33, 5, 62, 11, 48, 34]` (array[number]) - List of station identifiers
    - carriages: `['carriage_type_2', 'carriage_type_2', 'carriage_type_2', 'carriage_type_2', 'carriage_type_7', 'carriage_type_7', 'carriage_type_7', 'carriage_type_7']` (array[string]) - List of carriage types for the train
    - schedule: (object)
      - segments: (array[object]) - List of road section between each station. Always 1 less than the number of stations on the route
        - time: `['2024-08-08T22:19:57.708Z', '2024-08-12T03:29:57.708Z']` (array[string]) - dates of the start of movement on the section and the end of movement on the section in string form - [departure_from_prev_station, arrival_at_next_station]
        - price: (object) - set of prices for all carriage types on this route. It has vary size depending on the train configuration
          - dynamic_carriage_type_1: `210` (number) - the price of 210 units for _dynamic_carriage_type_1_ carriage type on current section

### To retrieve users (only for manager)

> `(GET) /api/users`

- Request (application/json)
  - Attributes: (object)

- Response 200 (application/json)
  - Attributes: (arra[object])
    - id: `3` (number) - User identifier
    - email: `mail@mail.com` (string) - User email
    - name: `Dohn` (string) - User name
    - role: `user|manager` (string) - User role

### To cancel active order

> `(DELETE) /api/order/{orderId}`

- Request (application/json)
  - Parameters:
    - orderId: `215` (number, required) - Identifier of the order

- Response 200 (application/json)
  - Attributes: (object)

- Response 400 (application/json)
  - Attributes: (object)
    - error:
      - message: `Order is not found` (string) - Error message
      - reason: `orderNotFound` (string) - Error type

- Response 400 (application/json)
  - Attributes: (object)
    - error:
      - message: `Order is not active` (string) - Error message
      - reason: `orderNotActive` (string) - Error type
