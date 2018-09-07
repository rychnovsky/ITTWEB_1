/**
 * Workout controller
 */
import WorkoutProgram from '../models/workoutProgram';


// WorkoutProgram.create(new WorkoutProgram({ name: 'Lazy day' }));

var w = new WorkoutProgram({name : "Test Day"});
w.save().then(
  console.log("saved")
)
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

// get new workout from form
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

workoutController.addNewWorkout = (req, res) =>{
  console.log(req);
  req = {
    name : req.body.workout_name
  }
}
export default workoutController;
