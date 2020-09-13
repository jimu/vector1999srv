'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.get_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.new_user = function(req, res) {
  var user = new User(req.body);
  user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.get_user = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(cerr, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_user = function(req, res) {
  User.remove({_id: req.params.userId}, function(err, user) {
    if (err)
      res.send(err);
    res.json({message: 'User successfully deleted'});
  });
};

