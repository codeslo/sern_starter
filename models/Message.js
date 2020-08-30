const knex = require("../DAL/connection");
const logger = require("../services/logger");

exports.getMessage = async () => {
  try {
    const result = await knex("messages").limit(1);
    return result[0];
  } catch (err) {
    logger.error(`models.Message.getMessage: ${err}`);
  }
};
