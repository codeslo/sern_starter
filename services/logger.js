const winston = require("winston");
const { transports } = require("winston");
const CloudWatchTransport = require("winston-aws-cloudwatch");

// module.exports = logger = winston.createLogger({
//   level: "info",
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.printf((info) => {
//       return `${info.timestamp} ${info.level}: ${info.message}`;
//     })
//   ),
//   transports: [new winston.transports.Console()],
// });

module.exports = logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: {
    service: "user-service",
  },
  transports: [
    new winston.transports.File({
      filename: "logs/all.log",
      level: "info",
    }),
  ],
});

// if we're local, log to console
if (process.env.NODE_ENV == "local") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
        winston.format.simple()
      ),
    })
  );
}

// if we're in AWS, log to cloudwatch
if (process.env.NODE_ENV == "AWS") {
  transports.push(
    new CloudWatchTransport({
      logGroupName: process.env.CLOUDWATCH_GROUP_NAME, // REQUIRED
      logStreamName: process.env.CLOUDWATCH_STREAM_NAME, // REQUIRED
      createLogGroup: true,
      createLogStream: true,
      submissionInterval: 2000,
      submissionRetryCount: 1,
      batchSize: 20,
      awsConfig: {
        accessKeyId: process.env.CLOUDWATCH_ACCESS_KEY_ID,
        secretAccessKey: process.env.CLOUDWATCH_SECRET_ACCESS_KEY,
        region: process.env.CLOUDWATCH_REGION,
      },
    })
  );
}
