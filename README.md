# Token Insight & Analytics API

**Backend Assignment**

This project is a backend service designed to analyze crypto tokens and wallet performance. It combines real-time market data, simple AI-driven insights, and daily PnL calculations, focusing on clean API design and clarity rather than unnecessary complexity.

The goal of this assignment is to demonstrate backend fundamentals such as API integration, data processing, error handling, and readable code structure.

---

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **HTTP Client:** Axios
* **Configuration:** dotenv
* **External APIs:** CoinGecko (free, no API key required)
* **AI:** Mock AI response (easily replaceable with OpenAI)
* **Database:** Not used (in-memory calculations as per assignment scope)

---

## Project Structure

```
src/
├── app.js
├── routes/
│   ├── token.routes.js
│   └── hyperliquid.routes.js
├── controllers/
│   ├── token.controller.js
│   └── hyperliquid.controller.js
├── services/
│   ├── coingecko.service.js
│   ├── ai.service.js
│   └── hyperliquid.service.js
├── utils/
│   ├── promptBuilder.js
│   └── pnlCalculator.js
```

Each layer has a single responsibility, making the code easy to understand, test, and extend.

---

##  Setup Instructions

### 1️. Clone or Extract Project

```bash
git clone <repository-url>
cd token-analytics-backend
```

Or extract the ZIP and open a terminal in the project folder.

---

### 2️. Install Dependencies

```bash
npm install
```

---

### 3️. Environment Configuration

Create a `.env` file:

```bash
cp .env.example .env
```

Update values if required:

```env
PORT=3000
AI_API_KEY=your_key_here   # optional (mock AI used)
```

---

### 4️. Start the Server

```bash
npm start
```

You should see:

```
Server running on port 3000
```

The API will be available at:

```
http://localhost:3000
```

---

## API Testing (Postman / cURL)

---

### Health Check

Used to confirm that the service is running correctly.

```http
GET /health
```

**Command**

```bash
curl http://localhost:3000/health
```

**Response**

```json
{
  "status": "OK"
}
```

---

### Token Insight API

Fetches token market data from CoinGecko and returns an AI-style sentiment insight.

**Endpoint**

```http
POST /api/token/:id/insight
```

**Example**

```bash
curl -X POST http://localhost:3000/api/token/bitcoin/insight \
  -H "Content-Type: application/json" \
  -d '{"vs_currency":"usd"}'
```

**Sample Response**

```json
{
  "token": {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "market_data": {
      "current_price_usd": 43000,
      "market_cap_usd": 800000000000
    }
  },
  "insight": {
    "reasoning": "Sample insight",
    "sentiment": "Neutral"
  }
}
```

---

### HyperLiquid Wallet Daily PnL API

Calculates daily realized and unrealized PnL, fees, funding, and net equity for a wallet.

**Endpoint**

```http
GET /api/hyperliquid/:wallet/pnl
```

**Example**

```bash
curl http://localhost:3000/api/hyperliquid/0xabc123/pnl
```

**Sample Response**

```json
{
  "daily": [
    {
      "date": "2025-08-01",
      "realized": 100,
      "unrealized": -10,
      "fees": 2,
      "funding": -1,
      "net_pnl_usd": 87,
      "equity_usd": 10087
    }
  ]
}
```

---

## Additional Notes

* CoinGecko is used as the market data source and does not require authentication.
* AI responses are mocked to keep the setup simple and dependency-free.
* The architecture allows easy replacement of mock services with real providers.
* Error handling is added to ensure graceful API responses.

---

## Assignment Coverage

* ✔ Token Insight API with structured response
* ✔ External API integration
* ✔ Daily PnL computation logic
* ✔ Clean and modular codebase
* ✔ Environment-based configuration
* ✔ Easy local setup

---

## 👤 Author

**Sandeep Kumar**
(Full-Stack Engineer)


---


