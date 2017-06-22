module.exports = function (app){
    var mongoose = require('mongoose');
    var jwt = require('jsonwebtoken');

    var api = {}
    var model = mongoose.model('Users');

    api.Auth = function (req, res){
        console.log(req.body);
        console.log(req.body.username);
        console.log("request");
        model
          .findOne({username: req.body.username, password:req.body.password})
          .then(function(user){
              if(!user){
                console.log('user invalid');
                res.sendStatus(401);
              }else{
                var token = jwt.sign({username: user.username}, app.get('secret'),
                    {expiresIn: 1000});

                res.set('x-access-token', token);
                res.end();

              }
          }, function(error){
            console.log(error);
            res.sendStatus(401);
          });
    };

    api.checkToken = function(req, res, next){
        var token = req.headers('x-access-token');
        if (token){
            jwt.verify(token, app.get('secret'),function(err, decoded){
                if(err){
                    console.log('token invalid');
                    res.sendStatus(401);
                }
                req.user = decoded;
                next();
            });
        }else{
            console.log('token invalid');
            res.sendStatus(401);
        }
    };
    return api;
};
