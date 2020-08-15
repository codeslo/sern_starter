const model = require("../models/Message");

exports.getMessage = async (req, res) => {
  try {
    const data = await model.getMessage();
    res.json({ data });
  } catch (err) {
    console.log("Error in message controller");
    res.status(500);
    res.send("Server Error");
  }
};
