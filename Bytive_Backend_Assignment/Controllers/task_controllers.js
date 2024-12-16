const taskSchema = require("../Models/to_do_list");
module.exports.getTaskList = async (req, res) => {
  try {
    const taskList = await taskSchema.find();
    res.send(taskList);
  } catch (error) {
    console.log(`Error fetching tasks list ${error}`);
    res.status(500).json({ error: "Internal server error." });
  }
};
