function greedyCalc(coins, goal) {
  this.collect = (goal, list) => {
    const { minCoins: mc } = this;
    if (goal === 0 || (mc && mc.length < list.length)) {
      if (!mc || list.length < mc.length) {
        this.minCoins = list;
      }
      return;
    }

    for (const coin of this.coins) {
      if (goal >= coin) {
        const newList = [...list];
        newList.push(...Array(Math.floor(goal / coin)).fill(coin));
        this.collect(goal % coin, newList);
      }
    }
  };
  this.coins = coins.sort((a,b) => a-b).reverse();
  this.minCoins = undefined;

  this.collect(goal, []);
  if (!this.minCoins) {
    throw Error(
      `The total ${goal} cannot be represented in the given currency.`
    );
  }
  return this.minCoins.sort((a,b) => a-b);
}

class Change {
  constructor() {}
}

Change.prototype.calculate = function(coins, goal) {
  if (goal < 0) throw new Error("Negative totals are not allowed.");
  if (goal < Math.min(...coins) && goal != 0)
    throw new Error(
      `The total ${goal} cannot be represented in the given currency.`
    );
  return greedyCalc(coins, goal);
};

module.exports = Change;