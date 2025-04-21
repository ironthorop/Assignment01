const fs = require("fs");
const csv = require("csv-parser");

function parseCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        if (
          data.TransactionID &&
          data.UserID &&
          data.Date &&
          data.Amount &&
          data.TransactionType
        ) {
          results.push(data);
        } else {
          console.warn("Invalid row skipped:", data);
        }
      })
      .on("end", () => resolve(results))
      .on("error", reject);
  });
}

module.exports = parseCSV;
