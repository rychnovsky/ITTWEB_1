var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var dbURI =
  'mongodb://ittweb:hSp-2n6-gsJ@ds143242.mlab.com:43242/heroku_nsxw51lr';

mongoose.connect(
  dbURI,
  { useNewUrlParser: true },
);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Close the connection
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

const exerciseSchema = new Schema({
  name: String,
  description: String,
  set: Number,
  repsOrTime: Number,
})

var exercise = mongoose.model('exercise', exerciseSchema);

var exercises = new exercise();
exercises.name = 'Situps';
exercises.description = 'Lie flat on your back and without lifting your legs lift you chest up and touch your knees';
exercises.set = 10;
exercises.repsOrTime = 3;
