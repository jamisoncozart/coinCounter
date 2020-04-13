import { coinCounter } from './../src/coinCounter.js';

describe('coinCounter', () => {
  let change;

  beforeEach( ()=> {
    change = coinCounter(4.99);
  });

  test('should return correct number of quarters based on value passed to coinCounter', () => {
    expect(change.quarters).toEqual(19);
  });
  // test('should subtract quarter value from total cost..', () => {
    
  // });
});


// {
    //   quarters: 19,
    //   dimes: 2,
    //   nickels: 0, 
    //   pennies: 4
// }