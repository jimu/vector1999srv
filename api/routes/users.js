'use strict';

module.exports = function(app) {
  var users = require('../controllers/users');

  app.route('/users')
    .get(users.get_users)
    .post(users.new_user);

  app.route('/users/:id')
    .get(users.get_user)
    .put(users.update_user)
    .delete(users.delete_user);
};
