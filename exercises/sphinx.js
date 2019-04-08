class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if(this.riddles.length > 3) 
      this.riddles.shift();
    }
  attemptAnswer(answer) {
    if (this.riddles.answer === answer) {
   var answerIndex = findIndex(function(answer)
   answerIndex.splice(0,1)
    }
  }
}

module.exports = Sphinx 