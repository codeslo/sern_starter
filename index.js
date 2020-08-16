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
  const options = {
    root: path.join(__dirname, "client/build"),
  };
  res.setHeader(
    "Cache-Control",
    "no-store,no-cache,must-revalidate,proxy-revalidate"
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", 0);
  res.setHeader("Surrogate-Control", "no-store");
  res.sendFile("index.html", options);
});

app.listen(port, () => console.log(`listening on port ${port}.`));
