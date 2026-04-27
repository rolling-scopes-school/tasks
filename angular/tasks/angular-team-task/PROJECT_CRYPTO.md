# CryptoTrade — Cryptocurrency Analysis and Trading Application

A trading platform clone where the user can browse market data, analyze charts, maintain a watchlist of favorite pairs, and execute test trades with virtual funds.

The platform runs on top of **Binance Spot Testnet** — a fully functional Binance test environment that provides virtual funds upon registration. All data is virtual — no real money is involved.

> **API:** [Binance Spot Testnet](https://testnet.binance.vision/).
> REST: `https://testnet.binance.vision/api`.
> WebSocket: `wss://stream.testnet.binance.vision/ws`.
> Documentation matches the [main Binance Spot API](https://binance-docs.github.io/apidocs/spot/en/) — just replace the base URL.

---

## API Setup

1. Go to [testnet.binance.vision](https://testnet.binance.vision/) and sign in via GitHub.
2. Create an API Key — you will receive an `apiKey` + `secretKey` pair.
3. Virtual funds in various currencies are automatically credited upon registration.
4. Public endpoints (market data, WebSocket streams) do not require authorization.
5. Trading endpoints (orders, balance) require an HMAC-SHA256 request signature.

> **Important:** The Testnet is periodically reset (approximately once a month). The API Key is preserved, but balances and orders are zeroed out.

---

## Backend

The project uses its own backend for user authentication and secure storage of the Binance API Key and Secret Key.

> **Required:** The backend must be written in **NestJS** (TypeScript). Using other frameworks (Express, Fastify without NestJS, etc.) is not allowed.

| Endpoint         | Method | Description                         |
| ---------------- | ------ | ----------------------------------- |
| `/auth/register` | POST   | Registration: email + password      |
| `/auth/login`    | POST   | Login: email + password → JWT       |
| `/auth/me`       | GET    | Current user data                   |
| `/keys`          | GET    | Retrieve saved API Key / Secret Key |
| `/keys`          | PUT    | Save or update API Key / Secret Key |

The Secret Key is never returned to the frontend in plain text after saving — only a confirmation "keys configured".

---

## Login Page Implementation

### 1. Input Validation

- The login form contains Email and Password fields.
- Client-side validation: email must be in a valid format, password is a required field.
- Clear error messages are displayed below each field on validation errors.

### 2. Integration with Backend

- The form sends a `POST /auth/login` request to the custom backend.
- On successful login — JWT token is saved, redirect to Dashboard.
- On invalid credentials — a clear error message is shown.

### 3. Redirection

- On successful login — redirect to Dashboard.
- An authenticated user attempting to open Login is automatically redirected to Dashboard.

### 4. Navigation

- Link to the registration page.

---

## Registration Page Implementation

### 1. Input Validation

- The registration form contains fields: email, password, password confirmation.
- Validation: valid email, minimum password length (≥8 characters), password and confirmation must match.
- Clear error messages below each field on errors.

### 2. Integration with Backend

- The form sends a `POST /auth/register` request to the custom backend.
- On successful registration — automatic login (JWT) and redirect to Settings for entering Binance API keys.
- On errors (e.g., email already in use) — a clear message is shown.

### 3. Navigation

- Link to the login page.

---

## Dashboard Page Implementation

### 1. Market Overview

- Display cards for the top pairs by trading volume (at least 5). Each card shows: pair symbol, current price, 24h change (percentage), volume.
- Price must be formatted with the correct number of decimal places (BTC pairs: 8 decimals, USDT pairs: 2 decimals).
- 24h change is displayed in green if positive, red if negative.
- Data is loaded from Binance Testnet API. Card prices update in real time via WebSocket `!ticker@arr`.

### 2. Watchlist

- The user can add any trading pair to the watchlist using an "Add to favorites" button.
- The Dashboard displays a watchlist panel with the list of favorite pairs, their current prices, and 24h change.
- Watchlist pair prices update in real time via WebSocket.
- The user can remove a pair from the watchlist.
- Clicking a pair in the watchlist navigates to the Trade page for that pair.
- The watchlist persists across sessions (localStorage).

### 3. Portfolio Summary

- Display the total portfolio value in USD.
- The value recalculates automatically when prices change.
- Show a brief table: 3–5 main assets with their quantity and current value.

---

## Markets Page Implementation

### 1. Markets Table

- Display a table of all available trading pairs fetched from Binance Testnet API.
- Columns: Pair, Price, 24h Change (%), 24h Volume.
- Table data updates in real time via WebSocket (`!ticker@arr`) without page reload.
- Rows are clickable — clicking a pair navigates to the Trade page for that pair.

### 2. Filtering and Sorting

- The user can filter pairs by quote currency (tabs: USDT, BTC, ETH, or all).
- Sorting by any column (price, change, volume) in ascending and descending order.
- Sorting and filtering work instantly on the client, with no delay.

### 3. Search

- A search bar at the top of the page (or in the header).
- Results are filtered as the user types, without delay and without pressing Enter.
- Search works by pair symbol (e.g., typing "BTC" shows BTCUSDT, BTCETH, etc.).

### 4. Watchlist Integration

- Each pair in the table has an "Add to favorites" / "Remove from favorites" icon/button.
- The button state is synchronized with the watchlist on the Dashboard.

---

## Trade Page Implementation

### 1. Price Chart (interactive)

- A candlestick chart for the selected trading pair.
- Initial candle history loaded via REST API (`GET /api/v3/klines`).
- Chart updates in real time via WebSocket (`<symbol>@kline_<interval>`): the current candle updates live, a new candle is added when one closes.
- The user can switch candle intervals: 1m, 5m, 15m, 1h, 1d. On switch, the chart reloads with new data.
- Recommended library: [lightweight-charts](https://github.com/nicehash/lightweight-charts) (TradingView).

### 2. Order Book

- Display the order book: separate columns for bids (buy) and asks (sell).
- Each row: price and volume.
- Initial snapshot loaded via REST API (`GET /api/v3/depth`).
- Order book updates in real time via WebSocket (`<symbol>@depth`).
- Bid prices are colored green, ask prices are colored red.

### 3. Order Form

- A form for placing a trade order with fields:
  - Side: Buy / Sell (toggle).
  - Order type: Market / Limit.
  - Amount.
  - Price — displayed only for Limit orders.
- Validation: all required fields are filled, amount exceeds the minimum, order total does not exceed available balance. Clear error messages below each field on errors.
- A hint showing the available balance next to the amount field.
- The order is sent to Binance Testnet API (`POST /api/v3/order`). The request is signed with HMAC-SHA256.
- On successful placement — a notification to the user and balance update.

### 4. Current Price Display

- The current price of the selected pair is displayed prominently above the chart.
- Price updates in real time via WebSocket (`<symbol>@ticker`).
- 24h change shown next to the price (green/red).

### 5. Navigation

- The user can navigate to the Trade page of any pair: from the Markets table, from the watchlist, or by entering a symbol manually.
- When switching to another pair, the chart, order book, and current price switch to the new data; old WebSocket connections are closed.
- The page is accessible only to authenticated users (API Key is saved).

---

## Portfolio Page Implementation

### 1. Asset Table

- Display all user assets with a non-zero balance, fetched from Binance Testnet API (`GET /api/v3/account`, HMAC).
- Columns: Asset (BTC, ETH, USDT…), Available Balance, In Order, Current Price (USD), Total Value (USD).
- The current price of each asset is taken from ticker data.

### 2. Portfolio Value

- Display the total portfolio value in USD, calculated based on current prices.
- The value recalculates when prices update.

### 3. Distribution

- A visual representation of portfolio distribution: pie chart or horizontal bars (% of total value per asset).

### 4. Order History

- A table of user orders loaded from the API (`GET /api/v3/allOrders`, HMAC).
- Columns: Date, Pair, Side (Buy/Sell), Type (Market/Limit), Quantity, Price, Status.

### 5. Access Control

- The page is accessible only to authenticated users (API Key is saved). Unauthenticated users are redirected to Dashboard.

---

## Settings Page Implementation

### 1. API Key Form

- A form for entering and saving the Binance Testnet API Key and Secret Key.
- The Secret Key field is of type password, with a show/hide toggle.
- Validation: both fields are required, minimum length.
- Clear messages on validation errors.
- On successful save — a notification to the user.
- A "Reset" button — deletes the saved keys.

### 2. Connection Test

- After saving the keys — an automatic connection test: `GET /api/v3/account` request (HMAC). If the response is 200 — display "Connected", otherwise — an error with details.

---

## About Us Page Implementation

### 1. Team Introduction

- Information about each team member: name, role in the project, short bio, photo, GitHub link.
- Card design is consistent.

### 2. RS School Logo

- RS School logo with a clickable link to [rs.school](https://rs.school/).

---

## Header & Navigation

### 1. Header Layout

- App logo/name linking to Dashboard.
- Navigation: Dashboard, Markets, Trade, Portfolio, About Us.
- Trading pair search bar (with live filtering).
- Connection status icon (API Key configured / not configured).
- Link to Settings.

### 2. Routing

- All pages are accessible via direct URLs and through header navigation.
- Browser back/forward buttons are supported.
- Navigating to a non-existent URL shows a 404 (Not Found) page with an option to return to Dashboard.
- Trade and Portfolio pages are accessible only to authenticated users — attempting to navigate without an API Key redirects to Settings.
- Pages are loaded lazily (lazy loading).

---

## Beyond API — Features Not Available in Binance Testnet

Binance Testnet does not provide endpoints for deposits/withdrawals, user analytics, or alerts. These features are implemented independently.

### 1. Deposit / Withdrawal

- Deposit form: currency selection, amount input. Balance increases and is saved locally.
- Withdrawal form: currency selection, amount input, check that the amount does not exceed the balance.
- Validation for both forms.

### 2. Price Alerts

- Alert creation form: pair selection, target price, direction (above/below).
- List of active alerts with the option to delete.
- When the condition is met — a visual notification.
- Alerts persist across sessions.

---

## Useful Links

- [Binance Spot Testnet](https://testnet.binance.vision/) — registration and API Key generation
- [Binance Spot API Documentation](https://binance-docs.github.io/apidocs/spot/en/) — full REST API documentation
- [Binance WebSocket Streams](https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams) — WebSocket documentation
- [lightweight-charts](https://github.com/nicehash/lightweight-charts) — financial charting library
- [HMAC-SHA256 in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/sign) — Web Crypto API for signing
- [NestJS Documentation](https://docs.nestjs.com/) — official backend framework documentation
