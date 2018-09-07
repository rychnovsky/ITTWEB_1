/**
 * Workout controller
 */
import WorkoutProgram from '../models/workoutProgram';

// Page variables
const pageTitle = 'Workout app';

let workoutController = {};

// show list of all workout programs
workoutController.list = (req, res) => {
  WorkoutProgram.find().then(workouts =>
    res.render('workoutList', { pageTitle, workouts }),
  );
};

// show detail of one workout program
workoutController.detail = (req, res) => {
  const workoutId = req.params.id;
  WorkoutProgram.findById(workoutId).then(workouts =>
    res.render('workoutDetail', {
      pageTitle: `Workout detail - id: ${workoutId}`,
      workouts,
    }),
  );
};

// get new excercise from form
workoutController.addNewExercise = (req, res) =>{
  console.log(req)
  req = {
    name : req.body.exercise_name,
    description : req.body.description,
    set : req.body.num_per_set,
    duration : req.body.num_sets
  };
  WorkoutProgram.create(new WorkoutProgram(req));
}

// add new workout from form
workoutController.addNewWorkout = (req, res) =>{
  console.log(req);
  req = {
    name : req.body.workout_name
  }
  var w = new WorkoutProgram(req);
  w.save().then(
    console.log("saved")
  )
}
export default workoutController;
