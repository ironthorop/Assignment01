const parseCSV = require("../utils/csv.parser");
const transactionService = require("../services/transaction.service");
const logger = require("../utils/logger");
const fs = require("fs");

exports.analyze = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const rows = await parseCSV(file.path);
    const result = transactionService.processTransactions(rows);

    fs.unlinkSync(file.path);
    res.json(result);
  } catch (error) {
    logger.error("Error analyzing transactions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
