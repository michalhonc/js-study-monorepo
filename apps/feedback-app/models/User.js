const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleID: {
        type: String,
        unique: true
    }
});

module.exports = mongoose.model('users', userSchema);
