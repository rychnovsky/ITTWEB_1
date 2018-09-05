import mongoose from 'mongoose';
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';

const Schema = mongoose.Schema;

//Define a schema
const WorkoutProgramSchema = new Schema({
  name: String,
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
