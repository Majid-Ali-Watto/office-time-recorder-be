import express from "express";
const router = express.Router();
import Entry from "../Schemas/entrySchema.js";
import Exit from "../Schemas/exitSchema.js";

router.delete("/", async function (req, res) {
	const { exitId, entryId } = req.body.record;
	try {
		await Exit.findByIdAndDelete({ _id: exitId });
		await Entry.findByIdAndDelete({ _id: entryId });
		res.status(200).json({ msg: "Records have been successfully deleted." });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

export default router;
