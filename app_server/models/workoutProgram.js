import mongoose from 'mongoose';
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';
//import ExcerciseSchema from './excercise';
const Schema = mongoose.Schema;

//Excercise Schema
const ExcerciseSchema = new Schema({
  name: String,
  description: String,
  set: Number,
  duration: Number,
});

//Define a schema
const WorkoutProgramSchema = new Schema({
  name: String,
  excercises : [ExcerciseSchema],
});

WorkoutProgramSchema.plugin(MongooseAutoIncrementID.plugin, {
  modelName: 'WorkoutProgram',

});

let WorkoutProgramModel = mongoose.model(
  'WorkoutProgram',
  WorkoutProgramSchema,
);



//Export model
export default WorkoutProgramModel;

