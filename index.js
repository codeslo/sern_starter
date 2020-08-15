if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "AWS") {
  require("dotenv").config();
}

const express = require("express");
const port = process.env.PORT;
const path = require("path");
const app = express();
// routes
const messageRoutes = require("./routes/messageRoutes");

// end routes

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/message", messageRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => console.log(`listening on port ${port}.`));
