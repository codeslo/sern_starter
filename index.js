if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "AWS") {
  require("dotenv").config();
}

const express = require("express");
const port = process.env.PORT;
const path = require("path");
const app = express();
const router = express.Router();

// controllers
const messageController = require("./controllers/Message");

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/getmessages", messageController.getMessages);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => console.log(`listening on port ${port}.`));
