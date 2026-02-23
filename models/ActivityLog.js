const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  userId:   { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  userName: { type: String },
  userRole: { type: String },
  action:   { type: String },
  bookTitle:{ type: String },
  details:  { type: String },
  timestamp:{ type: Date, default: Date.now }
});

module.exports = mongoose.model('ActivityLog', activityLogSchema, 'activityLogs');
