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
    return powerfulSpell.toUpperCase();
  };
};
module.exports = Wizard
