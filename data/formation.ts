import Stagiaire from "./stagiaire";
import Formateur from "./formateur";

export default class Formation {
  _nom: string;
  _dateDebut: string;
  _dateFin: string;
  _listeStagiaires: Array<Stagiaire>;
  _listeFormateurs: Array<Formateur>;

  constructor(nom: string, dateDebut: string, dateFin: string,
listeStagiaires: Array<Stagiaire>, listeFormateurs: Array<Formateur>) {
  this._nom = nom;
  this._dateDebut = dateDebut;
  this._dateFin = dateFin;
  this._listeStagiaires = listeStagiaires;
  this._listeFormateurs = listeFormateurs;
}
}
