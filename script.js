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
    power: 5
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
    level: 50,
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
    image: "gameImages/title.png"
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
    "button text": ["Buy health (10 Gold)", "Buy armour (10 Gold)", "Go to store"],
    "button functions": [buyHealth, buyArmour, goStore],
    text: "You see some health and armour for sale.",
    image: "healthandarmour.png"
  },
  {
    name: "weapons",
    "button text": ["Buy weapon (30 Gold)", "Plus 2 weapon power (15 Gold)", "Go to store"],
    "button functions": [buyWeapon, improveWeapon, goStore],
    text: "You see some weapons for sale.",
    image: "Weapons.png"
  },



  //Macadonia Locations//

  {
    name: "Macadonian town square",
    "button text": ["Go to look at Map", "Go to cave", "Go to store"],
    "button functions": [goMap, goCaveM, goStore],
    text: "You land in Macedonia. You see a sign that says \"Store\".",
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
    text: "You land in Athens. You see a sign that says \"Store\".",
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
    "button text": ["Go to town square", "Thracian Cave System", "Go to the Store"],
    "button functions": [goMap, goCaveT, goStore],
    text: "You land in Thrace. You see a cave system to the east and a store to the west.",
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
    "button text": ["Go to town square", "Spartan Cave System", "Go to the Store"],
    "button functions": [goMap, goCaveS, goStore],
    text: "You land in Sparta. You see a cave system to the east and a store to the west.",
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
    text: "You entre the fight with your foe. You're current attack power is " + weapons[currentWeapon].power + " and your current dodge chance is " + ((0.25 + (0.75 * (armourFunction(armour))) * 100) * 100) + "%."
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, goTown],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;"
  },
  { 
    name: "win", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" 
  },
  


  //End-game location//

  {
    name: "Crete",
    "button text": ["Go to Map", "Enter the Temple of Tyche", "Go to the Store"],
    "button functions": [goMap, goTemple, goStore],
    text: "You land in Crete. You look up at the Temple of Tyche - your Temple. You see monsters guarding the entrance and hear blood-curdling sounds coming from inside...",
    image: "crete.png"
  },

  {
    name: "temple",
    "button text": ["Fight Hydra", "Entre the temple", "Go to town square"],
    "button functions": [fightHydra, entreTemple, goTownC],
    text: "You are at the Temple of Tyche. You see a Hydra guarding the entrance, its heads writhe in the air and its 3 heads turn to looking at you, snarling. The Hydra will regen 20 health every turn, kill it quickly or run."
  },
  {
    name: "temple entrance",
    "button text": ["Fight Minotaur", "Go deeper into the temple", "Go to town square"],
    "button functions": [fightMinotaur, goDeeperTemple, goTownC],
    text: "You are at the entrance of the temple. You see a Minotaur guarding the entrance, its eyes red with rage and its horns glinting in the ray of the sun's light which shines through a crack in the ceiling. Your armour will be more effective in this fight but the minotaur will do double base damage to you in straight combat."
  },
  {
    name: "temple deeper",
    "button text": ["Fight Cyclops", "Go deeper into the temple", "Go to town square"],
    "button functions": [fightCyclops, goDeepestStillTemple, goTownC],
    text: "You are deeper in the temple. You see a Cyclops guarding the entrance, its eye glinting in the dark and its club raised, ready to strike. As you go to strike your first blow, he takes the sword from your hand and throws it across the room. You will have to fight him with your the second best weapon in your inventory - there's no shame in running."
  },
  {
    name: "temple deeper still",
    "button text": ["Fight Gorgon", "Go to town square", "Go to town square"],
    "button functions": [fightGorgon, goDeepestTemple, goTownC],
    text: "You are deeper still in the temple. You hear the hissing as you approach and recognise the Gorgon's distinctive smell. You close your eyes and prepare to fight - during this fight your avaisiveness and aim during this fight will be severely effected. Turn back now if you are not prepared."
  },
 
  {
    name: "temple deepest",
    "button text": ["Fight Hades", "Go to town square", "Go to town square"],
    "button functions": [fightHades, noEscape, noEscape],
    text: "You are in the deepest part of the temple. You see Hades, the god of the underworld. He is the most powerful monster in the game. You will need to be at your best to defeat him."
  },
  {
    name: "crete intro",
    "button text": ["Go to Map", "Set sail for Crete", "Go to the Store"],
  },
  {
    name: "boss battle",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are in the boss battle. You're current attack power is " + weapons[currentWeapon].power + " and your current dodge chance is " + ((0.25 + (0.75 * (armourFunction(armour))) * 100) * 100) + "%."
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
  update(locations[29]);
}
function goDeeperTemple() {
  locationSet = 27;
  update(locations[30]);
}
function goDeepestStillTemple() {
  locationSet = 27;
  update(locations[31]);
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
  fighting = 4;
  goFight();
}

function fightHecatoncheir() {
  fighting = 5;
  goFight();
}
function fightCerberus() {
  fighting = 6;
  goFight();
}

//End Game Bosses//

function fightHydra() {
  fighting = 7;
  goFight();
}
function fightMinotaur() {
  fighting = 8;
  goFight();
}
function fightCyclops() {
  fighting = 9;
  goFight();
}
function fightGorgon() {
  fighting = 10;
  goFight();
}
function fightHades() {
  fighting = 11;
  goFight();
}


function goFight() {
  update(locations[23]);
  monsterHealth = Math.round(monsters[fighting].health * (1 + (0.2 * (xp/20))));
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
  if (fighting === 4) {
    actionWindow.src = "Agrius.png";
  }
  if (fighting === 5) {
    actionWindow.src = "Hecatoncheir.png";
  }
  if (fighting === 6) {
    actionWindow.src = "Cerberus.png";
  }
}


  // Armour function to calculate damage reduction //
function armourFunction(armour) {
  k = 0.001;
   return (1 - Math.exp(-k * armour));
}

// Monster Attack damage function //

function monsterAttack() {
let monsterAttackDmg = Math.round(monsters[fighting].level * (1 + (0.1 * (xp/20))));
return monsterAttackDmg;
}

 // Attack Function with armourFunction variable //

  function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    health -= Math.round((monsterAttack() * (1 - (1 * (armourFunction(armour))))));
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
      lose();
    } else if (monsterHealth <= 0) {
      if ([2, 4, 5, 6].includes(fighting)) {
        if (bossCounter < 4) {
          defeatMonster();
          bossCounter++;
      } else if (bossCounter === 4) {
        update(locations[34]);
        locations[1].button1.innerText = "Go to Crete";
        locations[1].button1.onclick = goCrete;
    }} else {
      defeatMonster();
    }
  }
}

function goFightBoss() {
  update(locations[34]);
  monsterHealth = Math.round(monsters[fighting].health * (1 + (0.2 * (xp/20))));
  monsterStats.style.display = 'block';
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
  actionWindow.style.border = "1px solid red";
  button.style.backgroundColor = "linear-gradient(#fecc4c, #ffac33)"; // Change 'background-color' to 'backgroundColor'

  if (monsters[fighting].name === "The Hydra") {
    actionWindow.src = "Hydra.png";
  } else if (monsters[fighting].name === "The Minotaur") {
    actionWindow.src = "Minotaur.png";
  } else if (monsters[fighting].name === "The Cyclops") {
    actionWindow.src = "Cyclops.png";
  } else if (monsters[fighting].name === "The Gorgon") {
    actionWindow.src = "Gorgon.png";
  } else if (monsters[fighting].name === "Hades") {
    actionWindow.src = "Hades.png";
  }
}

  // Dodge Logic //

function dodge() { 
  if (Math.random() < (0.25 + (0.75 * (armourFunction(armour))))) {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
  monsterHealth -= Math.round((weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1)/2);
  monsterHealthText.innerText = monsterHealth;
  if (monsterHealth <= 0) {
    if ([2, 4, 5, 6].includes(fighting)) {
      if (bossCounter < 4) {
        defeatMonster();
        bossCounter++;
    } else if (bossCounter === 4) {
      update(locations[34]);
      locations[1].button1.innerText = "Go to Crete";
      locations[1].button1.onclick = goCrete;
  }} else {
    defeatMonster();
  }}
} else {
  text.innerText = "You try to dodge the attack from the " + monsters[fighting].name + " but fail.";
  health -= Math.round((monsterAttack() * (1 - (1 * (armourFunction(armour))))));
  healthText.innerText = health;
  if (health <= 0) {
    lose();
  }
}
} 



// Fight Outcome Functions//

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[24]);
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
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  armourText.innerText = armour;
  goTitle();
}