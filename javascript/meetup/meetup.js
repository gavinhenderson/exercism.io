const Days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function MeetupException(message){
  this.message = message;
  this.name = 'MeetupException';
}

function getDay( year, month, day ){
  return Days[new Date(year, month, day).getDay()];
}

function daysInMonth (month, year) {
  return new Date(year, month+1, 0).getDate()-1;
}

module.exports = function( year, month, day, week ) {
  if(week=="teenth"){
    for(let i=13; i<20; i++){
      if(getDay(year, month, i) == day){
        return new Date(year, month, i);
      }
    }
  } else if(week == "last") {
    let lastDay = daysInMonth( month, year );
    for(let i=lastDay+1; i>lastDay-7; i--){
      if(getDay(year, month, i) == day){
        return new Date(year, month, i);
      }
    }
  }

  let weekNo = parseInt(week.charAt(0))-1;
  let maxDay = parseInt(daysInMonth(month, year))
  let dayNo = 1;
  for(let i=0;i<5;i++) {
    for(let j=0; j<7; j++){
      if(i==weekNo){
        if(getDay(year, month, dayNo) == day){
          return new Date(year, month, dayNo);
        }
      }
      dayNo ++;
      if(dayNo>maxDay){ throw new MeetupException("This date is not valid"); return;}
    }
  }
}
