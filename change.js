/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}

var coins = [200, 100, 50, 20, 10, 5, 2, 1]; // must be in decending order
function getChange(totalPayable, cashPaid) {
  var change = [];
  var remaining = cashPaid - totalPayable;

  for (var i = 0; i < coins.length; i++){ // loop through array of notes and coins:
    var coin = coins[i];

    if (remaining/coin >= 1) { // check coin fits into the remaining amount
      var times = Math.floor(remaining/coin); // no partial coins

      for (var j = 0; j < times; j ++){ // add coin to change x times
        remaining -= coin; // substract coin from remaining
        change.push(coin);
      }
    }

  }
  //  while(remaining){ // loop while is money left to give
  //    for (var i = 0; i < coins.length; i++){
  //  if (remaining >= coins[i]){ // if remaining is larger than the current selected coin
  //    remaining -= coins[i]; // remove coin value from the total change
  //    change.push(coins[i]); // add the coin to the return list of change
  //    i--; // move back one to try the same coin again
  //  }
  //}
  //}
  return change;
};