const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  question_1: { type: Number, required: true },
  question_2: { type: Number, required: true },
  question_3: { type: Number, required: true },
  question_4: { type: Number, required: true },
  question_5: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Survey', surveySchema);
