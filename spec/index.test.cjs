const { marked } = require('marked');
const { markedSmartypantsLite } = require('../lib/index.cjs');
const { runTests } = require('./run-tests.cjs');

runTests(marked, markedSmartypantsLite);
