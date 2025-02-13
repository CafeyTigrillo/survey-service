const mongoose = require('mongoose');

const mongoURI = 'mongodb://admin:adminpass@localhost:27017/surveyDB?authSource=admin';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
