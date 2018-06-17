var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    status: {
        type: String,
        enum: ['PENDING','PROCESSING','COMPLETED'],
        default: 'PENDING'
    },
    totalPrice: {
        type: Number,
        required: true
    },
    listProduct:{
        type:[],
        required: true
    },
    guestInfor:{
        name:{type: String, required: true},
        email:{type: String, required: true},
        phoneNumber:{type: String, required: true},
        other: [String]
    }
},{
    versionKey: false // You should be aware of the outcome after set to false
},{collection: 'order'});

module.exports = mongoose.model('order',schema);