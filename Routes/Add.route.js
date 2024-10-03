import express from "express";
import Entry from "../Schemas/entrySchema.js";
import Exit from "../Schemas/exitSchema.js";
import { dayName, fullDate, fullTime } from "../Utils/date.utility.js";
const router = express.Router();

router.post("/", async function (req, res) {
	try {
		let msg = "";
		const { status } = req.body;
		if (status === "Exit") {
			if (!(await Exit.findOne({ exit_date: fullDate() }))) {
				await Exit.create({
					exit_date: fullDate(),
					exit_time: fullTime(),
					exit_day: `${dayName()}`
				});
				msg = "Exit is successfully marked";
				return res.status(201).json({ msg });
			} else msg = "Exit status is already marked";
		} else if (status === "Entry") {
			if (!(await Entry.findOne({ entry_date: fullDate() }))) {
				await Entry.create({
					entry_date: fullDate(),
					entry_time: fullTime(),
					entry_day: `${dayName()}`
				});
				msg = "Entry is successfully marked";
				return res.status(201).json({ msg });
			} else msg = "Entry status is already marked";
		}
		res.status(409).json({ msg });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

export default router;
