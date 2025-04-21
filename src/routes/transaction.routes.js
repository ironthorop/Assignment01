const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.middleware");
const controller = require("../controllers/transaction.controller");

router.post("/analyze", upload.single("file"), controller.analyze);

module.exports = router;
