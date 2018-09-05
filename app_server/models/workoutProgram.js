const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a schema
const WorkoutProgramSchema = new Schema({
  name: Schema.ObjectId,
});

//Export model
module.exports = mongoose.model('WorkoutProgram', WorkoutProgramSchema);
