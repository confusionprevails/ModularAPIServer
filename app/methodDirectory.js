var helloController = require('./controllers/helloController.js')
var methodDirectory = {

    sayHello : {
        call : helloController.sayHello
    }

};
module.exports = methodDirectory;