 function coinCounter(totalCost, numCoins = [0,0,0,0], counter = 0) {
  const coinValues = [25, 10, 5, 1];
  if(counter >= 4) {
    return numCoins;
  } else {  
    numCoins[counter] = Math.floor(totalCost/coinValues[counter]);
    const totalChange = totalCost % coinValues[counter];
    return coinCounter(totalChange, numCoins, counter + 1);
  }
}

 function closureCounter(totalCost) {
  return denomination => {
    return (Math.floor(totalCost / denomination));
  };
}

 function findPrimes(inputNumber, counter = 2, primeArray = []) {
  if (isNaN(inputNumber)) {
    return;
  }
  else if(counter > inputNumber) {
    return primeArray;
  }
  else {  
    let check = true;
    
    // check if prime #
    for(let i = 2; i < counter; i++) {
      if (counter % i === 0) {
        check = false;
        break;
      }
    }

    if(check) {
      primeArray = [...primeArray, counter];
    }

    return findPrimes(inputNumber, counter + 1, primeArray);
  }
}

console.log(findPrimes(541));