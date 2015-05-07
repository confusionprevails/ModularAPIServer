'use strict';

require('./helloWorldInterface');

hello.v1.prototype.getMessage = function(params, callback) {
    var name=params.name;
    return buildMessage('Hello', name, callback);

};

hello.v2.prototype.getMessage = function(params, callback) {
    var name=params.name;
    return buildMessage('Hola', name, callback);

};

function buildMessage(customString, name, callback){
    var message=customString+' '+ name;
    return callback(null,message);
}

exports.v1 = hello.v1;
exports.v2 = hello.v2;

