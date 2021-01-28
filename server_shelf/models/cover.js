const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoverSchema = new Schema({
  name: { type: Number, default: '' }
});

module.exports = mongoose.model('Cover', CoverSchema);