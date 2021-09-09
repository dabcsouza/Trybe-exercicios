const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = strength => Math.floor(Math.random() * (strength - 15 + 1)) + 15;
const warriorFight = (strength, weaponDmg) => Math.floor( Math.random() * (weaponDmg * strength - strength + 1) ) + weaponDmg * strength;

const mageGame = (mana, intelligence) => {
  obj = {};
  obj.damage = Math.floor( Math.random() * ( intelligence + 1)) + intelligence;
  mana < 15 ? obj.damage = 'Não possui mana suficiente' : mana -= 15;
  if (typeof obj.damage === 'string') { obj.mana = 0} else {obj.mana = mana;};
  return obj;
}

console.log(mageGame(17, 60));