if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "AWS") {
  require("dotenv").config();
}

const express = require("express");
const port = process.env.PORT;
const path = require("path");
const app = express();
const cache = require("cache-control");
// routes
const messageRoutes = require("./routes/messageRoutes");
const { publicDecrypt } = require("crypto");

// end routes
const cacheOptions = {
  "/static": "public,max-age:0",
  "/**": "no-store, no-cache, must-revalidate, proxy-revalidate",
};
app.use(cache(cacheOptions));
app.use(express.static(path.join(__dirname, "client/build")));
app.use("/message", messageRoutes);

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname, "client/build"),
  };
  res.sendFile("index.html", options);
});

app.listen(port, () => console.log(`listening on port ${port}.`));
