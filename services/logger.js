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
      format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
        winston.format.simple()
      ),
    }),
  ],
});

if (process.env.NODE_ENV === "AWS") {
  logger.add(
    new CloudWatchTransport({
      logGroupName: process.env.CLOUDWATCH_GROUP_NAME,
      logStreamName: process.env.CLOUDWATCH_STREAM_NAME,
      awsRegion: "us-west-1",
      jsonMessage: true,
    })
  );
}
