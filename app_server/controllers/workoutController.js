/**
 * Workout controller
 */
import WorkoutProgram from '../models/workoutProgram';

// Page variables
const pageTitle = 'Workout app';

let workoutController = {};

// show list of all workout programs
workoutController.list = (req, res) => {
  WorkoutProgram.findAll().then(workouts =>
    res.render('workoutList', { pageTitle, workouts }),
  );
};

// show detail of one workout program
workoutController.detail = (req, res) => {
  const workoutId = req.params.id;
  WorkoutProgram.findAll().then(workouts =>
    res.render('workoutDetail', {
      pageTitle: `Workout detail - id: ${workoutId}`,
      workouts,
    }),
  );
};

export default workoutController;
