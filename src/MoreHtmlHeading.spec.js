import {spec as describe, unit as it} from 'kavun';
import assert from 'assert';
import {headlineToHash} from './headline-to-hash.js';

describe('Build hash from the headline text', () => {
  it('for "A Headline" generate all lower case with a hash at the end', () => {
    const headline = 'A Headline';
    assert.equal(headlineToHash(headline), 'a-headline---1m169ii');
  });
  it('replace spaces by dashes', () => {
    const headline = 'a headline with lots of spaces';
    assert(headlineToHash(headline).startsWith('a-headline-with-lots-of-spaces')	);
  });
  it('allow ASCII chars only', () => {
    const headline = 'a{b}c?d:e!f#g%h&i*j';
    assert(headlineToHash(headline).startsWith('a-b-c-d-e-f-g-h-i-j'));
  });
  it('the hash is deterministic, generates the same every time for the same string', () => {
    const headline = 'Should RESULT in the same hash every time ...';
    assert.equal(headlineToHash(headline), headlineToHash(headline));
  });
  describe('special character handling', () => {
    it('umlaut `ü` gets extended to `ue` (for ze germans)', () => assert(headlineToHash('ü').startsWith('ue')));
    it('umlaut `ä` gets extended to `ae` (for ze germans)', () => assert(headlineToHash('ä').startsWith('ae')));
    it('umlaut `ö` gets extended to `oe` (for ze germans)', () => assert(headlineToHash('ö').startsWith('oe')));
    it('umlaut `ß` gets extended to `ss` (for ze germans)', () => assert(headlineToHash('ß').startsWith('ss')));
    it('umlaut `ò` gets replaced by `o`', () => assert(headlineToHash('ò').startsWith('o')));
    it('umlaut `ñ` gets replaced by `n`', () => assert(headlineToHash('ñ').startsWith('n')));
    it('umlaut `ì` gets replaced by `i`', () => assert(headlineToHash('ì').startsWith('i')));
  });
});

