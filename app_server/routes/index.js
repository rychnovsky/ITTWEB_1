import express from 'express';
var router = express.Router();

// import controlers
import workoutController from '../controllers/workoutController';

/**
 * Router
 * map every request to controller
 */
router.get('/', workoutController.list);

router.get('/workout/:id', workoutController.detail);

router.post('/', workoutController.addNewWorkout);

router.post('/workout/:id', workoutController.addNewExercise);

// router.get('/login', loginController);

// export the router
export default router;
