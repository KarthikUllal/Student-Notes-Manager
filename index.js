const e = require("express")
const express = require("express")
const mongoose = require("mongoose")
const env = require('dotenv')
const cors = require('cors')

const app = express()


app.use(express.json())

app.use(cors())

mongoose.connect(process.env.DBURL).then(() =>{
    console.log("Connection estalished")

    app.listen(process.env.PORT, () =>{
        console.log("Server running on port : ", process.env.PORT)
    })
}).catch((err) =>{
    console.log("Error while establishin Connnection !!!")
})
