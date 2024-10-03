import express from "express";
import Entry from "../Schemas/entrySchema.js";
import Exit from "../Schemas/exitSchema.js";
const router = express.Router();

router.get("/", async function (_req, res) {
	try {
		const entries = await Entry.find({});
		const exits = await Exit.find({});
		res.status(200).json({ entries, exits });
	} catch (err) {
		res.status(500).json({
			error: {
				message: err.message
			}
		});
	}
});

export default router;
