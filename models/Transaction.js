const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userName:  { type: String },
  userRole:  { type: String },
  bookId:    { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  bookTitle: { type: String },
  bookNumber:{ type: String },
  type:      { type: String, enum: ['borrow', 'return', 'reading'], required: true },
  lentAt:    { type: Date, default: Date.now },
  dueDate:   { type: Date },
  returnedAt:{ type: Date },
  status:    { type: String, enum: ['active', 'returned', 'reading'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema, 'transactions');
