module.exports = function (app){
    var api = app.api.Auth;

    app.route('/auth')
        .post(api.Auth);

    //router.use('/*', api.CheckToken);

};
