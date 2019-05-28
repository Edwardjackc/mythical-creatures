class Sphinx {
  constructor() {
    this.name = null
    this.riddles = []
    this.heroesEaten=0
  }
  collectRiddle(riddle){
  if (this.riddles.length >= 3) {
    this.riddles.shift();
  }
  this.riddles.push(riddle)
  }

  attemptAnswer(heroGuess) {
    for (let i = 0; i < this.riddles.length; i++) {
      if (heroGuess === this.riddles[i].answer) {
        this.riddles.splice(i, 1)
        if (this.riddles.length === 0) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${heroGuess}"???`
        }
        return "That wasn't that hard, I bet you don't get the next one";
      }
    }
    this.heroesEaten++;
  }
}

module.exports = Sphinx









// const array = [2, 4, 5, 6, 8]
// console.log(
//   array.filter((element, index) => {
//   const isEven = element % 2 === 0
//     return isEven
//   }),
//   array
// )


//     this.name = null;
//     this.riddles = [];
//   }
//   collectRiddle(riddle) {
//     this.riddles.push(riddle);
//     if (this.riddles.length > 3)
//       this.riddles.shift();
//   }
//   attemptAnswer(answer) {
//     this.riddles.filter()
//   }
// }