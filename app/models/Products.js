var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var schema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },

    description:{
      type : String,
      required : true,
    },

    created_at : {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Product', schema);
