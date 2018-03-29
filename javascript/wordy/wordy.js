let WordProblem = class {
  constructor(question){
    this.question = question;
  }

  answer() {
    let question = this.question.split(' ');

    // Remove the what is
    if((question[0]=="What") && (question[1]=="is")){
      question = question.slice(2,question.length+1);
    } else {
      throw new Error();
    }

    // Remove the question mark
    question[question.length-1] = question[question.length-1].substring(0,  question[question.length-1].length-1);

    // Remove the 'by'
    for(let i=0;i<question.length;i++){
      if(question[i] == "by"){
        question.splice(i,1);
      }
    }

    // Implement using a stack
    let stack = question.reverse();
    while(stack.length!=1){
      let first = parseInt(stack.pop());
      let operation = stack.pop();
      let second = parseInt(stack.pop());

      let total = 0;
      switch(operation) {
        case "plus":
        {
          total = first + second
          break;
        }
        case "minus":
        {
          total = first - second
          break;
        }
        case "multiplied": {
          total = first * second
          break;
        }
        case "divided": {
          total = first / second;
          break;
        }
        default: {
          throw new Error();
          break;
        }
      }
      stack.push(total);
    }

    // Return the last element left in the stack
    return parseInt(stack[0]);
  }
}

module.exports = {
  'WordProblem': WordProblem,
  'ArgumentError': Error
}
