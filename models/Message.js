const knex = require("../DAL/connection");

exports.getMessage = async () => {
  try {
    const result = await knex("messages").limit(1);
    return result[0];
  } catch (err) {
    console.log("Error in message modeel: " + err);
  }
};
