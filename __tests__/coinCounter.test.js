import { coinCounter } from './../src/coinCounter.js';

describe('coinCounter', () => {
  let change;

  beforeEach( ()=> {
    change = coinCounter(4.99);
  });

  test('should return correct number of quarters based on value passed to coinCounter', () => {
    expect(change[0]).toEqual(19);
  });
  test('should subtract quarter value from total cost', () => {
    change = coinCounter(.75);
    expect(change.totalCost).toEqual(0);
  });
});


// {
    //   quarters: 19,
    //   dimes: 2,
    //   nickels: 0, 
    //   pennies: 4
// }