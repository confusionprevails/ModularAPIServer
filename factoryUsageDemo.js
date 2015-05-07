var factory = require('factory');

var helloObj=factory.getModuleByVersion('helloWorld',1);
helloObj.getMessage({name:'Rajat'}, function(err,data){
    console.log(data);
});


var helloObj2=factory.getModuleByVersion('helloWorld',2);
helloObj2.getMessage({name:'Rajat'}, function(err,data){
    console.log(data);
});

factory.invoke('helloWorld',2,'getMessage',{name:'Rajat'}, function(err,data){
    console.log(data);
});

factory.invoke('helloWorld',1,'getMessage',{name:'Rajat'}, function(err,data){
    console.log(data);
});


var helloObj3=factory.getModuleByVersion('helloWorld',5);
helloObj3.getMessage({name:'Rajat'}, function(err,data){
    console.log(data);
});