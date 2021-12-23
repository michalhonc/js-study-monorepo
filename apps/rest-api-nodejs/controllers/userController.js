var helpers = require('../config/helperFunctions');
var UserModel = require('../models/userModel');

module.exports = function (app) {

	app.get('/users', function (req, res) {
		helpers.success(res, users);
	});

	app.get('/users/:id', function (req, res) {
		if (typeof(users[req.params.id]) === 'undefined') {
			helpers.failure(res, 'The specified user could not be found in DB', 404);
		};
		helpers.success(res, users[req.params.id]);
	});

	app.post('/users/add', function (req, res) {
		var user = new UserModel();
		user.first_name = req.body.first_name;
		user.last_name = req.body.last_name;
		user.email_address = req.body.email_address;
		user.career = req.body.career;
		user.save(function(err) {
			if(err) {
				helpers.failure(res, 'Error occured', 500);
			}
			helpers.success(res, user);
		});
	});

	app.put('/users/:id', function (req, res) {
		if (typeof(users[req.params.id]) === 'undefined') {
			helpers.failure(res, 'The specified user could not be found in DB', 404);
		};
		var user = users[req.params.id];
		var updates = req.body;
		for (var field in updates) {
			user[field] = updates[field];
		}
		helpers.success(res, user);
	});

	app.delete('/users/:id', function (req, res) {
		if (typeof(users[req.params.id]) === 'undefined') {
			helpers.failure(res, 'The specified user could not be found in DB', 404);
		};
		delete users[req.params.id];
		helpers.success(res, []);
	});

}

