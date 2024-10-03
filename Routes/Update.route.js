import express from "express";
const router = express.Router();
import Entry from "../Schemas/entrySchema.js";
import Exit from "../Schemas/exitSchema.js";

router.patch("/", async function (req, res) {
	const { id, type, updateData } = req.body; // Assuming `id`, `type`, and `updateData` are sent in the request body

	try {
		let updatedRecord;

		if (type === "Entry") {
			updatedRecord = await Entry.findByIdAndUpdate(id, updateData, { new: true }); // `new: true` returns the updated document
		} else if (type === "Exit") {
			updatedRecord = await Exit.findByIdAndUpdate(id, updateData, { new: true });
		}

		if (!updatedRecord) {
			return res.status(404).json({ error: `${type} record not found.` });
		}

		res.status(200).json({ msg: `${type} updated successfully`, data: updatedRecord });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

export default router;
