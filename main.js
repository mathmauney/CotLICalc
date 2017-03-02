/*jshint maxerr: 10000 */

function Crusader(name) {
  this.name = name;
  this.inFormation = false;
  this.slot = 0;
  this.isDPS = false;
  //Tags
  this.clicker = false;
  this.dps = false;
  this.support = false;
  this.tank = false;
  this.healer = false;
  this.goldfinder = false;
  this.human = false;
  this.robot = false;
  this.elf = false;
  this.animal = false;
  this.magical= false;
  this.supernatural = false;
  this.demon = false;
  this.orc = false;
  this.leprechaun = false;
  this.event = false;
  this.male = false;
  this.female = false;
  this.royal = false;
  this.spot = [];
  
  //Gear
  this.gear = [[],[],[]];

  
  //Boosts
  this.globalDPS = 1;
  this.globalGold = 1;
  this.critChance = 0;
  this.selfDPS = 1; //DPS boosting skills and abilities on the DPS 
}

function itemDPS(rarity) {
  switch(rarity){
    case "Common":
      return 1.05;
    case "Uncommon":
      return 1.10;
    case "Rare":
      return 1.15;
    case "Epic":
      return 1.4;
    case "Golden Epic":
      return 1.6;
    default:
      return 1;
  }
}

function itemSelfDPS(rarity) {
  switch(rarity){
    case "Common":
      return 1.25;
    case "Uncommon":
      return 1.5;
    case "Rare":
      return 2;
    case "Epic":
      return 5;
    case "Golden Epic":
      return 7;
    default:
      return 1;
  }
}

function itemGold(rarity) {
  switch(rarity){
    case "Common":
      return 1.1;
    case "Uncommon":
      return 1.25;
    case "Rare":
      return 1.5;
    case "Epic":
      return 2;
    case "Golden Epic":
      return 2.5;
    default:
      return 1;
  }
}

function itemCrit(rarity) {
  switch(rarity) {
    case "Common":
      return 1;
    case "Uncommon":
      return 2;
    case "Rare":
      return 3;
    case "Epic":
      return 4;
    case "Golden Epic":
      return 6;
    default:
      return 0;
  }
}

function itemAbility(rarity) {
  switch(rarity) {
    case "Common":
      return 1.1;
    case "Uncommon":
      return 1.25;
    case "Rare":
      return 1.5;
    case "Epic":
      return 2;
    case "Golden Epic":
      return 2.5;
    default:
      return 1;
  }
}

////////Set Up Tags and Gear
//////Slot 1
////The Bush Whacker
var bushwhacker = new Crusader("The Bush Whacker");
bushwhacker.clicker = true;
bushwhacker.male = true;
bushwhacker.human = true;
bushwhacker.slot = 1;
bushwhacker.gear = ["Epic","Rare","Rare"];

////RoboRabbit
var rabbit = new Crusader("RoboRabbit");
rabbit.clicker = true;
rabbit.robot = true;
rabbit.support = true;
rabbit.male = true;
rabbit.event = true;
rabbit.slot = 1;

////Graham the Driver
var graham = new Crusader("Graham the Driver");
graham.male = true;
graham.human = true;
graham.dps = true;
graham.support = true;
graham.event = true;
graham.slot = 1;

//////Slot 2
////Jim the Lumberjack
var jim = new Crusader("Jim the Lumberjack");
jim.human = true;
jim.male = true;
jim.dps = true;
jim.support = true;
jim.slot = 2;
jim.gear = ["Epic","Rare","Rare"];

////Pilot Pam
var pam = new Crusader("Pilot Pam");
pam.female = true;
pam.event = true;
pam.dps = true;
pam.human = true;
pam.support = true;

////Veronica, the Android Archer
var veronica = new Crusader("Veronica, the Android Archer");
veronica.elf = true;
veronica.event = true;
veronica.female = true;
veronica.robot = true;
veronica.support = true;
veronica.slot = 2;

//////Slot 3
////Emo Werewolf
var emo = new Crusader("Emo Werewolf");
emo.animal = true;
emo.male = true;
emo.supernatural = true;
emo.dps = true;
emo.slot = 3;
emo.gear = ["Epic","Epic","Rare"];

////Sally the Succubus
var sally = new Crusader("Sally the Succubus");
sally.demon = true;
sally.dps = true;
sally.event = true;
sally.female = true;
sally.supernatural = true;
sally.slot = 3;

////Karen, the Cat Teenager
var karen = new Crusader("Karen, the Cat Teenager");
karen.animal = true;
karen.dps = true;
karen.event = true;
karen.female = true;
karen.supernatural = true;
karen.slot = 3;

//////Slot 4
////Sasha the Fierce Warrior
var sasha = new Crusader("Sasha the Fierce Warrior");
sasha.human = true;
sasha.female = true;
sasha.support = true;
sasha.slot = 4;
sasha.gear = ["Rare","Epic","Epic"];

////Groklok the Orc
var groklok = new Crusader("Groklok the Orc");
groklok.dps = true;
groklok.orc = true;
groklok.event = true;
groklok.male = true;
groklok.tank = true;
groklok.dps = true;
groklok.support = true;
groklok.slot = 4;

////Mindy the Mime
var mindy = new Crusader("Mindy the Mime");
mindy.human = true;
mindy.female = true;
mindy.support = true;
mindy.event = true;
mindy.supernatural = true;
mindy.dps = true;
mindy.slot = 4;

//////Slot 5
////The Washed Up Hermit
var hermit = new Crusader("The Washed Up Hermit");
hermit.human = true;
hermit.male = true;
hermit.dps = true;
hermit.slot = 5;
hermit.gear = ["Rare","Epic","Rare"];

////Kyle the Party Bro
var kyle = new Crusader("Kyle the Party Bro");
kyle.human = true;
kyle.event = true;
kyle.dps = true;
kyle.male = true;
kyle.slot = 5;

////Serpent King Draco
var draco = new Crusader("Serpent King Draco");
draco.animal = true;
draco.male = true;
draco.event = true;
draco.dps = true;
draco.royal = true;
draco.slot = 5;

////Henry, the Scaredy-Ghoul
var henry = new Crusader("Henry, the Scaredy-Ghoul");
henry.supernatural = true;
henry.male = true;
henry.dps = true;
henry.event = true;
henry.slot = 5;

//////Slot 6
////Detective Kaine
var kaine = new Crusader("Detective Kaine");
kaine.human = true;
kaine.male = true;
kaine.goldfinder = true;
kaine.slot = 6;
kaine.gear = ["Rare","Epic","Golden Epic"];

////Mister the Monkey 
var mister = new Crusader("Mister the Monkey");
mister.animal = true;
mister.male = true;
mister.event = true;
mister.goldfinder = true;
mister.slot = 6;

////Larry the Leprechaun
var larry = new Crusader("Larry the Leprechaun");
larry.leprechaun = true;
larry.male = true;
larry.goldfinder = true;
larry.event = true;
larry.magical = true;
larry.support = true;
larry.slot = 6;

////Bernard the Bartender
var bernard = new Crusader("Bernard the Bartender");
bernard.male = true;
bernard.human = true;
bernard.goldfinder = true;
bernard.event = true;
bernard.support = true;
bernard.slot = 6;

//////Slot 7
////The Princess
var princess = new Crusader("The Princess");
princess.human = true;
princess.female = true;
princess.support = true;
princess.royal = true;
princess.slot = 7;
princess.gear = ["Rare","Rare","Epic"];

////RoboTurkey
var turkey = new Crusader("RoboTurkey");
turkey.male = true;
turkey.event = true;
turkey.support = true;
turkey.robot = true;
turkey.slot = 7;

////Ranger Rayna
var rayna = new Crusader("Ranger Rayna");
rayna.female = true;
rayna.human = true;
rayna.event = true;
rayna.dps = true;
rayna.healer = true;
rayna.slot = 7;

//////Slot 8
////Natalie Dragon
var natalie = new Crusader("Natalie Dragon");
natalie.human = true;
natalie.dps = true;
natalie.goldfinder = true;
natalie.female = true;
natalie.slot = 8;
natalie.gear = ["Rare","Rare","Rare"];

////Jack O'Lantern
var jack = new Crusader("Jack O'Lantern");
jack.animal = true;
jack.event = true;
jack.tank = true;
jack.male = true;
jack.goldfinder = true;
jack.supernatural = true;
jack.slot = 8;

////President Billy Smithsonian
var billy = new Crusader("President Billy Smithsonian");
billy.human = true;
billy.event = true;
billy.goldfinder = true;
billy.male = true;
billy.support = true;
billy.slot = 8;

////Karl the Kicker
var karl = new Crusader("Karl the Kicker");
karl.human = true;
karl.event = true;
karl.goldfinder = true;
karl.male = true;
karl.support = true;
karl.slot = 8;

//////Slot 9
////Jason, Master of Shadows
var jason = new Crusader("Jason, Master of Shadows");
jason.dps = true;
jason.human = true;
jason.male = true;
jason.goldfinder = true;
jason.slot = 9;
jason.gear = ["Rare","Rare","Rare"];

////Pete the Carney
var pete = new Crusader("Pete the Carney");
pete.event = true;
pete.male = true;
pete.human = true;
pete.support = true;
pete.goldfinder = true;
pete.slot = 9;

////Broot
var broot = new Crusader("Broot");
broot.event = true;
broot.male = true;
broot.female = true;
broot.tank = true;
broot.goldfinder = true;
broot.support = true;
broot.supernatural = true;
broot.slot = 9;

////Paul the Pilgrim
var paul = new Crusader("Paul the Pilgrim");
paul.event = true;
paul.elf = true;
paul.male = true;
paul.support = true;
paul.goldfinder = true;
paul.tank = true;
paul.slot = 9;

//////Slot 10
////Artaxes, the Lion
var lion = new Crusader("Artaxes, the Lion");
lion.animal = true;
lion.male = true;
lion.supernatural = true;
lion.support = true;
lion.slot = 10;
lion.gear = ["Epic","Epic","Epic"];

////Drizzle the Dark Elf
var drizzle = new Crusader("Drizzle the Dark Elf");
drizzle.event = true;
drizzle.elf = true;
drizzle.female = true;
drizzle.support = true;
drizzle.slot = 10;

////Bubba, the Swimming Orc
var bubba = new Crusader("Bubba, the Swimming Orc");
bubba.orc = true;
bubba.male = true;
bubba.event = true;
bubba.support = true;
bubba.goldfinder = true;
bubba.slot = 10;

//////Slot 11
////Khouri, the Witch Doctor
var khouri = new Crusader("Khouri, the Witch Doctor");
khouri.healer = true;
khouri.human = true;
khouri.magical = true;
khouri.male = true;
khouri.support = true;
khouri.slot = 11;
khouri.gear = ["Rare","Rare","Epic"];

////Momma Kaine
var momma = new Crusader("Momma Kaine");
momma.event = true;
momma.female = true;
momma.healer = true;
momma.support = true;
momma.human = true;
momma.slot = 11;

////Brogon, Prince of Dragons
var brogon = new Crusader("Brogon, Prince of Dragons");
brogon.dragon = true;
brogon.event = true;
brogon.animal = true;
brogon.healer = true;
brogon.male = true;
brogon.support = true;
brogon.royal = true;
brogon.slot = 11;

////The Half-Blood Elf
var halfblood = new Crusader("The Half-Blood Elf");
halfblood.female = true;
halfblood.elf = true;
halfblood.orc = true;
halfblood.event = true;
halfblood.healer = true;
halfblood.support = true;
halfblood.slot = 11;

//////Slot 12
////Dark Gryphon
var gryphon = new Crusader("Dark Gryphon");
gryphon.animal = true;
gryphon.female = true;
gryphon.supernatural = true;
gryphon.support = true;
gryphon.gear = ["Epic","Epic","Epic"];
gryphon.slot = 12;

////Rocky the Rockstar
var rocky = new Crusader("Rocky the Rockstar");
rocky.event = true;
rocky.dps = true;
rocky.human = true;
rocky.male = true;
rocky.slot = 12;

////Montana James
var montana = new Crusader("Montana James");
montana.event = true;
montana.support = true;
montana.male = true;
montana.human = true;
montana.slot = 12;

////The Dark Helper
var helper = new Crusader("The Dark Helper");
helper.event = true;
helper.female = true;
helper.elf = true;
helper.support = true;
helper.goldfinder = true;
helper.slot = 12;


//////Slot 13
////Sarah, the Collector
var sarah = new Crusader("Sarah, the Collector");
sarah.dps = true;
sarah.female = true;
sarah.human = true;
sarah.slot = 13;
sarah.gear = ["Rare","Epic","Rare"];

//// The Metal Soldierette
var soldierette = new Crusader("The Metal Soldierette");
soldierette.dps = true;
soldierette.robot = true;
soldierette.female = true;
soldierette.tank = true;
soldierette.human = true;
soldierette.event = true;
soldierette.slot = 13;

//////Slot 14
////Gold Panda
var panda = new Crusader("Gold Panda");
panda.animal = true;
panda.female = true;
panda.goldfinder = true;
panda.supernatural = true;
panda.slot = 14;
panda.gear = ["Rare","Rare","Rare"];

////RoboSanta
var santa = new Crusader("RoboSanta");
santa.event = true;
santa.male = true;
santa.robot = true;
santa.goldfinder = true;
santa.slot = 14;

////Leerion, the Royal Dwarf
var leerion = new Crusader("Leerion, the Royal Dwarf");
leerion.event = true;
leerion.royal = true;
leerion.dwarf = true;
leerion.goldfinder = true;
leerion.human = true;
leerion.male = true;
leerion.slot = 14;

////Katie the Cupid
var katie = new Crusader("Katie the Cupid");
katie.event = true;
katie.female = true;
katie.supernatural = true;
katie.goldfinder = true;
katie.support = true;
katie.slot = 14;

//////Slot 15
////Prince Sal, the Merman
var sal = new Crusader("Prince Sal, the Merman");
sal.animal = true;
sal.dps = true;
sal.male = true;
sal.royal = true;
sal.slot = 15;
sal.gear = ["Uncommon","Rare","Epic"];

////Wendy the Witch
var wendy = new Crusader("Wendy the Witch");
wendy.event = true;
wendy.female = true;
wendy.magical = true;
wendy.dps = true;
wendy.human = true;
wendy.slot = 15;

////Robbie Raccoon
var robbie = new Crusader("Robbie Raccoon");
robbie.animal = true;
robbie.dps = true;
robbie.event = true;
robbie.male = true;
robbie.support = true;
robbie.slot = 15;

////Princess Val the Mermaid
var val = new Crusader("Princess Val the Mermaid");
val.animal = true;
val.royal = true;
val.event = true;
val.healer = true;
val.support = true;
val.female = true;
val.slot = 15;

//////Slot 16 
////Fire Phoenix
var phoenix = new Crusader("Fire Phoenix");
phoenix.animal = true;
phoenix.female = true;
phoenix.supernatural = true;
phoenix.support = true;
phoenix.slot = 16;
phoenix.gear = ["Epic","Epic","Epic"];

////Alan the ArchAngel
var alan = new Crusader("Alan the ArchAngel");
alan.angel = true;
alan.event = true;
alan.male = true;
alan.supernatural = true;
alan.support = true;
alan.slot = 16;

////Fright-o-Tron 4000
var fright = new Crusader("Fright-o-Tron 4000");
fright.event = true;
fright.robot = true;
fright.event = true;
fright.support = true;
fright.slot = 16;


//////Slot 17
////King Reginald IV
var reginald = new Crusader("King Reginald IV");
reginald.human = true;
reginald.male = true;
reginald.royal = true;
reginald.support = true;
reginald.slot = 17;
reginald.gear = ["Epic","Rare","Epic"];

////Queen Siri
var siri = new Crusader("Queen Siri");
siri.female = true;
siri.event = true;
siri.support = true;
siri.royal = true;
siri.human = true;
siri.goldfinder = true;
siri.slot = 17;

////Mr. Boggins, the Substitute
var boggins = new Crusader("Mr. Boggins, the Substitute");
boggins.event = true;
boggins.leprechaun = true;
boggins.male = true;
boggins.support = true;
boggins.goldfinder = true;
boggins.slot = 17;

//////Slot 18
////Thalia, the Thunder King
var thalia = new Crusader("Thalia, the Thunder King");
thalia.human = true;
thalia.magical = true;
thalia.male = true;
thalia.royal = true;
thalia.support = true;
thalia.tank = true;
thalia.slot = 18;
thalia.gear = ["Rare","Rare","Rare"];

////Frosty the Snowman
var frosty = new Crusader("Frosty the Snowman");
frosty.dps = true;
frosty.event = true;
frosty.male = true;
frosty.supernatural = true;
frosty.animal = true;
frosty.slot = 18;

////Littlefoot
var littlefoot = new Crusader("Littlefoot");
littlefoot.event = true;
littlefoot.tank = true;
littlefoot.female = true;
littlefoot.animal = true;
littlefoot.supernatural = true;
littlefoot.support = true;
littlefoot.slot = 18;

////Cindy the Cheer-Orc
var cindy = new Crusader("Cindy the Cheer-Orc");
cindy.event = true;
cindy.orc = true;
cindy.female = true;
cindy.support = true;
cindy.slot = 18;

//////Slot 19
////Merci, the Mad Wizard
var merci = new Crusader("Merci, the Mad Wizard");
merci.human = true;
merci.magical = true;
merci.male = true;
merci.support = true;
merci.slot = 19;
merci.gear = ["Rare","Rare","Rare"];

////The Bat Billionaire
var bat = new Crusader("The Bat Billionaire");
bat.event = true;
bat.human = true;
bat.male = true;
bat.support = true;
bat.slot = 19;

////Petra the Pilgrim
var petra = new Crusader("Petra the Pilgrim");
petra.event = true;
petra.elf = true;
petra.dps = true;
petra.female = true;
petra.slot = 19;

//////Slot 20
////Nate Dragon
var nate = new Crusader("Merci, the Mad Wizard");
nate.human = true;
nate.dps = true;
nate.male = true;
nate.support = true;
nate.slot = 20;
nate.gear = ["Epic","Rare","Epic"];

////Kizlblyp, the Alien Traitor
var kiz = new Crusader("Kizlblyp, the Alien Traitor");
kiz.alien = true;
kiz.event = true;
kiz.female = true;
kiz.support = true;
kiz.dps = true;
kiz.magical = true;
kiz.slot = 20;

////Robo-Rudolph
var rudolph = new Crusader("Robo-Rudolph");
rudolph.event = true;
rudolph.male = true;
rudolph.robot = true;
rudolph.dps = true;
rudolph.slot = 20;

///////// Formation Calculations
//////Slot 1
////bushwhacker
bushwhacker.calculate = function() {
//Crit Gear (2nd)
  bushwhacker.critChance += itemCrit(bushwhacker.gear[1]);
};

////RoboRabbit
rabbit.calculate = function() {
  rabbit.critChance += itemCrit(rabbit.gear[1]);
  if (rabbit.clicking) {
    rabbit.globalDPS *= 1 + 0.25*itemAbility(rabbit.gear[2]);
  }
};

////Graham
graham.calculate = function() {
  graham.globalDPS *= 1.01 * itemDPS(graham.gear[1]);
  if (graham.stopped) {
    graham.globalDPS *= 1 + 0.5 * itemAbility(graham.gear[2]);
  }
};

//////Slot 2
////Jim
jim.calculate = function() {
//Global DPS Item (1st)
  jim.globalDPS *= itemDPS(jim.gear[0]);
//Self Buff
  if (jim.isDPS) {
    for (var i in jim.whatsAdjacent) {
      if (formation[i].inFormation)
        jim.globalDPS *= 2;
        break;
    }
  }
//Column Buff
  for (var j in jim.whatsAdjacent) {
    if (formation[j] && formation[j].isDPS) {
      if (currentWorld.columnNum(jim.slot) == currentWorld.columnNum(dpsChar.slot)) {
        jim.globalDPS *= 1.5;
      }
    }
  }
};

////
pam.calculate = function() { 
  pam.globalDPS *= itemDPS(pam.gear[0]);
  pam.numInColumn = 0;
  pam.dpsInColumn = false;
  for (var j in formation) {
    if (currentWorld.columnNum(pam.slot) == currentWorld.columnNum(formation[j].slot)){
      pam.numInColumn += 1;
      if (formation[j].isDPS) {
        pam.dpsInColumn = true;
      }
    }
  }
  if (pam.numInColumn == 2 && pam.dpsInColumn) {
    pam.globalDPS *= 1 + 1 * itemAbility(pam.gear[1]);
  }
  if (pam.isDPS) {
    for (var i in pam.whatsAdjacent) {
      if (formation[i].inFormation)
        pam.globalDPS *= 2;
        break;
    }    
  }
};

//////Slot 3
////Emo Werewolf 
emo.calculate = function() {
//Global DPS Item (3rd)
  emo.globalDPS *= itemDPS(emo.gear[2]);
//Self DPS Buffs  
  emo.selfDPS *= 2*2*2*2.5*itemSelfDPS(emo.gear[0])*itemSelfDPS(emo.gear[1]);
//Conditional Self Buff
  if (emo.isDPS) {
    var noHumansAdjacent = true;
    for (var i in emo.whatsAdjacent) {
      if ((formation[i] && formation[i].human)) {
        noHumansAdjacent = false;
      }
    }
    if (noHumansAdjacent) {
      emo.globalDPS *= 3;
    }
  }
};

////Sally the Succubus



////Karen, the Cat Teenager

//////Slot 4
////Sasha the Fierce Warrior
sasha.calculate = function() {
//Global DPS Item (3rd)
  sasha.globalDPS *= itemDPS(sasha.gear[2]);
//Bulwark  
  if (currentWorld.columnNum[sasha.spot]==currentWorld.columnNum[dpsChar.spot]+1) {
    sasha.globalDPS *=1 + 0.3*itemAbility(sasha.gear[1]);
  }
};

//////Slot 5
////The Washed Up Hermit
hermit.calculate = function() {
//Global DPS Item (2nd)
  hermit.globalDPS *= itemDPS(hermit.gear[1]);
//Craziness  
  if (hermit.isDPS) {
    hermit.noOneAhead = true;
    for (var i in hermit.whatsAdjacent) {
      if (formation[i] && (currentWorld.columnNum(i)==currentWorld.columnNum(hermit.spot)+1)) {
        noOneAhead = false;
      }
    }
    if (hermit.noOneAhead) {
      hermit.globalDPS *= 3;
    }
  }
};

//////Slot 6
////Detective Kaine
kaine.calculate = function() {
//Global DPS Item (3rd)
  kaine.globalDPS *= itemDPS(kaine.gear[2]);
//A-Ha
  for (var i in kaine.whatsAdjacent) {
    kaine.sameColumn = 0; //Check if this should be 1 or 0 (does kaine count himself)
    if (formation[i] && (currentWorld.columnNum(kaine.spot)==currentWorld.columnNum(i))) {
      kaine.globalGold *= (1 + 0.2*itemAbility(kaine.gear[0]));
    }
//Karen compatability for A-Ha
    if (karen.inFormation && (currentWorld.columnNum(kaine.spot)!=currentWorld.columnNum(karen.spot))) {
      kaine.globalGold *= (1 + 0.2*itemAbility(kaine.gear[0])*0.5*itemAbility(karen.gear[0]));
    }
  }
};

//////Slot 7
////The Princess
princess.calculate = function() {
//DPS Gear (2nd)  
  princess.globalDPS *= itemDPS(princess.gear[1]);
//Ignite, Char, Conflagrate (Check if these multiply or add)  
  princess.globalDPS *= (1+0.1*itemAbility(princess.gear[2]))^3;
};

//////Slot 8
////Natalie Dragon
natalie.calculate = function() {
//Global DPS Ability  
  natalie.globalDPS *= 1.15;
//Gold Find Gear (2nd)  
  natalie.globalGold *= itemGold(natalie.gear[1]);
//DPS Gear (3rd)
  natlie.globalDPS *= itemDPS(natlie.gear[2]);
//Double Dragon  
  if (nate.inFormation && natalie.isDPS){
    natalie.globalDPS *= 1+2*itemAbility(nate.gear[2]);
  }
};

//////Slot 9
////Jason
jason.calculate = function() {
//Gold Find Gear (2nd)  
  jason.globalGold *= itemGold(jason.gear[1]);
//DPS Gear (3rd)  
  jason.globalDPS *= itemDPS(jason.gear[2]);
//Ambush not included due to it's limited usefulness  
};

//////Slot 10
////Artaxes the Lion
lion.calculate = function() {
  lion.critChance = 3;
  if (currentWorld.columnNum[lion.spot]==currentWorld.columnNum[dpsChar.spot]-1) {
    lion.globalDPS *= 1 + 0.5*itemAbility(sasha.gear[1]);
  }
  lion.globalDPS *= itemDPS(lion.gear[2]);
};

//////Slot 11
////Khouri, the Witch Doctor
khouri.calculate = function() {
//Koffee Potion  
  for (var i in khouri.whatsAdjacent) {
    if ((formation[i] && formation[i].isDPS)) {
      khouri.globalDPS *= 1 + 0.3*itemAbility(khouri.gear[0]);
    }
  } 
//DPS Gear (3rd)
  khouri.globalDPS *= itemDPS(khouri.gear[2]);
};


//////Slot 12
////Dark Gryphon
gryphon.calculate = function() {
  gryphon.globalDPS *= 1.15;
//DPS item (3rd)
  gryphon.globalDPS *= itemDPS(gryphon.gear[2]);
};


//////Slot 13
////Sarah, the Collector
sarah.calculate = function() {
  sarah.globalDPS *= 1.15;
  sarah.critChance += 3;
  sarah.globalDPS *= itemDPS(sarah.gear[2]);
  if (sarah.isDPS) {
    var formationFull = true;
    for (i=0; i<currentWorld.slots; i++){
      if (!formation[i]) {
        formationFull = false;
      }
    }
    if (formationFull) {
      sarah.globalDPS *= 2.5;
    }
  }
};

//////Slot 14
////Gold panda
panda.calculate = function() {
  panda.globalGold *= 1.25^3*itemGold(panda.gear[2]);
  panda.globalDPS *= itemDPS(panda.gear[1]);
  panda.critChance += 3;
};

//////Slot 15
////Prince Sal, the Merman
sal.calculate = function() {
  sal.globalDPS *= 1.1*itemDPS(sal.gear[1]);
};

//////Slot 16
////Fire Phoenix
phoenix.calculate = function() {
  phoenix.globalDPS *= itemDPS(phoenix.gear[1]);
};

//////Slot 17
////King Reginald IV
reginald.calculate = function() {
  reginald.globalDPS *= 1.1*itemDPS(reginald.gear[1]);
  if (dpsChar.royal) {
    reginald.globalDPS *= 1 + 2*itemAbility(reginald.gear[2]);
  }
};

//////Slot 18
////Thalia, the Thunder King
thalia.calculate = function() {
  thalia.globalDPS *= 1.15*itemDPS(thalia.gear[1]);
};

//////Slot 19
////Merci, the Mad Wizard
merci.calculate = function() {
  merci.globalDPS *= 1.15*itemDPS(merci.gear[1]);
};

//////Slot 20
////Nate Dragon
nate.calculate = function() {
  nate.globalDPS = itemDPS(nate.gear[1]);
//Double Dragon  
  if (natalie.inFormation && nate.isDPS){
    nate.globalDPS *= 1+2*itemAbility(nate.gear[2]);
  }
};



//Formations
function World(name,slots) {
  this.name = name;
  this.slots = slots;
  var adjacent = [];
  var columnNum = [];
  for (i = 0; i < this.slots; i++) {
    adjacent[i]=[];
    columnNum[i]=[];
  }
  this.setAdjacent = function(spot,adjacentArray) {
    adjacent[spot] = adjacentArray;
  };
  this.setColumn = function(spot,columnNumIn) {
    columnNum[spot] = columnNumIn;
  };
  this.isAdjacent = function(spot1,spot2) {
    var adjacentTest = false;
    for (var i in adjacent[spot1]){
      if (i == spot2) {
        adjacentTest = true;
      }
    }
    return adjacentTest;
  };
  this.whatsAdjacent = function(spot1) {
    return adjacent[spot1];
  }
  this.columnNum = function(spot) {
    return columnNum[spot];
  };
}


var worldsWake = new World("World's Wake",10);
worldsWake.setAdjacent(0,[1,4]);
worldsWake.setAdjacent(1,[0,2,4,5]);
worldsWake.setAdjacent(2,[1,3,5,6]);
worldsWake.setAdjacent(3,[2,6]);
worldsWake.setAdjacent(4,[0,1,5,7]);
worldsWake.setAdjacent(5,[1,2,4,6,7,8]);
worldsWake.setAdjacent(6,[2,3,5,8]);
worldsWake.setAdjacent(7,[4,5,8,9]);
worldsWake.setAdjacent(8,[5,6,7,9]);
worldsWake.setAdjacent(9,[7,8]);
for (i = 0; i < 10; i++) {
  switch(true){
    case (i<4):
      worldsWake.setColumn(i,1);
      break;
    case (i>3 && i<7):
      worldsWake.setColumn(i,2);
      break;
    case (i>6 && i<9):
      worldsWake.setColumn(i,3);
      break;
    case (i==9):
      worldsWake.setColumn(i,4);
      break;
  }
}

var formation = [];
var critChance = 1;
var globalDPS = 1;
var globalGold = 1;









//Set Up Formation
var dpsChar = emo;
var currentWorld = worldsWake;
formation[0]=emo;
//formation[6]=sasha;
//formation[2]=kaine;
formation[3]=pam;


dpsChar.BaseDPS = 1.11e6; //DPS of your dps char at lvl 1 out of formation
dpsChar.Level = 150; //Level to calculate the DPS at
dpsChar.enchant = 280;
var critConversion = 30;
var enchantPercent = 80;







dpsChar.isDPS = true;

for (i=0; i<formation.length; i++) {
  if (formation[i]) {
    formation[i].inFormation = true;
    if (formation[i].isDPS) {
      var dpsLocation = i;
    }
    formation[i].spot = i;
    formation[i].whatsAdjacent=currentWorld.whatsAdjacent(i);
  }
  
}
for (var i in formation) {
  formation[i].calculate();
  globalDPS *= formation[i].globalDPS;
  globalGold *= formation[i].globalGold;
  critChance += formation[i].critChance;
}
globalDPS *= 1 + critChance * critConversion/100;

//// Try to calculate DPS, still missing too many things
if (dpsChar.Level>=200) {
  dpsChar.LogDPS = Math.log10(dpsChar.BaseDPS) + Math.log10(dpsChar.selfDPS) + Math.log10(dpsChar.Level) + Math.log10(global.DPS) + Math.log10(4)*Math.log10(Math.floor((dpsCharLevel-175)/25)) + Math.log10(dpsChar.enchant*enchantPercent/100);
} else {
  dpsChar.LogDPS = Math.log10(dpsChar.BaseDPS) + Math.log10(dpsChar.selfDPS)  + Math.log10(dpsChar.Level) + Math.log10(globalDPS) + Math.log10(dpsChar.enchant*enchantPercent/100);
}

console.log("Your DPS is " + Math.round(globalDPS*10000)/100 + "% of base");
console.log("Your gold find is " + Math.round(globalGold*10000)/100 +"% of base");
