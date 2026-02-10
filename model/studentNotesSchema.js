const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

let studentNotesModel = mongoose.model("Notes", notesSchema)

module.exports = studentNotesModel