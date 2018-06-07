import Formateur from '../data/formateur';
import Connaissance from '../data/connaissance';
import { expect } from 'chai';

var connaissance1 = new Connaissance("connaissance1", 2);
var connaissance2 = new Connaissance("connaissance2", 5);
var connaissance3 = new Connaissance("connaissance3", 10);
var formateur = new Formateur("prenom", "nom", null, [connaissance1, connaissance2, connaissance3]);

describe('Formateur', () => {
  it('should return nom', () => {
    expect(formateur._nom).to.equal('nom');
  });
  it('should return 3', () => {
    expect(formateur.connaissances.length).to.equal(3);
  });
  it('should return 2', () => {
    expect(formateur.enseigner().length).to.equal(2);
  });
});
