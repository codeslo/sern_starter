if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "AWS") {
  require("dotenv").config();
}

const express = require("express");
const port = process.env.PORT;
const path = require("path");
const app = express();
const nocache = require("nocache");
// routes
const messageRoutes = require("./routes/messageRoutes");

// end routes
app.use(nocache());
app.use(express.static(path.join(__dirname, "client/build")));
app.use("/message", messageRoutes);

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname, "client/build"),
  };
  res.sendFile("index.html", options);
});

app.listen(port, () => console.log(`listening on port ${port}.`));
