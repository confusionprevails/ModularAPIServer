var restify = require('restify');
var methodDirectory = require('./app/methodDirectory.js');

var server = restify.createServer();

server.pre(restify.pre.userAgentConnection());

var consoleRequest = function(req,res,next){
    console.log('Received a Request!');
    return next();
};

var extract = function(value){
    if(value.length<2){
        return 1;
    }
    var val=1;
    try{
        val=parseInt(value.substr(1));
    }
    catch(err){
        return val;
    }
}
var handleRequest = function(req, res, next){
    console.log(req.params);
    console.log(req.body);
    var bodyJSON = req.body;
    var methodName = bodyJSON.method;
    var methodParams= bodyJSON.params;
    var methodVersion= extract(req.params.version);

    if (methodDirectory[methodName]) {
        methodDirectory[methodName].call(res, methodParams,methodVersion)
    }
    else{
        res.json({'error':'No Method Found'});
    }
    //res.json({'data':api});
};
server.use(restify.bodyParser({
    maxBodySize: 0,
    mapParams: false
}));
server.use(consoleRequest);

server.post('/:version', handleRequest);

server.listen(3000, function() {
    console.log('%s listening at %s', server.name, server.url);
});



