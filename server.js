import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(bodyParser.json({ limit: "5mb" }));
app.use(cors({ origin: "*" }));

config();
import Add from "./Routes/Add.route.js";
import Delete from "./Routes/Delete.route.js";
import View from "./Routes/View.route.js";
import Update from "./Routes/Update.route.js";
import WriteLogs from "./Logger/Req_Res_Logger.js";
// app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

// Middleware to log request and response
app.use((req, res, next) => {
	WriteLogs(req, res);
	next();
});
// Routes
app.use("/add", Add);
app.use("/delete", Delete);
app.use("/", View);
app.use("/update", Update);
mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => console.log("Database Connected!"))
	.catch((error) => console.log("Error while connecting to db", error));
app.listen(process.env.PORT || 3100, () => {
	console.log(`Server running on PID ${process.pid} and Port ${process.env.PORT}.`);
});
