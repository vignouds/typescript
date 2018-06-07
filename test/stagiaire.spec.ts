import Stagiaire from '../data/stagiaire';
import { expect } from 'chai';

describe('Stagiaire', () => {
  it('should return null ', () => {
    let stagiaire = new Stagiaire("prenom", "nom", null, []);
    expect(stagiaire.religion).to.equal(null);
  });
});
