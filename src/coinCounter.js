// export function coinCounter(totalCost, counter = 0) {
//   if(isNaN(totalCost)) {
//     return;
//   } else if(totalCost <= 0) {
//     return change;
//   }
//   const denominations = [25, 10, 5];
//   if(counter < 3) {
//     while(totalCost >= denominations[counter]) {
//       totalCost -= denominations[counter];
//       change[counter]++;
//     }
//   } else {
//     change[3] = totalCost/ 0.01;
//   }


  

//   const change = [0, 0, 0, 0];
//   return(totalCost, counter++);
// }

// for(let i=0; i<3; i++)
// {
//   while (totalCost >= denominations[i])
//   {
//     totalCost -= denominations[i];
//     change[i]++;
//   }
//   change[3] = totalCost / 0.01;
// }



// Math.floor(totalCost / 0.25) = quarters;
// totalCost = totalCost % 0.25;



// const denominations = [25, 10, 5];
// const change = [0, 0, 0, total];
// const counter = (total) => {
//   if (isNaN(total))
//   {
//     return;
//   }
//   else if (total === 0){
//     return change;
//   }
//   else {
//     while
//   }
// }

//=====================================
//totalCost = 4.99
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

coinCounter(499);