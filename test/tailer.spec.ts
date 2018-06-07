import Trailer from '../data/trailer';
import { expect } from 'chai';

describe('Trailer', () => {
  it('should return true', () => {
    let trailer = new Trailer("date", "url", "type", false, true);
    expect(trailer._hd).to.equal(true);
  });
});
