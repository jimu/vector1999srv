'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'User name required'
  },
  email: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['invalid', 'pending', 'active', 'inactive', 'banned', 'retired', 'admin', 'superadmin']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Users', UserSchema);
