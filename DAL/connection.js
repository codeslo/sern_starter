// NOTE, these are environment variables. see .env file for working locally

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.DATAHOST,
    user: process.env.DATAUSER,
    password: process.env.DATAPW,
    database: process.env.DBNAME,
  },
});

module.exports = knex;
