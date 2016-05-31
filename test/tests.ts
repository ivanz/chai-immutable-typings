import {expect, use} from 'chai';
import {List, Map} from 'immutable';

import * as chaiImmutable from 'chai-immutable';

describe('When chai-immutable is NOT configured in chai', () => {
  describe('Given a mutated Map', () => {
    let map = Map({ list : List.of(1, 2, 3) });
    let mutatedMap = map.set('list', map.get('list').push(4));
    
    it('should not equal the same map with the same values due to internally changed tracking properties', () => {
      let mapWithSameValues = Map({ list : List.of(1, 2, 3, 4) });
      expect(mapWithSameValues).to.not.equal(mutatedMap);
    });
  });
});
  
describe('When chai-immutable is configured in chai', () => {
  before(() => use(chaiImmutable));
  
  describe('asserts', () => {
    let list = List.of('Trainspotting', '28 Days Later', 'Sunshine');
    
    describe('given an Immutable collection', () => {
      it('we should be able to assert using ".size"', () => {
        expect(list).to.have.size.least(3);
      });

      it('we should be able to assert on "sizeOf"', () => {
        expect(list).to.have.sizeOf(3);
      });
    });
  });
});
