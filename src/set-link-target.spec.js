import {spec as describe, unit as it} from 'kavun';
import assert from 'assert';

// - existing ID must never be overridden
// - given hash attribute and ID, ID overrules (maybe throw a warning!?)
// - given hash and no ID, set hash as ID
// - no hash, no ID, use generated hash as ID

const setLinkTarget = () => {}

describe('Set the link target for the hash', () => {
  it('GIVEN id attribute THEN dont override it', () => {
    const readIdAttribute = () => 'id-attribute';
    const readHashAttribute = () => undefined;
    const setIdAttribute = () => { setIdAttribute.wasCalled = true; };
    setIdAttribute.wasCalled = false;

    setLinkTarget({readIdAttribute, readHashAttribute, setIdAttribute});

    assert.equal(setIdAttribute.wasCalled, false);
  });
});

