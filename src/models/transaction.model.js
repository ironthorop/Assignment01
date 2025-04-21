class Transaction {
  constructor({ transactionID, userID, date, amount, type }) {
    this.transactionID = transactionID;
    this.userID = userID;
    this.date = date;
    this.amount = parseFloat(amount);
    this.type = type;
  }

  isValid() {
    return (
      this.transactionID &&
      this.userID &&
      !isNaN(this.amount) &&
      ['Credit', 'Debit'].includes(this.type)
    );
  }
}

module.exports = Transaction;
