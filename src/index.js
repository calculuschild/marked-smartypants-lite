export function markedSmartypantsLite() {
  return {
    tokenizer: {
      inlineText(src) {
        // don't escape inlineText
        const cap = this.rules.inline.text.exec(src);

        /* istanbul ignore next */
        if (!cap) {
          // should never happen
          return;
        }

        const text = cap[0]
        // em-dashes
          .replace(/---/g, '\u2014')
        // en-dashes
          .replace(/--/g, '\u2013')
        // opening singles
          .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
        // closing singles & apostrophes
          .replace(/'/g, '\u2019')
        // opening doubles
          .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
        // closing doubles
          .replace(/"/g, '\u201d')
        // ellipses
          .replace(/\.{3}/g, '\u2026');

        return {
          type: 'text',
          raw: cap[0],
          text
        };
      }
    }
  };
}
