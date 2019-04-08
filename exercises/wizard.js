class Wizard {
  constructor(wizard) {
    this.isRested = true;
    this.name = wizard.name;
    this.bearded = wizard.bearded; 
    this.bearded = this.bearded === undefined; 
   };

  incantation(spell) {
    return spell.toUpperCase(); 
   };
   
  cast(powerfulSpell) {
    //if (this.case === 3)
    //   this.isRested = false 
    return powerfulSpell.toUpperCase();
  };
};
module.exports = Wizard

// be aware of when something needs to be returned always out of a method
// learn protypes !!!!!!! Know what they return 