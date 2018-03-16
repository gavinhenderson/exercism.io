module.exports = class{
    constructor(){}

    hey(question){
      question = question.replace(/ /g,"");
      question = question.replace(/\t/g,"")
      question = question.replace(/\n/g,"")
      question = question.replace(/\r/g,"")
      question = question.replace(",","");
      question = question.replace(/[0-9]/g,'');
      if(question.length==0){ return "Fine. Be that way!" }
      //if(question[question.length-1]=='?' && question.toUpperCase()==question){
        //return "Calm down, I know what I'm doing!"
      //}
      if(question.toUpperCase()==question && question.toLowerCase()!=question){ return "Whoa, chill out!" }
      if(question[question.length-1]=='?'){ return "Sure." }
      return "Whatever."

    }
}
