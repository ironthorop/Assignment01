# Transaction Analyzer

**Transaction Analyzer** is a Node.js application that processes and analyzes transaction data from uploaded CSV files. It provides a summary of transactions for each user and identifies the user with the highest total transaction amount.

---

## 🚀 Features

- Upload CSV files containing transaction data.
- Parse and validate transaction records.
- Generate a summary of transactions per user, categorized by transaction type (Credit/Debit).
- Identify the user with the highest total transaction amount.
- Cache results for improved performance.

---

## 📁 Project Structure

\`\`\`
src/
├── server.js                      # Entry point of the application
├── controllers/
│   └── transaction.controller.js  # Handles transaction analysis requests
├── middlewares/
│   └── upload.middleware.js       # Handles file uploads
├── models/
│   └── transaction.model.js       # Defines the Transaction model
├── routes/
│   └── transaction.routes.js      # Defines API routes
├── services/
│   └── transaction.service.js     # Processes and analyzes transactions
├── utils/
│   ├── cache.js                   # Implements caching using LRU cache
│   ├── csv.parser.js              # Parses CSV files
│   └── logger.js                  # Logs application events
\`\`\`

---

## ⚙️ Installation

1. **Clone the repository:**

\`\`\`bash
git clone <repository-url>
cd transaction-analyzer
\`\`\`

2. **Install dependencies:**

\`\`\`bash
npm install
\`\`\`

3. **Environment Setup:**

Create a \`.env\` file in the root directory and add:

\`\`\`env
PORT=3000
\`\`\`

---

## 📦 Usage

1. **Start the server:**

\`\`\`bash
npm run dev
\`\`\`

2. **Make a request:**

Use an API client like Postman to send a \`POST\` request to:

\`\`\`
/transactions/analyze
\`\`\`

with a CSV file attached as \`file\` in \`form-data\`.

3. **Example response:**

\`\`\`json
{
  "summary": {
    "user1": {
      "Credit": 1000,
      "Debit": 500,
      "Total": 1500
    }
  },
  "highestTransactionUser": {
    "userID": "user1",
    "totalAmount": 1500
  }
}
\`\`\`

---

## 📄 CSV File Format

The uploaded CSV should contain the following columns:

- \`TransactionID\`
- \`UserID\`
- \`Date\`
- \`Amount\`
- \`TransactionType\` (Credit/Debit)

---

## 📚 Dependencies

- **express** – Web framework for Node.js  
- **multer** – Middleware for handling file uploads  
- **csv-parser** – Streaming CSV parser  
- **dotenv** – Loads environment variables from \`.env\`  
- **lru-cache** – In-memory caching solution  
- **winston** – Logging library  

---

## 📜 License

This project is licensed under the **ISC License**.
