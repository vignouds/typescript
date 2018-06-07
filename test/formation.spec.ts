import Formation from '../data/formation';
import Stagiaire from '../data/stagiaire';
import Formateur from '../data/formateur';
import { expect } from 'chai';

var stagiaire1 = new Stagiaire("a", "b", null, []);
var stagiaire2 = new Stagiaire("a", "b", null, []);
var stagiaire3 = new Stagiaire("a", "b", null, []);
var formateur1 = new Formateur("a", "b", null, []);
var formateur2 = new Formateur("a", "b", null, []);
var formation = new Formation("java", "03/04/2018", "28/06/2018", [stagiaire1, stagiaire2, stagiaire3], [formateur1, formateur2]);

describe('Formation', () => {
  it('should return java', () => {
    expect(formation._nom).to.equal('java');
  });
  it('should return 3', () => {
    expect(formation._listeStagiaires.length).to.equal(3);
  });
  it('should return 2', () => {
    expect(formation._listeFormateurs.length).to.equal(2);
  });
});
