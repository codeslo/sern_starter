const express = require("express");
const router = express.Router();
const messageController = require("../controllers/Message");

router.get("/getMessage", messageController.getMessage);

module.exports = router;
