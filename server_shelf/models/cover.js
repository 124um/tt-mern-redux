const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoverSchema = new Schema({
  id: { type: Number, index: { unique: true } },
  name: { type: String, default: '' }
});

module.exports = mongoose.model('Cover', CoverSchema);