const winston = require("winston");
const { transports } = require("winston");
const CloudWatchTransport = require("winston-aws-cloudwatch");

module.exports = logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.colorize()
  ),
  defaultMeta: {
    service: "user-service",
  },
  transports: [
    new winston.transports.Console({
      format: winston.format.json(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" })
      ),
    }),
  ],
});
