const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: String,
  textSearch: String,
  tasks: [String],
});

module.exports = Item = mongoose.model("item", ItemSchema);
