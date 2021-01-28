const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  id: { type: Number, index: { unique: true } },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  coverId: { type: Number}
});

module.exports = mongoose.model('Book', BookSchema);