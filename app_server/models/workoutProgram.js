import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Define a schema
const WorkoutProgramSchema = new Schema({
  name: String,
});

let WorkoutProgramModel = mongoose.model(
  'WorkoutProgram',
  WorkoutProgramSchema,
);

WorkoutProgramModel.findAll = () => {
  return WorkoutProgramModel.find();
};

WorkoutProgramModel.create = programToAdd => {
  return programToAdd.save();
};

WorkoutProgramModel.remove = programName => {
  return WorkoutProgramModel.remove({ name: programName });
};

//Export model
export default WorkoutProgramModel;
