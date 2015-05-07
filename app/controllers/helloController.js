var factory = require('factory');


/* Our Controller Object */
var helloController = function() {

};

helloController.prototype.sayHello = function(res, params, version, auth){
    var helloObj=factory.getModuleByVersion('helloWorld',version);
    var name = params.name;
    helloObj.getMessage({name:name}, function(err,data){
        res.json({'data':data});
    });
}

//respond with creating a new instance
module.exports = new helloController();