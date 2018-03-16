module.exports = class {
  constructor(initDate){
    this.startDate = initDate;
    this.secondsPassed = initDate.getTime()/1000;
  }

  date(){
    var endSeconds = new Date(Date.UTC(1970, 0, 1)); // Epoch
    endSeconds.setSeconds(this.secondsPassed + 1000000000);
    return endSeconds;
  }



}
