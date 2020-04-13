export function coinCounter(totalCost, numCoins = [0,0,0,0], counter = 0) {
  const coinValues = [25, 10, 5, 1];
  if(counter >= 4) {
    return numCoins;
  } else {  
    numCoins[counter] = Math.floor(totalCost/coinValues[counter]);
    const totalChange = totalCost % coinValues[counter];
    return coinCounter(totalChange, numCoins, counter + 1);
  }
}

export function closureCounter(totalCost) {
  return denomination => {
    return (Math.floor(totalCost / denomination));
  };
}