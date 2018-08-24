const mongoose = require('mongoose');

const potySchema = mongoose.Schema({
  title: { type: String, required: true }
});

module.exports = mongoose.model('Potys', potySchema);