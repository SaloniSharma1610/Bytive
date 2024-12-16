const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const task_router = require("./Routes/showRoutes.js");

app.use(express.json());
app.use(cors());

// Building port
const port = process.env.port || 5000;

// Establishing Server
app.listen(port, () => {
  console.log(`Server started successfully on http://localhost:${port}`);
});

// Establishing Database
mongoose
.connect(
  "mongodb+srv://mpandeymp0:mayank123@cluster0.ynmpi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("Database successfully connected"))
.catch((err) => console.error(err));

app.use("/",task_router)