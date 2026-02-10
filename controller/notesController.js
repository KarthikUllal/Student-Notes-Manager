const studentNotesModel = require("../model/studentNotesSchema");

// Insert Notes
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

//Get Notes
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


//updates what user sends in the request body
const updateNotes = async (req, res) =>{
    const id = req.params.id
    try{
        const updateNotes = await studentNotesModel.updateOne({_id : id}, {$set : req.body})
        res.json({
            status : 1,
            message : "Notes updated",
            data : updateNotes
        })
    }
    catch(err){
        res.json({
            status : 0,
            message : "Error while updating notes",
            error : err
        })
    }
}

//delete notes

module.exports = { insertNotes, getNotes, updateNotes};