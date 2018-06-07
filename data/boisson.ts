export default class Boisson {
  _nom: string;
  _alcool: boolean;
  _bio: boolean;

  constructor(nom: string, alcool: boolean, bio: boolean) {
    this._nom = nom;
    this._alcool = alcool;
    this._bio = bio;
  }
}
