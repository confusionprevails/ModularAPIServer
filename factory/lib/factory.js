// Local Object to store references to modules being used
var objArray = {};

// Gets the module instance by passing name and version
// If the version doesn't exist, decrements 1 number and checks again
function getModuleByVersion(modulename, version) {
    version = parseInt(version);
    while (version > 1 && !checkIfVersionExists(modulename, version)) {
        version--;
    }
    return instantiate(modulename, version); //return new modulename.v + version;
}


// Invokes the method by passing modulename, version, methodname and callback (if needed)
function invoke(modulename, version, methodname, param, callback) {
    var moduleObject = getModuleByVersion(modulename, version);
    if (typeof callback === 'function') {
        if (moduleObject[methodname]) {
            moduleObject[methodname](param, callback);
        }
        else {
            console.log("method does not exist");
        }
    }
    else {
        if (moduleObject[methodname]) {
            moduleObject[methodname](param);
        }
        else {
            console.log("method does not exist : Module : " + modulename + " , Method : " + methodname);
        }
    }
}

// Checks if the version exists in the passed in module, if so, returns true, else false
function checkIfVersionExists(modulename, version) {
    var moduleObject = require(modulename);
    var classname = "v" + version;
    if (moduleObject[classname]) {
        return true;
    }
    else {
        return false;
    }
}

// Instantiates the correct class version of the passed in module
function instantiate(modulename, version) {
    var instance;
    var classname = "v" + version;
    var moduleObject = require(modulename);
    if(objArray[modulename+'.'+version] == undefined) {
        if (moduleObject[classname]) {
            instance = new moduleObject[classname]();
            objArray[modulename+'.'+version] = instance;
        }
    }
    else {
        instance = objArray[modulename+'.'+version];
    }
    return instance;
}


// Exports
exports.invoke = invoke;
exports.getModuleByVersion = getModuleByVersion;