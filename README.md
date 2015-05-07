# Simple Node API Server
This is a demo on building a simple API server. It shows a quick way of building API server that:

- modular in nature with each module that can be unit tested
- supports API versioning
- supports factory pattern to instantiate modules
- JSON RPC style APIs
- uses restifyJS

## Running the App

### Export NODE_PATH
export NODE_PATH=`<pwd>`:`<pwd>`/node_modules:`<pwd>`/common_modules

### Start the Server
node server.js

### API EndPoint
http://localhost:3001/v<versionNumber>

eg:

http://localhost:3001/v1

http://localhost:3001/v2

### Sample JSON Body to Post
    {
        "method":"sayHello",
        "params": {
            "name":"Rajat"
        }
    }


## Unit Testing & Code Coverage with Mocha and Chai

### Sample: Running Unit Tests
mocha helloWorld/test/*Test.js 

## Sample: Running Code Coverage
istanbul cover _mocha helloWorld/test/**.js  