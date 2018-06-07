import Boisson from '../data/boisson';
import { expect } from 'chai';

describe('Boisson', () => {
  it('name should be coca', () => {
    let boisson = new Boisson("coca", false, false);
    expect(boisson._nom).to.equal('coca');
  });
});
