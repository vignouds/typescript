import Film from '../data/film';
import Trailer from '../data/trailer';
import { expect } from 'chai';

var trailer = new Trailer("Mon, 27 Jul 2015 00:00:00 -0700", "/trailers/lions_gate/12rounds3lockdown/", "Trailer", false, true);
var film = new Film("12 Rounds 3: Lockdown", "Fri, 11 Sep 2015 00:00:00 -0700", "Lionsgate", "http://trailers.apple.com/trailers/lions_gate/12rounds3lockdown/images/poster.jpg",
"/trailers/lions_gate/12rounds3lockdown/","R",["Action and Adventure"],"Stephen Reynolds",[
"Dean Ambrose",
"Roger Cross",
"Daniel Cudmore",
"Lochlyn Munro",
"Ty Olsson",
"Sarah Smyth"
],[trailer]);

describe('Film', () => {
  it('should return Lionsgate', () => {
    expect(film._studio).to.equal("Lionsgate");
  });
  it('should return 12 Rounds 3: Lockdown', () => {
    expect(film._title).to.equal("12 Rounds 3: Lockdown");
  });
  it('should return Daniel Cudmore', () => {
    expect(film._actors[2]).to.equal("Daniel Cudmore");
  });
  it('should return false', () => {
    expect(film._trailers[0]._exclusive).to.equal(false);
  });
});
