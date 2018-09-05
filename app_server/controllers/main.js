/**
 * Main controller
 */

const title = 'Workout app';

/* GET home page */
export function indexController(req, res) {
  res.render('index', { title });
}

/* GET login page */
export function loginController(req, res) {
  res.render('login', { title });
}
