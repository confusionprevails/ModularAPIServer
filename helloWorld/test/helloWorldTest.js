var should = require('chai').should();
var factory = require('factory');

// v1 Instance
var helloWorld =null;

//sample input params


describe('Test Hello World Module v1', function(){

    it('before', function(done){
       // runs before all the tests
       helloWorld = factory.getModuleByVersion('helloWorld',1);
       done();
    });

    it('Simple Message', function(done){
        var params = {name:'Rajat'};
        helloWorld.getMessage(params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hello '+params.name);
            done();
        })
    });

    it('Simple Message Different Name', function(done){
        var params = {name:'Rajat 2'};
        helloWorld.getMessage(params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hello '+params.name);
            done();
        })
    });

    it('Simple Message Blank Name', function(done){
        var params = {name:''};
        helloWorld.getMessage(params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hello '+params.name);
            done();
        })
    });

    it('Simple Message No Name', function(done){
        var params = {name2:''};
        helloWorld.getMessage(params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hello undefined');
            done();
        })
    });
});


describe('Test Hello World Module v2', function(){

    it('before', function(done){
        // runs before all the tests
        helloWorld = factory.getModuleByVersion('helloWorld',2);
        done();
    });

    it('Simple Message', function(done){
        var params = {name:'Rajat'};
        helloWorld.getMessage(params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hola '+params.name);
            done();
        })
    });

    it('Simple Message Different Name', function(done){
        var params = {name:'Rajat 2'};
        helloWorld.getMessage(params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hola '+params.name);
            done();
        })
    });

    it('Simple Message Blank Name', function(done){
        var params = {name:''};
        helloWorld.getMessage(params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hola '+params.name);
            done();
        })
    });

    it('Simple Message No Name', function(done){
        var params = {name2:''};
        helloWorld.getMessage(params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hola undefined');
            done();
        })
    });
});


describe('Test Hello World Module v3 -- should be same as v2', function(){

    it('before', function(done){
        // runs before all the tests
        helloWorld = factory.getModuleByVersion('helloWorld',3);
        done();
    });

    it('Simple Message', function(done){
        var params = {name:'Rajat'};
        helloWorld.getMessage(params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hola '+params.name);
            done();
        })
    });

    it('Simple Message Different Name', function(done){
        var params = {name:'Rajat 2'};
        helloWorld.getMessage(params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hola '+params.name);
            done();
        })
    });

    it('Simple Message Blank Name', function(done){
        var params = {name:''};
        helloWorld.getMessage(params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hola '+params.name);
            done();
        })
    });

    it('Simple Message No Name', function(done){
        var params = {name2:''};
        helloWorld.getMessage(params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hola undefined');
            done();
        })
    });
});

describe('Test Hello World Module using factory.invoke()', function(){



    it('Simple Message v2', function(done){
        var params = {name:'Rajat'};

        factory.invoke('helloWorld',2,'getMessage',params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hola '+params.name);
            done();
        });

    });

    it('Simple Message v1', function(done){
        var params = {name:'Rajat'};

        factory.invoke('helloWorld',1,'getMessage',params, function(err,message){
            message.should.be.a('string');
            message.should.equal('Hello '+params.name);
            done();
        });

    });


});

