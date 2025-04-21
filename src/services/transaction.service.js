const Transaction = require("../models/transaction.model");
const cache = require("../utils/cache");

class TransactionService {
  constructor() {
    this.summary = {};
    this.highestUser = null;
    this.highestAmount = 0;
  }

  processTransactions(rows) {
    const cacheKey = JSON.stringify(rows);
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    rows.forEach((row) => {
      const txn = new Transaction({
        transactionID: row.TransactionID,
        userID: row.UserID,
        date: row.Date,
        amount: row.Amount,
        type: row.TransactionType,
      });

      if (!txn.isValid()) {
        console.warn("Invalid transaction skipped:", row);
        return;
      }

      if (!this.summary[txn.userID]) {
        this.summary[txn.userID] = { Credit: 0, Debit: 0, Total: 0 };
      }

      this.summary[txn.userID][txn.type] += txn.amount;
      this.summary[txn.userID].Total += txn.amount;

      if (this.summary[txn.userID].Total > this.highestAmount) {
        this.highestAmount = this.summary[txn.userID].Total;
        this.highestUser = txn.userID;
      }
    });

    const result = {
      summary: this.summary,
      highestTransactionUser: {
        userID: this.highestUser,
        totalAmount: this.highestAmount,
      },
    };

    cache.set(cacheKey, result);
    return result;
  }
}

module.exports = new TransactionService();
