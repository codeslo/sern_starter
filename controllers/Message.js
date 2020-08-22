const model = require("../models/Message");
const logger = require("../services/logger");

exports.getMessage = async (req, res) => {
  try {
    const data = await model.getMessage();
    logger.info(`response sent: ${JSON.stringify(data)}`);
    res.json({ data });
  } catch (err) {
    logger.error(`controllers.Message.getMessage: ${err}`);
    res.status(500);
    res.send("Server Error");
  }
};
