const studentNotesModel = require("../model/studentNotesSchema");

const insertNotes = async (req, res) => {
  try {
    const { title, description, subject, date } = req.body;

    const note = new studentNotesModel({
      title,
      description,
      subject,
      date // optional, default will apply if not sent
    });

    await note.save();

    res.json({
      status: 1,
      message: "Notes Created Successfully",
      data: note
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: err.message
    });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await studentNotesModel.find();
    res.json({
      status: 1,
      data: notes
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: err.message
    });
  }
};

module.exports = { insertNotes, getNotes };