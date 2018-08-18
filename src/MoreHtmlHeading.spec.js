const {spec: describe, unit: it} = require('kavun');
const assert = require('assert');

const umlautsMap = {
  'ü': 'ue',
};
const replaceWith = (s, replacements) => s.split('').map(char => char in replacements ? replacements[char] : char).join(''); 
const handleSpecialChars = s =>
  replaceWith(s, umlautsMap);

const headlineToHash = headline => {
  const lowerCase = s => s.toLowerCase();
  const spaceToDash = s => s.replace(/\s/, '-');
  const hash = () => (+(headline.toString().split('').map(s => s.charCodeAt(0)).join(''))).toString(32).substr(0, 7);  
  return handleSpecialChars(spaceToDash(lowerCase(headline))) + `---${hash()}`;
};

describe('Build hash from the headline text', () => {
  it('for "A Headline" generate all lower case with a hash at the end', () => {
    const headline = 'A Headline';
    assert.equal(headlineToHash(headline), 'a-headline---1m169ii');
  });
  it('the hash is deterministic, generates the same every time for the same string', () => {
    const headline = 'Should RESULT in the same hash every time ...';
    assert.equal(headlineToHash(headline), headlineToHash(headline));
  });
  describe('special character handling', () => {
    it('umlaut `ü` gets extended to `ue` (for ze germans)', () => assert(headlineToHash('ü').startsWith('ue')));
  });
});

