const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  coverId: { type: Schema.Types.ObjectId, ref:'Cover'}
});

module.exports = mongoose.model('Book', BookSchema);