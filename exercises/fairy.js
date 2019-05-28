class Fairy {
  constructor(name) {
    this.name = name
    this.dust = 10
    this.clothes = { dresses: ['Iris'] }
    this.disposition = 'Good natured'
    this.humanWards=[]
  }

  believe(){
    this.dust+=10
  }

  receiveBelief() { 
    this.dust++
  }

  makeDresses(flowers) {
    this.clothes.dresses =this.clothes.dresses.concat(flowers)
  }
  provoke() {
    this.disposition = 'Vengeful'
  }
  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      this.humanWards.push(infant);
      if (this.humanWards.length > 2) {
        this.disposition = 'Good natured';
      }
      return infant.disposition = 'Malicious'
    } else {
      return infant
    }
  }
}
module.exports = Fairy