const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a schema
const ModelASchema = new Schema({
  author: Schema.ObjectId,
  title: String,
  body: String,
});

//Export model
module.exports = mongoose.model('ModelA', ModelASchema);
