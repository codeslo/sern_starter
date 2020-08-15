const model = require("../models/Message");

exports.getMessage = async (req, res) => {
  const data = await model.getMessage();
  res.json({ data });
};
