/* GET home page */

const title = 'Workout app';

module.exports.index = function(req, res) {
  res.render('index', { title });
};

module.exports.login = function(req, res) {
  res.render('login', { title });
};
