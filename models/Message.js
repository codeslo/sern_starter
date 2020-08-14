const knex = require("../DAL/connection");

exports.getMessages = async () => {
  const result = await knex("messages").limit(1);
  return result[0];
};
