import express from 'express';
var router = express.Router();

// import controlers
import { indexController, indexController } from '../controllers/main';

/**
 * Router
 * map every request to controller
 */
router.get('/', indexController);

router.get('/login', indexController);

// export the router
export default router;
