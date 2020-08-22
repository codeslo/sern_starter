const winston = require("winston");

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
  format: winston.format.json(),
  defaultMeta: {
    service: "user-service",
  },
  transports: [
    new winston.transports.File({
      filename: "logs/all.log",
      level: "all",
    }),
  ],
});

// if we're local, log to console
if (process.env.NODE_ENV == "local") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
