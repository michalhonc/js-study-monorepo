function _respond(res, status, data, http_code) {
	var response = {
		'status': status,
		'data': data,
	};
	res.set('Content-type', 'application/json');
	res.status(http_code);
	res.json(response);
};

module.exports.success = function (res, data) {
	_respond(res, 'success', data, 200);
};

module.exports.failure = function (res, data, http_code) {
	_respond(res, 'failure', data, http_code);
};