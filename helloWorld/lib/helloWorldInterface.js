

function v1(version) {
    this.version = version ? version : 1;
}

// Properties and Member functions
v1.version = 1;

// Sub class: Calling it as version 2
function v2(version) {
    this.version = version ? version : 2;
    v1.prototype.constructor.call(this, this.version);
}

// Properties and Member functions
v2.version = 2;
v2.prototype = new v1(v2.version);

// Exports
hello = {};
hello.v1 = v1;
hello.v2 = v2;


