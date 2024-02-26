// Give xp a function//
// Add an armour variable//
// Add an items variable array//
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let weaponImproved = 0; //when new weapon is bought, refresh this variable//
let armour = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];
let storeItem = ["health","a dagger","a claw hammer", "a sword"]
let locationSet = 0;
let monsterSet = 0;
let bossCounter = 0;

const notEnough = "You don't have enough gold to buy ";
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const armourText = document.querySelector("#armourText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const actionWindow = document.querySelector("#actionWindow");
const button = document.querySelector("button");
//Add more weapons//
//Add an armour object list below weapons//
const weapons = [
  {
    name: " stick",
    power: 10000
  },
  {
    name: " dagger",
    power: 30
  },
  {
    name: " claw hammer",
    power: 50
  },
  {
    name: " sword",
    power: 100
  }
];

// Add a monster object list below weapons//
// Add a monster health calculation that scales with players XP//
const monsters = [
  {
   name: "A Slime", 
    level: 2, 
    health: 15
  },
  {
    name: "A Fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "Typhon",
    level: 20, 
    health: 300
  },
  {
    name: "Agrius",
    level: 20,
    health: 300
  },
  {
    name: "The Hekatonkheir",
    level: 20,
    health: 300
  },
  {
    name: "Cerberus",
    level: 20,
    health: 300
  },
  {
    name: "The Hydra",
    level: 30,
    health: 500
  },
  {
    name: "The Minotaur",
    level: 40,
    health: 700
  },
  {
    name: "The Cyclops",
    level: 100,
    health: 1000
  },
  {
    name: "The Gorgon",
    level: 60,
    health: 1500
  },
  {
    name: "Hades",
    level: 90,
    health: 5000
  }
];

const locations = [


  //Navigation Locations//
  {
    name: "title",
    "button text": ["Start game", "Start game", "Start game"],
    "button functions": [goMap, goMap, goMap],
    text: "Welcome to Adventures of Tyche! Greece in the year 600BC was overrun with terrible monsters. Soon a young boy will be born who will challenge the power of these beasts, Hercules. However, Greece can't wait for him to be born and needs help now. You are the ancient goddess of fortune, Tyche. You need to liberate the major cities of greece from the tyranny of the monsters who live deep inside the caves.Press any button to start the game.",
    image: "title.png"
  },
  {
    name: "map",
    "button text": ["Back to title", "Northern Greece", "Southern Greece"],
    "button functions": [goTitle, goNorth, goSouth],
    text: "You open your map. Choose where you want to go first - the Northern provinces of Thrace and Macedonia or to the Southern city states of Athens and Sparta?",
    image: "MapFull.png"
  },
  {
    name: "north",
    "button text": ["Back to main map", "Thrace", "Macedonia"],
    "button functions": [goMap, goTownT, goTownM],
    text: "You are in Northern Greece. Choose where you want to go next - Thrace or Macedonia?",
    image: "mapNorth.png"
  },
  {
    name: "south",
    "button text": ["Back to main map", "Athens", "Sparta"],
    "button functions": [goMap, goTownA, goTownS],
    text: "You are in Southern Greece. Choose where you want to go next - Athens or Sparta?",
    image: "mapSouth.png"
  },
 


  //Store Locations//

  {
    name: "store",
    "button text": ["Buy health and armour", "Buy weapons", "Go to town square"],
    "button functions": [goHealthandArm, goWeapons, goTown],
    text: "You enter the store.",
    image: "Shop.png"
  },
  {
    name: "health and armour",
    "button text": ["Buy health (10 Gold)", "Buy armour (20 Gold)", "Go to store"],
    "button functions": [buyHealth, buyArmour, goStore],
    text: "You see some health and armour for sale.",
    image: "healthandarmour.png"
  },
  {
    name: "weapons",
    "button text": ["Buy weapon (100 Gold)", "Plus 2 weapon power (15 Gold)", "Go to store"],
    "button functions": [buyWeapon, improveWeapon, goStore],
    text: "You see some weapons for sale.",
    image: "Weapons.png"
  },



  //Macadonia Locations//

  {
    name: "Macadonian town square",
    "button text": ["Go to look at Map", "Go to cave", "Go to store"],
    "button functions": [goMap, goCaveM, goStore],
    text: "As you enter the expansive realm of Macedonia, the lush landscapes of Philip II's kingdom unfold before you. There, amidst the tranquility, lies an ominous cave, its mouth emitting the chilling sounds of creatures stirring in the dark. A stone's throw away, a lively store brims with wares for the adventurous soul, manned by a merchant whose tales of Alexander's conquests fill the air. Macedonia's mysteries beckon.",
    image: "Macedonia.png"
  },
  {
    name: "Macedonian cave",
    "button text": ["Fight slime", "Go deeper into the cave", "Go to town square"],
    "button functions": [fightSlime, goDeeperM, goTownM],
    text: "You enter the cave. You see some monsters.",
    image: "cave.png"
  },
  {
    name: "deeper cave",
    "button text": ["Fight beast", "Go deeper into the cave", "Go to town square"],
    "button functions": [fightBeast, goDeepestM, goTownM],
    "text": "You are deeper in the cave. You see a beast.",
    image: "deepercave.png"
  },
  {
    name: "deepest cave",
    "button text": ["Fight Typhon", "Go to town square", "Go to town square"],
    "button functions": [fightTyphon, goTownM, goTownM],
    text: "You are in the deepest part of the cave. You see a Typhon the dragon.",
    image: "Typhon.png"
  },

//Athenian Locations

  {
    name: "Athenian town square",
    "button text": ["Go to look at Map", "Go to cave", "Go to store"],
    "button functions": [goMap, goCaveA, goStore],
    text: "Upon reaching the storied city of Athens, you are enveloped by the weight of history and the echoes of philosophy that permeate its streets. An ancient cave near the city promises its own kind of wisdom, albeit through confrontation with the monsters that lurk in its shadows. In the city's heart, a bustling store offers goods to aid your journey, the Athenian shopkeeper engaging you in conversation about democracy, art, and the pursuit of knowledge.",
    image: "Athens.png"
  },
  {
    name: "Athenian cave",
    "button text": ["Fight slime", "Go deeper into the cave", "Go to town square"],
    "button functions": [fightSlime, goDeeperA, goTownA],
    text: "You enter the cave. You see some monsters.",
    image: "cave.png"
  },
  {
    name: "deeper Athenian cave",
    "button text": ["Fight beast", "Go deeper into the cave", "Go to town square"],
    "button functions": [fightBeast, goDeepestA, goTownA],
    "text": "You are deeper in the cave. You see a beast.",
    image: "deepercave.png"
  },
  {
    name: "deepest Athenian cave",
    "button text": ["Fight Cerberus", "Go to town square", "Go to town square"],
    "button functions": [fightCerberus, goTownA, goTownA],
    text: "You are in the deepest part of the cave. You see a Cerbarus the three headed dog.",
    image: "Cerberus.png"
  },



//Thrace Locations//

  {
    name: "Thrakian Town Square",
    "button text": ["Go to look at Map", "Thracian Cave System", "Go to the Store"],
    "button functions": [goMap, goCaveT, goStore],
    text: "Thrace greets you with its wild, untamed beauty, where the legacy of Orpheus and the muses seem to dance in the wind. An eerie cave entrance stands nestled against a backdrop of dense forests, the shrieks of monsters within promising peril and adventure. Not far from this daunting sight, a welcoming store offers sanctuary and supplies, its Thracian owner sharing stories of legendary heroes and ancient gods.",
    image: "Thrace.png"
 },
  {
    name: "Thrakian Cave System",
    "button text": ["Fight Slime", "Go deeper into the cave", "Go to town square"],
    "button functions": [fightSlime, goDeeperT, goTownT],
    text: "You enter the cave. You see some monsters.",
    image: "cave.png"
  },
  {
    name: "Deeper Thrakian Cave",
    "button text": ["Fight Beast", "Go deeper into the cave", "Go to town square"],
    "button functions": [fightBeast, goDeepestT, goTownT],
    text: "You are deeper in the cave. You see a beast.",
    image: "deepercave.png"
  },
  {
    name: "Deepest Thrakian Cave",
    "button text": ["Fight Agrius", "Go to town square", "Go to town square"],
    "button functions": [fightAgrius, goTownT, goTownT],
    text: "You are in the deepest part of the cave. You see Agrius the Man-eating giant.",
    image: "Agrius.png"
  },



//Sparta Locations//

  {
    name: "Spartan Town Square",
    "button text": ["Go to look at Map", "Spartan Cave System", "Go to the Store"],
    "button functions": [goMap, goCaveS, goStore],
    text: "Upon arriving in the rugged lands of Sparta, you stand before the city's imposing gates, the air thick with the spirit of warriors past and present. To your right, a dark cave entrance whispers of hidden dangers, the growls of unseen monsters echoing from its depths. Nearby, a modest store offers supplies, its Spartan keeper eyeing you with a mixture of curiosity and respect. The promise of challenge and glory in Sparta is palpable.",
    image: "Sparta.png"
 },
  {
    name: "`Spartan Cave System",
    "button text": ["Fight Slime", "Go deeper into the cave", "Go to town square"],
    "button functions": [fightSlime, goDeeperS, goTownS],
    text: "You enter the cave. You see some monsters.",
    image: "cave.png"
  },
  {
    name: "Deeper Spartan Cave",
    "button text": ["Fight Beast", "Go deeper into the cave", "Go to town square"],
    "button functions": [fightBeast, goDeepestS, goTownS],
    text: "You are deeper in the cave. You see a beast.",
    image: "deepercave.png"
  },
  {
    name: "Deepest Spartan Cave",
    "button text": ["Fight Hecatoncheir", "Go to town square", "Go to town square"],
    "button functions": [fightHecatoncheir, goTownS, goTownS],
    text: "You are in the deepest part of the cave. You see a Hecatoncheir the hundred handed giant.",
    image: "Hecatoncheir.png"
  },



//General Combat Locations//

  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions":[attack, dodge, goTown],
    text: "You entre the fight with your foe. You're current attack power is " + weapons[currentWeapon].power + " and your current dodge chance is " + ((0.25 + (0.75 * (armourFunction(armour))) * 100) * 100) + "%.",
  
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
    image: "killmonster.png"
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You were slain. &#x2620;",
    image: "gameOver.png"

  },
  { 
    name: "win", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "You defeated Hades and rid the land of monsters, the people of Greece are eternally grateful! YOU WIN THE GAME! &#x1F389;",
    image: "win.png"
  },
  


  //End-game location//

  {
    name: "Crete",
    "button text": ["Go to Temple", "Go to Temple", "Go to the Store"],
    "button functions": [goTemple, goTemple, goStore],
    text: "Arriving in Crete, the cradle of ancient civilizations and myths, you stand before the Temple of Tyche, your sacred dominion. The majestic structure, bathed in the golden light of dusk, stands as a beacon amidst the chaos. Guarding the entrance, monstrous figures loom, their forms casting long shadows across the temple's steps, a sinister welcome to those who dare approach. From within the depths of the temple, blood-curdling sounds pierce the air, a chilling symphony of the battles that await. This is the heart of your power, the place where fate itself will be challenged. The final confrontation looms, a test of divine will against the darkness that seeks to engulf your realm. The destiny of gods and mortals hangs in the balance, and only through courage, strength, and wisdom will the light prevail.",
    image: "crete.png"
  },

  {
    name: "temple",
    "button text": ["Fight Hydra", "Entre the temple", "Go to town square"],
    "button functions": [fightHydra, entreTemple, goTownC],
    text: "You are at the Temple of Tyche. You see a Hydra guarding the entrance, its heads writhe in the air and its 3 heads turn to looking at you, snarling. The Hydra will regen 20 health every turn, kill it quickly or run.",
    image: "temple.png"
  },
  {
    name: "temple entrance",
    "button text": ["Fight Minotaur", "Go deeper into the temple", "Go to town square"],
    "button functions": [fightMinotaur, goDeeperTemple, goTownC],
    text: "You are at the entrance of the temple. You see a Minotaur guarding the entrance, its eyes red with rage and its horns glinting in the ray of the sun's light which shines through a crack in the ceiling. Your armour will be more effective in this fight but the minotaur will do double base damage to you in straight combat.",
    image: "templeEntrance.png"
  },
  {
    name: "temple deeper",
    "button text": ["Fight Cyclops", "Go deeper into the temple", "Go to town square"],
    "button functions": [fightCyclops, goDeepestStillTemple, goTownC],
    text: "You are deeper in the temple. You see a Cyclops guarding the entrance, its eye glinting in the dark and its club raised, ready to strike - there's no shame in running.",
    image: "templeDeeper.png"
  },
  {
    name: "temple deeper still",
    "button text": ["Fight Gorgon", "Go to town square", "Go to town square"],
    "button functions": [fightGorgon, goDeepestTemple, goTownC],
    text: "You are deeper still in the temple. You hear the hissing as you approach and recognise the Gorgon's distinctive smell. You close your eyes and prepare to fight - during this fight your avaisiveness and aim during this fight will be severely effected. Turn back now if you are not prepared.",
    image: "gorgon.png"
  },
 
  {
    name: "temple deepest",
    "button text": ["Fight Hades", "Go to town square", "Go to town square"],
    "button functions": [fightHades, noEscape, noEscape],
    text: "You are in the deepest part of the temple. You see Hades, the god of the underworld. He is the most powerful monster in the game. You will need to be at your best to defeat him.",
    image: "templeDeepest.png"
  },
 
  {
    name: "Crete Intro",
    "button text": ["Go to Crete", "Go to Crete", "Go to Crete"],
    "button functions": [goTownC, goTownC, goTownC],
    text: "With the fall of the last monstrous guardian on the Greek islands, whispers of your triumphs sail ahead of you to Crete, the land where legends dwell and myths breathe. This ancient isle, steeped in the tales of gods and heroes, awaits your arrival with bated breath. It stands as the ultimate arena, where the shadows of history and the trials of the gods converge. Here, in Crete, your courage will be tested against the echoes of antiquity, challenging you to rise above the legends of old and carve your own legacy into the stones of time. The journey ahead promises glory for the victorious and oblivion for the fallen. To Crete, where destiny calls.",
    image: "crete.png"
  }

];
//initialize buttons//

button1.onclick = goMap;
button2.onclick = goMap;
button3.onclick = goMap;


//Location functions//

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  actionWindow.src = location.image;
  text.innerHTML = location.text;
}
function goTitle() {
  update(locations[0])
}
function goMap() {
  update(locations[1]);
}
function goNorth() {
  update(locations[2]);
}
function goSouth() {
  update(locations[3]);
}
function goStore() {
  update(locations[4]);
}
function goHealthandArm() {
  update(locations[5]);
}
function goWeapons() {
  update(locations[6]);
}
function goTown() {
  update (locations[locationSet]);
}

//Macedonia Functions//

function goTownM() {
  locationSet = 7;
  update(locations[7]);
}
function goCaveM() {
  locationSet = 7;
  update(locations[8]);
}
function goDeeperM() {
  locationSet = 7;
  update(locations[9]);
}
function goDeepestM() {
  locationSet = 7;
  update(locations[10]);
}

//Athenian Functions//

function goTownA() {
  locationSet = 11;
  update(locations[11]);
}
function goCaveA() {
  locationSet = 11;
  update(locations[12]);
}
function goDeeperA() {
  locationSet = 11;
  update(locations[13]);
}
function goDeepestA() {
  locationSet = 11;
  update(locations[14]);
}

//Thrace Functions//

function goTownT() {
  locationSet = 15;
  update(locations[15]);
}
function goCaveT() {
  locationSet = 15; 
  update(locations[16]);
}
function goDeeperT() {
  locationSet = 15;
  update(locations[17]);
}
function goDeepestT() {
  locationSet = 15;
  update(locations[18]);
}

//Spartan Functions//

function goTownS() {
  locationSet = 19;
  update(locations[19]);
}
function goCaveS() {
  locationSet = 19; 
  update(locations[20]);
}
function goDeeperS() {
  locationSet = 19;
  update(locations[21]);
}
function goDeepestS() {
  locationSet = 19;
  update(locations[22]);
}

//Temple Functions//

function goTownC() {
  locationSet = 27;
  update(locations[27]);
}

function goTemple() {
  locationSet = 27;
  update(locations[28]);
}
function entreTemple() {
  locationSet = 27;
  if (!defeatedBosses[6]) {
    noPass0();
  } else {
  update(locations[29]);}
}
function goDeeperTemple() {
  locationSet = 27;
  if (!defeatedBosses[7]) {
    noPass1();
  } else {
  update(locations[30]);}
}
function goDeepestStillTemple() {
  locationSet = 27;
  if (!defeatedBosses[8]) {
    noPass2();
  } else {
  update(locations[31]);}
}
function goDeepestTemple() {
  locationSet = 27;
  update(locations[32]);
}
function goCrete() {
  update(locations[33]);
}

//Temple Boss Functions//
function noEscape() {
  text.innerText = "You cannot escape from this fight, Hades' fire has cut off the exit to the temple, the flames reach to the roof like a pillar of fire. It seems the only way out is by fighting Hades.";
}

function noPass0() {
  text.innerText = "You cannot pass through the temple entrance, the Hydra's heads are too many and its strength too great to move.";

}
function noPass1() {
  text.innerText = "You cannot pass through the temple, the Minotaur's horns are too wide and its strength too great to move.";
}

function noPass2() {
  text.innerText = "You cannot pass through the temple entrance, the Cyclops' club is too heavy and its strength too great to move.";
}

function noPass3() {
  text.innerText = "You cannot pass through the temple entrance, the Gorgon's hissing and the smell of its breath is too much to bear.";
}




function fightDragon() {
  fighting = 2;
  goFight();
}

//Store Mechanics//

function buyHealth() {
  if (gold >= 10) {
    gold -= 10
    health += 10
    goldText.innerText = gold;
    healthText.innerText = health;
    text.innerText = "You bought 10 health and you feel a bit stronger. You're health is now " + health + ".";
  } else {
    text.innerText = (notEnough + (storeItem[0]) + "!");
  }
}
//Buy weapon function should update UI + text//
function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
  if (gold >= 100) {
    gold -= 100;
    currentWeapon++;
    goldText.innerText = gold;
    let newWeapon = weapons[currentWeapon].name;
    text.innerText = ("You now have a " + newWeapon + "!" + " Any weapon upgrades to your previous weapon will be lost.");
    inventory.push(newWeapon);
    text.innerText += " In your inventory you have: " + inventory;
    weaponImproved = 0;
   } else {
    text.innerText = "You do not have enough gold to buy a " + weapons[currentWeapon + 1].name + ".";
   }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold"
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innertext += " In your inventory you have" + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
  }

function improveWeapon() {
  if (gold >= 15) {
    gold -= 15;
    goldText.innerText = gold;
    weapons[currentWeapon].power += 2;
    text.innerText = "You improved your " + weapons[currentWeapon].name + "'s power to " + weapons[currentWeapon].power + "!";
  } else {
    text.innerText = "You do not have enough gold to improve your weapon.";
  }
}
function buyArmour() {
  if (gold >= 20) {
    gold -= 20;
    goldText.innerText = gold;
    armour += 10;
    armourText.innerText = armour;
    text.innerText = "You bought armour and you feel a bit stronger. You're armour is now " + armour + ".";
  } else {
    text.innerText = ("You don't have enough money to buy Armour!");
  }
}

//Grunt Monsters//

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

//Location Bosses//

function fightTyphon() {
  fighting = 2;
  goFight();
}

function fightAgrius() {
  fighting = 3;
  goFight();
}

function fightHecatoncheir() {
  fighting = 4;
  goFight();
}
function fightCerberus() {
  fighting = 5;
  goFight();
}

//End Game Bosses//

function fightHydra() {
  fighting = 6;
  goFight();
}
function fightMinotaur() {
  fighting = 7;
  goFight();
}
function fightCyclops() {
  fighting = 8;
  goFight();
}
function fightGorgon() {
  fighting = 9;
  goFight();
}
function fightHades() {
  fighting = 10;
  goFight();
}


function goFight() {
  update(locations[23]);
  monsterHealth = Math.round(monsters[fighting].health * (1 + (0.2 * (xp/60))));
  monsterStats.style.display = 'block';
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
  if (fighting === 0) {
    actionWindow.src = "slime.png";
  }
  if (fighting === 1) {
    actionWindow.src = "FangedBeast.png";
  }
  if (fighting === 2) {
    actionWindow.src = "Typhon.png";
  }
  if (fighting === 3) {
    actionWindow.src = "Agrius.png";
  }
  if (fighting === 4) {
    actionWindow.src = "Hecatoncheir.png";
  }
  if (fighting === 5) {
    actionWindow.src = "Cerberus.png";
  }
  if (fighting === 6) {
    actionWindow.src = "Hydra.png";
  }
  if (fighting === 7) {
    actionWindow.src = "Minotaur.png";
  }
  if (fighting === 8) {
    actionWindow.src = "Cyclops.png";
  }
  if (fighting === 9) {
    actionWindow.src = "Gorgon.png";
  }
  if (fighting === 10) {
    actionWindow.src = "Hades.png";
  }
}


  // Armour function to calculate damage reduction //
function armourFunction(armour) {
  k = 0.001;
   return (1 - Math.exp(-k * armour));
}

// Monster Attack damage function //

function monsterAttack() {
let monsterAttackDmg = Math.round(monsters[fighting].level * (1 + (0.1 * (xp/60))));
return monsterAttackDmg;
}

 // Attack Function with armourFunction variable //
// end-game boss fight where hydra regens 10 Health per turn//
function hydraRegen() {
  monsterHealth += 10;
  monsterHealthText.innerText = monsterHealth;
}

// end-game boss fight where your dodges have a greater chance of success and do more damage but the minotaur will do double base damage to you in straight combat.


  
  let defeatedBosses = {};

  function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    health -= Math.round((monsterAttack() * (1 - (1 * (armourFunction(armour))))));
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (fighting === 6) {
      hydraRegen();
      text.innerText += " The Hydra regenerates 10 health.";
    }
    if (fighting === 7) {
      health -= Math.round((monsterAttack() * 2 * (1 - (1 * (armourFunction(armour))))));
      healthText.innerText = health;
    }
    if (fighting === 9) {
      if (Math.random() < 0.5) {
        monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
        monsterHealthText.innerText = monsterHealth;
      } else {
        text.innerText = "You try to attack the " + monsters[fighting].name + " but miss.";
        health -= Math.round((monsterAttack() * (1 - (1 * (armourFunction(armour))))));
        healthText.innerText = health;
      }
    }

    if (health <= 0) {
      lose();
    } else if (monsterHealth <= 0) {
      if ([2, 3, 4, 5, 6, 7, 8, 9, 10].includes(fighting)) {
        if (!defeatedBosses[fighting]) {
          defeatedBosses[fighting] = true;
          bossCounter++;

          let defeatedBossesList = document.getElementById('defeatedBossesList');
          let span = document.createElement('span');
          span.textContent =  monsters[fighting].name;
          span.className = 'defeated';
          defeatedBossesList.appendChild(span);
        }
        defeatMonster();
      } else {
        defeatMonster();
      }
    }
  }

  // Dodge Logic //

function dodge() { 
  if (monsters[fighting].name === "The Minotaur") {

    if (Math.random() < (0.5 + (0.5 * (armourFunction(armour)))))  {
      text.innerText = "You dodge the attack from the " + monsters[fighting].name;
  monsterHealth -= Math.round((weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1));
  monsterHealthText.innerText = monsterHealth;
  if (monsterHealth <= 0) {
        defeatMonster();
} else {
  text.innerText = "You try to dodge the attack from the " + monsters[fighting].name + " but fail.";
  health -= Math.round((monsterAttack() * (1 - (1 * (armourFunction(armour))))));
  healthText.innerText = health;
  if (health <= 0) {
    lose();
  }
}
} } else if (monsters[fighting].name === "The Gorgon") {
  if (Math.random() < (0.1 + (0.9 * (armourFunction(armour))))  ) {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
    monsterHealth -= Math.round((weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1));
    monsterHealthText.innerText = monsterHealth;
    if (monsterHealth <= 0) {
      defeatMonster();
    }}}
   else {

  if (Math.random() < (0.25 + (0.75 * (armourFunction(armour)))))  {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
  monsterHealth -= Math.round((weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1)/2);
  monsterHealthText.innerText = monsterHealth;
  if (monsterHealth <= 0) {
    if ([2, 3, 4, 5, 6, 7, 8, 9, 10].includes(fighting)) {
      if (!defeatedBosses[fighting]) {
        defeatedBosses[fighting] = true;
        bossCounter++;

        let defeatedBossesList = document.getElementById('defeatedBossesList');
        let listItem = document.createElement('li');
        listItem.textContent = 'Boss ' + fighting;
        defeatedBossesList.appendChild(listItem);
      }
      defeatMonster();
    } else {
      defeatMonster();
    }
  }
} else {
  text.innerText = "You try to dodge the attack from the " + monsters[fighting].name + " but fail.";
  health -= Math.round((monsterAttack() * (1 - (1 * (armourFunction(armour))))));
  healthText.innerText = health;
  if (health <= 0) {
    lose();
  }
}
} 
}



// Fight Outcome Functions//

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  if (bossCounter === 4) {
    update(locations[33]);
  } else {update(locations[24]);}

}

function lose() {
  update(locations[25]);
}

function winGame() {
  update(locations[26]);

}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  armour = 0;
  inventory = ["stick"];
  bossCounter = 0;
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  armourText.innerText = armour;
  let defeatedBossesList = document.getElementById('defeatedBossesList');
  defeatedBossesList.innerHTML = '';
  goTitle();
}