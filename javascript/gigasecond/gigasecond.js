module.exports = class {
  constructor(initDate){
    this.startDate = initDate;
    this.secondsPassed = initDate.getTime()/1000;
  }

  date(){
    var startTime = this.startDate.getTime();
  	var endDate = new Date(startTime + 1000000000000);
  	return endDate;
  }



}
