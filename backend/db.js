const mongoose = require("mongoose");
// Schema for mongo db
// Todo{
//     title: string;
//     RTCSessionDescription; string
//     completed: boolean
// }
mongoose.connect();
const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", TodoSchema);

module.exports = {
  todo,
};
