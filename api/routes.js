var express = require('express');
var router = express.Router();
var User = require('./models/user');
var Account = require('./models/account');
var Transaction = require('./models/transaction');

// Middleware for all this routers requests
router.use(function timeLog(req, res, next) {
  console.log('Request Received: ', dateDisplayed(Date.now()));
  next();
});

// Welcome message for a GET at http://localhost:8080/restapi
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the REST API' });
});

// GET all users (using a GET at http://localhost:8080/users)
router.route('/users')
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err)
        res.send(err);
      res.json(users);
    });
  });

// Create a new user (using POST at http://localhost:8080/users)
router.route('/users')
  .post(function(req, res) {
    var user = new User();
    // Set username and password values from the request
    user.username = req.body.username;
    user.password = req.body.password;

    // Save user and check for errors
    user.save(function(err) {
      if (err)
        res.send(err);
      res.json({ user: 'User created successfully!' });
    });
  });

// GET message with id (using a GET at http://localhost:8080/users/:message_id)
router.route('/users/:user_id')
  .get(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  })

  .put(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err)
        res.send(err);
      // Update the user data
      user.username = req.body.username;
      user.password = req.body.password;
      user.save(function(err) {
        if (err)
          res.send(err);
        res.json({ user: 'User successfully updated!' });
      });
    });
  })

  .delete(function(req, res) {
    User.remove({
      _id: req.params.user_id
    }, function(err, user) {
      if (err)
        res.send(err);

      res.json({ user: 'Successfully deleted user!' });
    });
  });

module.exports = router;

function dateDisplayed(timestamp) {
  var date = new Date(timestamp);

  return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}