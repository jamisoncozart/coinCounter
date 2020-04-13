export function coinCounter(totalCost) {
  if(isNaN(totalCost)) {
    return;
  } else if(totalCost <= 0) {
    return change;
  }

  const change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }


  return change;
}


const denominations = [.25, .1, .05];

