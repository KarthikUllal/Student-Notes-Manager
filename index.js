const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const notesRoutes = require("./Routes/notesRoutes");

const app = express();

app.use(cors());
app.use(express.json());
console.log("Notes routes loaded:", typeof notesRoutes);

app.use("/api/notes", notesRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connection established");
    app.listen(process.env.PORT, () => {
      console.log("Server running on port:", process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });