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
    for (var i = 0; i < this.riddles[i].length; i++)
    if (this.riddles[i].answer === answer) {
  this.riddles.splice([i],1)
    }
  }
}
module.exports = Sphinx 