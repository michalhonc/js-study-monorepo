var mongoose = require('mongoose');

var Schema = mongoose.Schema,
  	ObjectId = Schema.ObjectId;

var userSchema = new Schema({
    id:  ObjectId,
    first_name: String,
    last_name:   String,
    email_address: String,
    carrer: String
});

var UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;