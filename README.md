# SERN STARTER
A starter project for a SQL/Express/React/Node application

## Features
- React and Node together in the same project
- Database operations via Knex (no ORM)
- Use npm run dev to run both locally
- To deploy, cd to client and npm run build
- Console logging via Winston
- Local envrionment variables via dotenv
- Routes and MVC structure in place, with example code
- Example code uses MySQL but conversion to Postgres should be trivial
- Code has been tested in AWS Elastic Beanstalk


# Notes
- In order to test this application locally, you will need a databse with a database with a table called 'Messages' with VARCHAR fields for 'title' and 'body'.
- When everything is configured correctly, you should see a message on the homepage that indicates the database is connected
