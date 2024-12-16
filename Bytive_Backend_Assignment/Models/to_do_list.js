const mongoose = require("mongoose");
const task_schema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Task", task_schema);
