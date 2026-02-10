const express = require("express");
const { insertNotes, getNotes } = require("../controller/notesController");

const router = express.Router();

router.get("/", getNotes);
router.post("/", insertNotes);

module.exports = router;