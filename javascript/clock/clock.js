class Time {
  constructor(hours, minutes){
    this.hours = hours;
    this.minutes = minutes;
    this.resolve();
  }

  resolve(){
    // Roll the minutes up to hours
    while(this.minutes>=60){
      this.minutes -= 60;
      this.hours++;
    }

    // Roll the negative minutes
    while(this.minutes<0){
      this.minutes += 60;
      this.hours--;
    }

    // Roll the hours over
    while(this.hours>=24){
      this.hours -= 24;
    }

    // Roll the negative hours
    while(this.hours<0){
      this.hours+=24;
    }
  }

  toString(){
    // Convert hour and minute into time.
    let hourString = ("0" + this.hours).slice(-2);
    let minuteString = ("0" + this.minutes).slice(-2);
    let timeString = hourString + ":" + minuteString;
    return timeString;
  }

  plus(minutes){
    this.minutes += minutes;
    this.resolve();
    return this;
  }

  minus(minutes){
    this.minutes -= minutes;
    this.resolve();
    return this;
  }

  equals(test){
    this.resolve();
    test.resolve();

    if(this.hours == test.hours && this.minutes == test.minutes) {
      return true;
    }

    return false;
  }
}

module.exports = {
  at: function(hours=0, minutes=0){
    return new Time(hours, minutes);
  }
}
