const {spec: describe, unit: it} = require('kavun');
const assert = require('assert');

describe('Build hash from the headline text', () => {
  it('for "A Headline" generate all lower case with a hash at the end', () => {
    const headline = 'A Headline';
    assert.equal(headlineToHash(headline), 'a-headline---8439ek');
  });
});
