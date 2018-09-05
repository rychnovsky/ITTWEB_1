const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a schema
const ExcerciseSchema = new Schema({
  name: Schema.ObjectId,
  description: String,
  set: Number,
  duration: Number,
});

//Export model
module.exports = mongoose.model('Excercise', ExcerciseSchema);
