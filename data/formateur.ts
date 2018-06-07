import Personne from "./personne";
import Connaissance from "./connaissance";

export default class Formateur extends Personne {
  private _connaissances: Array<Connaissance>;

  constructor(prenom: string, nom: string, religion: string|null, connaissances:  Array<Connaissance>) {
    super(prenom, nom, religion);
    this._connaissances = connaissances;
  }

  get connaissances(): Array<Connaissance> {
    return this._connaissances;
  }

  set connaissances(connaissances: Array<Connaissance>) {
    this._connaissances = connaissances;
  }

    enseigner() {
      let connRecentes = Array<Connaissance>();
      this._connaissances.forEach(connaissance => {
        if (connaissance._anneesExp > 2) {
           connRecentes.push(connaissance);
         }
      })
      return connRecentes;
    }
}
