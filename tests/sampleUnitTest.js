var utilTest = require('nodeunit').testCase;

module.exports = utilTest({
    LogsPort: function (test) {
        var expectFalse = util.allDefined(undefMockObj);

        test.done();
    }
});
