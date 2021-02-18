const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const DataSchema = new Schema({
  name: String,
});

const DBSchema = mongoose.model("DBSchema", DataSchema);

module.exports = DBSchema;
