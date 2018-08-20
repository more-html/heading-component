import {spec as describe, unit as it} from 'kavun';
import assert from 'assert';

// - [x] existing ID must never be overridden
// - [x] given hash attribute and ID, ID overrules 
//   - [ ] (maybe throw a warning!?)
// - [x] given hash and no ID, set hash as ID
// - [ ] no hash, no ID, use generated hash as ID
// - [ ] provide the Map glue code, between the DOM attributes and the Map used here.


const setLinkTarget = ({attributes}) => {
  if (attributes.has('id')) return;
  attributes.set('id', attributes.get('hash'));
};

describe('Set the link target for the hash', () => {
  it('GIVEN id attribute THEN dont override it', () => {
    const attributes = [['id', 'id attr']];
    const attrMap = new Map(attributes);
    setLinkTarget({attributes: attrMap});
    assert.deepEqual(attrMap, new Map(attributes));
  });
  it('GIVEN hash+id attribute THEN dont override the ID', () => {
    const attributes = [
      ['id', 'id attr'],
      ['hash', 'hash attr'],
    ];
    const attrMap = new Map(attributes);
    setLinkTarget({attributes: attrMap});
    assert.deepEqual(attrMap, new Map(attributes));
  });
  it('GIVEN hash attribute THEN set ID', () => {
    const attributes = [
      ['hash', 'hash attr'],
    ];
    const attrMap = new Map(attributes);
    setLinkTarget({attributes: attrMap});
    assert.deepEqual(attrMap, new Map([...attributes, ['id', 'hash attr']]));
  });
});

