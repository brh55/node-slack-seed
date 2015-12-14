var utilTest = require('nodeunit').testCase;
// Require your desired JS file you want to test
// var desiredJs = require('../desiredJs');

module.exports = utilTest({
    DeclareTrue: function (test) {
    	var truthVal = true;
    	test.equal(truthVal, true);
        test.done();
    }
});
