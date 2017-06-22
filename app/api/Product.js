var mongoose = require('mongoose');

module.exports = function (app) {
    var api = {};

    var model = mongoose.model('Product');

    api.List = function (req, res) {
        var page = (req.params.res) ? req.params.res : 0;
        model
          .find({})
          .then(function (product) {
              res.json(product);
          }, function (error) {
              console.log(error);
              res.status(500).json(error);
        });
    };

    api.Create = function (req, res) {
        console.log(req.body);
        model
          .create(req.body)
          .then(function (product) {
              res.json(product);
          }, function (error) {
              console.log(error);
              res.status(500).json(error);
        });
    };

    api.Detail = function(req, res){
      model
        .findById(req.params.id)
        .then(function(product){
            if (!product) throw Error("404 product not found");
            res.json(product);
        }, function(error){
            console.log(error);
            res.status(404).json(error);
        });
    };

    api.Delete = function(req,res){
      model
        .remove({_id: req.params.id})
        .then(function(){
            res.json('deleted');
        },function (error) {
            console.log(error);
            res.status(500).json(error);
        });
    };

    api.Update = function (req, res) {
      model
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function(product){
            res.json(product);
        },function (error) {
            console.log(error);
            res.status(500).json(error);
        });
    };

    return api;
};
