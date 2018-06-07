import Boisson from '../data/boisson';
import { expect } from 'chai';

describe('Boisson', () => {
  it('should return coca', () => {
    let boisson = new Boisson("coca", false, false);
    expect(boisson._nom).to.equal('coca');
  });
});
