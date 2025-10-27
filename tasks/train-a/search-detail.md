# Trip

**Browser path**: _/trip/:rideId?from=stationId&to=stationId_

**Score**: 90

## Description

**Ride** is certain instance of route and defines time slots with prices. Also, this page show cars grouped by carriage types.

A **carriage** is a structure for transporting passengers with specific parameters. The type of carriage is configured by:

- the number of rows of passenger seats
- the number of seats to the left of the aisle in a row
- the number of seats to the right of the aisle in a row

![Carriage schema](./designs/search-details/carriage%20hints.png)

> [!IMPORTANT]
> Each carriage type has different row amount, left and right side amount of seats. Developer should draw carriage/car visualization based on _rows_, _leftSeats_, _rightSeats_ parameters himself!

### Requirements

#### Requirement 1: Display start and end stations

- The page must display the start and end stations at the top of the page.
- The display must include the departure and arrival times of the trip.
- The ride identifier must be displayed directly under the trip stations.
- A "Back" button navigates user to general search page.
- A "Route" button must be present, which opens a modal window with route path.

#### Requirement 2: Carriage type tabs

- Tabs must be provided for each carriage type available on the train.
- Clicking on a tab must update the list of displayed train cars.

#### Requirement 3: Train Car List Items

- Each list item must represent an individual train car for the selected carriage type.
- Seats within each car must be color-coded.
- User can select a seat

#### Requirement 4: Booking a Seat

- The page must include a "Book seat" button.
- Clicking the "Book seat" button must reserved seat for user.
- If user acts like a guest, the modal authorization window should appear(or any other option) before seat is booked to determine which user runs the process.

### Acceptance criteria (90)

#### Acceptance Criteria 1: Display start and end stations (10)

- The top of the page must display the start and end stations, including departure and arrival times.
- The ride identifier must be visible below the station names.
- A "Back" button navigates user to general search page.
- When the "Route" button is clicked, a modal window must open displaying ([design](#route-stations-modal)):
  - The start and end stations of the trip.
  - All intermediate stations along with their respective arrival and departure times.
  - Dwell time.

#### Acceptance Criteria 2: Carriage type tabs (30)

- Tabs for each carriage type must be visible and clearly labeled with:
  - Carriage type name.
  - Number of available seats.
  - Price for the trip.
- Clicking on a tab must:
  - Display the list of train cars corresponding to the selected carriage type.
- Update the seat availability information accordingly.

#### Acceptance Criteria 3: Train car list items (30)

- Each train car list item must:
  - Display the car number and the number of available seats.
  - Color-code seats as blue (available), grey (occupied), or yellow (currently selected).
- Selecting a seat must:
  - Change the seat color to yellow.
  - Display the seat number and price in a sticky panel on the right.

#### Acceptance 4: Booking a seat (20)

- The "Book seat" button must be present and clickable only when a seat is selected.
- Clicking the "Book seat" button must:
  - Change the selected seat’s color from yellow to grey.
  - Update the seat’s status in the system to occupied.
  - Display a confirmation message indicating the seat has been booked.
- The user cannot book a seat on a train where a reservation already exists. They must cancel the previous reservation and create a new one.

## API

> [!NOTE]
> Endpoint provides general information. Developer should independently calculate required information on the page based on the http-response.

### To get ride information

> `(GET) /api/search/{rideId}`

- Request (application/json)
  - Parameters:
    - rideId: `745` (number, required) - Identifier of the ride, it is instance of the route

- Response 200 (application/json)
  - Attributes: (object)
    - rideId: `745` (number) - Identifier of certain schedule for the route
    - routeId: `18` (number) - Identifier of corresponding route
    - path: `[33, 5, 62, 11, 48, 34]` (array[number]) - List of station identifiers
    - carriages: `['carriage_type_2', 'carriage_type_2', 'carriage_type_2', 'carriage_type_2', 'carriage_type_7', 'carriage_type_7', 'carriage_type_7', 'carriage_type_7']` (array[string]) - List of carriage types for the train
    - schedule: (object) - Information about the ride
      - segments: (array[object]) - List of road section between each station. Always 1 less than the number of stations on the route
        - time: `['2024-08-08T22:19:57.708Z', '2024-08-12T03:29:57.708Z']` (array[string]) - dates of the start of movement on the section and the end of movement on the section in string form - [departure_from_prev_station, arrival_at_next_station]
        - price: (object) - set of prices for all carriage types on this route. It has vary size depending on the train configuration
          - dynamic-carriage-type-1: `210` (number) - the price of 210 units for _dynamic-carriage-type-1_ carriage type on current section
        - occupiedSeats: `[4,28,42,61]` (array[number]) - list of occupied seat numbers

- Response 400 (application/json)
  - Attributes (object)
    - error:
      - message: `Ride not found` (string) - Error message
      - reason: `rideNotFound` (string) - Error type

### To make an order

> `(POST) /api/order`

- Request (application/json)
  - Body (object)
    - rideId: `745` (number, required) - Identifier of certain schedule for the route
    - seat: `27` (number, required) - Selected seat number
    - stationStart: `7` (number, required) - Station id which user boards the train
    - stationEnd: `61` (number, required) - Station id which user leaves the train

- Response 201 (application/json)
  - Attributes: (object)
    - id: `209` (string) - identifier of new order

- Response 400 (application/json)
  - Attributes: (object)
    - error:
      - message: `Ride not found` (string) - Error message
      - reason: `rideNotFound` (string) - Error type

- Response 400 (application/json)
  - Attributes: (object)
    - error:
      - message: `Invalid stations` (string) - Error message
      - reason: `invalidStations` (string) - Error type

- Response 400 (application/json)
  - Attributes: (object)
    - error:
      - message: `Parameters are irrelevant` (string) - Error message
      - reason: `invalidData` (string) - Error type

- Response 400 (application/json)
  - Attributes: (object)
    - error:
      - message: `Ride is already booked` (string) - Error message
      - reason: `alreadyBooked` (string) - Error type

- Response 400 (application/json)
  - Attributes: (object)
    - error:
      - message: `Trip is expired` (string) - Error message
      - reason: `invalidRide` (string) - Error type

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

## Design example

> [!WARNING]
> All mockups should not be considered as final versions! We are providing an idea; you can come up with any design as long as it meets the functional requirements.

### Seat options

#### One of carriage type tab is selected

![Cars on grouped type](./designs/search-details/carriage%201.png)

#### Another carriage type tab is selected

![Cars on grouped type](./designs/search-details/carriage%202.png)

### Page with hints

#### One of carriage type tab is selected

![Cars on grouped type](./designs/search-details/carriage%201.hints.png)

#### Another carriage type tab is selected

![Cars on grouped type](./designs/search-details/carriage%202.hints.png)

### Route stations modal

#### Top side

![Route top modal](./designs/search-details/modal%20top.png)

#### Bottom side

![Route bottom modal](./designs/search-details/modal%20bottom.png)

## Next section

- [My orders](./order.md)
