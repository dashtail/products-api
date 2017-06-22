var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var schema = mongoose.Schema({
    username: {
        type : String,
        required : true
    },

    password: {
        type : String,
        required : true
    },

    created_at : {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Users', schema);
