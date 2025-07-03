# Log Ingestion and Querying System

A full-stack application to ingest, store, and query log entries using filters.  
Built with *Node.js (Express)* and *React (Vite)*. Data is stored in a JSON file (no database used).

---

## Features

- Add logs using a POST API
- View and filter logs by:
  - Level (error, info, warn, debug)
  - Message content (full-text search)
  - Resource ID
  - Timestamp range
- Clean and color-coded UI
- Filters work together (AND logic)
- Logs shown in reverse-chronological order

---

## How to Run

### Backend

bash
cd backend
npm install
node app.js

Runs on: http://localhost:5000

###  frontend
bash
cd frontend
npm install
npm run dev

Runs on: http://localhost:5173

## API Endpoints
POST /logs
GET /logs