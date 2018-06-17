var mongoose = require('mongoose');

var schema = new mongoose.Schema({

    userName: String,
    passWord: String
},{collection: 'user'});

module.exports = mongoose.model('user',schema);