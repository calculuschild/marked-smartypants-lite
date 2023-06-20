import { marked } from 'marked';
import { markedSmartypantsLite } from '../lib/index.mjs';
import { runTests } from './run-tests.cjs';

runTests(marked, markedSmartypantsLite);
