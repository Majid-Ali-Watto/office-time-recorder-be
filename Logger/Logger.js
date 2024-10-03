import { createLogger, transports, format } from "winston";
const { combine, timestamp, printf } = format;
import { days } from "../Utils/date.utility.js";
import { logStatus } from "../Utils/logger-status.js";
// Define log format
const logFormat = printf(({  level, message, timestamp }) => {
	return `${timestamp} ${days[new Date().getDay() - 1]} ${level}: =>  ${message}`;
});

// Create logger
const logger = createLogger({
	format: combine(
		timestamp({
			format: "DD-MM-YYYY HH:mm:ss", // Specify the desired timestamp format
			timezone: "Asia/Karachi" // Set the timezone to Pakistan (Asia/Karachi)
		}),
		logFormat
	),
	transports: [
		new transports.File({ filename: "app.log" }) // Save logs to a file named 'app.log'
	]
});
logger.REQ = logStatus.REQ;
logger.RES = logStatus.RES;
console.log(logger.RES);
export default logger;
