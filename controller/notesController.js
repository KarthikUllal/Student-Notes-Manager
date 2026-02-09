const studentNotesModel = require("../model/studentNotesSchema")


const insertNotes = async (req, res) =>{
    let {title, description, subjec, date } = req.body

    const notesInsert = studentNotesModel.insertOne({
        title,
        description,
        subject,
        date
    })
}