import Formation from '../data/formation';
import Stagiaire from '../data/stagiaire';
import Formateur from '../data/formateur';
import { expect } from 'chai';

var stagiaire1 = new Stagiaire("a", "b", null, []);
var stagiaire2 = new Stagiaire("a", "b", null, []);
var stagiaire3 = new Stagiaire("a", "b", null, []);
var formateur1 = new Formateur("a", "b", null, []);
var formateur2 = new Formateur("a", "b", null, []);
var dateDebut = new Date(2018,4,3);
var dateFin = new Date(2018,6,28);
var formation = new Formation("java", dateDebut, dateFin, [stagiaire1, stagiaire2, stagiaire3], [formateur1, formateur2]);

describe('Formation', () => {
  it('name should be java', () => {
    expect(formation._nom).to.equal('java');
  });
  it('should have 3 stagiaires', () => {
    expect(formation._listeStagiaires.length).to.equal(3);
  });
  it('should have 2 formateurs', () => {
    expect(formation._listeFormateurs.length).to.equal(2);
  });
  it('dateFin - dateDebut should be > 0', () => {
    expect(formation._dateFin.getTime() - formation._dateDebut.getTime()).to.be.above(0);
  });
});
