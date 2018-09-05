import express from 'express';
var router = express.Router();

// import controlers
import { loginController, indexController } from '../controllers/main';

/**
 * Router
 * map every request to controller
 */
router.get('/', indexController);

router.get('/login', loginController);

// export the router
export default router;
