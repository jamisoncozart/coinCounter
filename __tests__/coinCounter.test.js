import { coinCounter, closureCounter } from './../src/coinCounter.js';

describe('coinCounter', () => {
  let numCoins;

  beforeEach( ()=> {
    numCoins = coinCounter(499);
  });

  test('should return correct number of quarters based on value passed to coinCounter', () => {
    expect(numCoins[0]).toEqual(19);
  });

  test('should return correct number of dimes based on value passed to coinCounter', () => {
    expect(numCoins[1]).toEqual(2);
  });
  
  test('should return correct number of nickles based on value passed to coinCounter', () => {
    expect(numCoins[2]).toEqual(0);
  });
  
  test('should return correct number of pennies based on value passed to coinCounter', () => {
    expect(numCoins[3]).toEqual(4);
  });
});

describe('closureCounter', () => {
  test('should return accurate coin values for total cost', () => {
    const totalCost = closureCounter(499);
    const quarters = totalCost(25);
    const dimes = totalCost(10);
    const nickels = totalCost(5);
    const pennies = totalCost(1);
    expect(quarters).toEqual(19);
    expect(dimes).toEqual(49);
    expect(nickels).toEqual(99);
    expect(pennies).toEqual(499);
  });
});