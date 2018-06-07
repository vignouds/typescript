import Boisson from "./boisson";
// import Religion from "./religion";

export default class Personne {
  _prenom: string;
  _nom: string;
  private _religion: string|null;

  constructor(prenom: string, nom: string, religion: string|null) {
    this._prenom = prenom;
    this._nom = nom;
    this._religion = religion;
  }

  get religion(): string|null {
    return this._religion;
  }

  set religion(religion: string|null) {
    this._religion = religion;
  }

  boire(boisson: Boisson) {
    console.log(`Nom : ${boisson._nom}, Alcoolisée : ${boisson._alcool}, Bio : ${boisson._bio}`)
  }

  toString() {
    console.log(`Prénom : ${this._prenom}, Nom : ${this._nom}`);
  }
}
