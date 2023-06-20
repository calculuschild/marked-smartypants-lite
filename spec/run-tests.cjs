module.exports = {
  runTests(marked, markedSmartypantsLite) {
    describe('markedSmartypantsLite', () => {
      beforeEach(() => {
        marked.setOptions(marked.getDefaults());
				marked.use({ mangle: false, headerIds: false });
      });

      test('quotes inside strong', () => {
        marked.use(markedSmartypantsLite());
        expect(marked('**"test"**')).toMatchInlineSnapshot(`
"<p><strong>“test”</strong></p>
"
`);
      });

      test('simple sentence', () => {
        marked.use(markedSmartypantsLite());
        expect(marked('# He said, -- "A \'simple\' sentence. . ." --- unknown', { headerIds: false })).toMatchInlineSnapshot(`
"<h1>He said, – “A ‘simple’ sentence. . .” — unknown</h1>
"
`);
      });

      test('leaves codespan', () => {
        marked.use(markedSmartypantsLite());
        expect(marked('`He said, -- "A \'simple\' sentence. . ." --- unknown`')).toMatchInlineSnapshot(`
    "<p><code>He said, -- &quot;A &#39;simple&#39; sentence. . .&quot; --- unknown</code></p>
    "
    `);
      });

      test('leaves code block', () => {
        marked.use(markedSmartypantsLite());
        expect(marked('```\nHe said, -- "A \'simple\' sentence. . ." --- unknown\n```')).toMatchInlineSnapshot(`
    "<pre><code>He said, -- &quot;A &#39;simple&#39; sentence. . .&quot; --- unknown
    </code></pre>
    "
    `);
      });
    });
  }
};
