module.exports = class {
  constructor(bucketOne, bucketTwo, goal, startBucket) {
    this.bucketOne = bucketOne;
    this.bucketTwo = bucketTwo;
    this.goal = goal;
    this.startBucket = startBucket;
  }

  isComplete(currentBucketOne, currentBucketTwo) {
    return (currentBucketOne === this.goal || currentBucketTwo === this.goal);
  };

  setComplete(currentBucketOne, currentBucketTwo) {
    if (currentBucketOne === this.goal) {
      this.goalBucket = 'one';
      this.otherBucket = currentBucketTwo;
    } else {
      this.goalBucket = 'two';
      this.otherBucket = currentBucketOne;
    }
  };

  bigFirst(initialBucketOne, initialBucketTwo) {
    let currentBucketOne = initialBucketOne;
    let currentBucketTwo = initialBucketTwo;
    let moveCount = 1; // Initial pour counts
    let pourOrReceive = true;

    while (!this.isComplete(currentBucketOne, currentBucketTwo)) {
      if ((currentBucketTwo > this.bucketOne) && (currentBucketOne === 0) && (moveCount === 0)){
        currentBucketOne = this.bucketOne;
        currentBucketTwo = this.bucketTwo - currentBucketOne;
      } else if (currentBucketOne === this.bucketOne) {
        currentBucketOne = 0;
      } else if ((currentBucketTwo > this.bucketOne && currentBucketOne !== 0) || (currentBucketTwo > this.bucketOne && pourOrReceive)) {
        currentBucketTwo = currentBucketTwo - (this.bucketOne - currentBucketOne);
        currentBucketOne = this.bucketOne;
      } else if (currentBucketTwo > this.bucketOne || currentBucketOne === 0) {
        currentBucketOne = currentBucketTwo;
        currentBucketTwo = currentBucketTwo - currentBucketOne;
      } else if (currentBucketTwo === 0) {
        currentBucketTwo = this.bucketTwo;
      }
      moveCount++;
      pourOrReceive = !pourOrReceive;
    }

    this.setComplete(currentBucketOne, currentBucketTwo);
    return moveCount;
  };

  smallFirst(initialBucketOne, initialBucketTwo) {
    let currentBucketOne = initialBucketOne;
    let currentBucketTwo = initialBucketTwo;
    let moveCount = 1; // Initial pour counts

    while (!this.isComplete(currentBucketOne, currentBucketTwo)) {
      if (currentBucketOne === this.bucketOne && moveCount === 0) {
        currentBucketOne = 0;
        currentBucketTwo = this.bucketOne;
      } else if (currentBucketOne === 0) {
        currentBucketOne = this.bucketOne;
      } else if (currentBucketOne === this.bucketOne && currentBucketTwo < this.bucketTwo) {
        let temp = currentBucketTwo;
        currentBucketTwo = currentBucketTwo + currentBucketOne > this.bucketTwo ? this.bucketTwo : temp + currentBucketOne;
        currentBucketOne = temp + currentBucketOne > this.bucketTwo ? currentBucketOne - (this.bucketTwo - temp) : 0;
      } else if (currentBucketTwo === this.bucketTwo) {
        currentBucketTwo = 0;
      } else if (currentBucketTwo === 0 && currentBucketOne < this.bucketOne) {
        currentBucketTwo = currentBucketOne;
        currentBucketOne = 0;
      }
      moveCount++;
    }

    this.setComplete(currentBucketOne, currentBucketTwo);
    return moveCount;
  };

  moves() {
    if (this.startBucket === 'one') {
      return this.smallFirst(this.bucketOne, 0);
    }
    return this.bigFirst(0, this.bucketTwo);
  };
}
