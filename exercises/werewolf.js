class Werewolf {
  constructor(name,location) {
    this.name = name
    this.location = location 
    this.human = true 
    this.wolf = false
    this.hungry = false
  }
  change() {
    this.human = !this.human
    this.wolf = !this.wolf
    this.hungry = true
    if (this.human ===true){
      this.hungry = false
    }
  }
  eat(victim) {
  if(this.hungry === true) {
  victim.alive = false 
    } else {
    return
    }
  }
} 
module.exports = Werewolf