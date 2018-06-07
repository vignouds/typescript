import Personne from '../data/personne';
import Religion from "../data/religion";
import { expect } from 'chai';

var personne = new Personne("bob", "Leponge", Religion.Religion.Buddhism);

describe('Personne', () => {
  it('should return Leponge', () => {
    expect(personne._nom).to.equal("Leponge");
  });
  it('should return Buddhism', () => {
    expect(personne.religion).to.equal("Buddhism");
  });
});
