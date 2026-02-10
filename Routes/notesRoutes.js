const express = require("express");
const { insertNotes, getNotes, updateNotes } = require("../controller/notesController");

const router = express.Router();

router.get("/", getNotes);
router.post("/", insertNotes);
router.patch("/:id",updateNotes)

module.exports = router;