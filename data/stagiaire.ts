import Personne from "./personne";
import Certification from "./certification";

export default class Stagiaire extends Personne {
  _listeCertifs: Array<Certification>;

  constructor(prenom: string, nom: string, religion: string|null, listeCertifs:  Array<Certification>) {
    super(prenom, nom, religion);
    this._listeCertifs = listeCertifs;
  }

  get listeCertifs(): Array<Certification> {
    return this._listeCertifs;
  }

  set listeCertifs(listeCertifs: Array<Certification>) {
    this._listeCertifs = listeCertifs;
  }

}
