import Certification from '../data/certification';
import { expect } from 'chai';

describe('Certification', () => {
  it('should return 3', () => {
    let certification = new Certification("java8", 3);
    expect(certification._anneeOpt).to.equal(3);
  });
});
