const model = require("../models/Message");

exports.getMessages = async (req, res) => {
  const data = await model.getMessages();
  res.json({ data });
};
