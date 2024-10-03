import logger from "./Logger.js";
const levels = [logger.info, logger.error];
function WriteLogs(req, res) {
	logger.info(
		JSON.stringify({
			request_status: logger.REQ,
			method: req.method,
			url: req.originalUrl,
			client_details: { host: req.headers.host, platform: req.headers["sec-ch-ua-platform"], origin: req.headers.origin, referer: req.headers.referer },
			body: req.body
		})
	);
	// Capture the original send function
	const originalSend = res.json;
	const originalStatus = res.status;

	res.status = function (statusCode) {
		return originalStatus.call(this, statusCode);
	};
	// Override the res.send function to capture the response body
	res.json = function (body) {
		// Log outgoing response
		const level = res.statusCode == 500 ? levels[1] : levels[0];
		level(
			JSON.stringify({
				request_status: logger.RES,
				method: req.method,
				url: req.originalUrl,
				statusCode: res.statusCode,
				body: body
			})
		);
		// Call the original res.send with the body
		return originalSend.call(this, body);
	};
}
export default WriteLogs;
