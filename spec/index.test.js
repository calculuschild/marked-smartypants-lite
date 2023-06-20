import { marked } from 'marked';
import { markedSmartypantsLite } from '../src/index.js';
import { runTests } from './run-tests.cjs';

runTests(marked, markedSmartypantsLite);
