//Here are global stats for the player

var level = 5;
var attackDamage = 10;
var healthPoints = 100;
var gold = 99;

//On Start
function initalize(){

    //Load User Stats

    //Update Stats UI
    updateLevelValue();
    updateAttackDamage();
    updateHealthPoints();
    updateGoldValue();
}
initalize();




//Display current Values
function updateLevelValue(){
    document.getElementById("userLevel").innerHTML = this.level;
}

function updateAttackDamage(){
    document.getElementById("userAttackDamage").innerHTML = this.attackDamage;
}

function updateHealthPoints(){
    document.getElementById("userHealth").innerHTML = this.healthPoints;
}

function updateGoldValue(){
    document.getElementById("userGold").innerHTML = this.gold;
}




//Getter and Setter
//Setter
function setLevel(newLevel){
    this.level = newLevel;
    updateLevelValue();
}

function setAttackDamage(damageValue){
    this.attackDamage = damageValue;
    updateAttackDamage();
}

function setHealthPoints(healthValue){
    this.healthPoints = healthValue;
    updateHealthPoints();
}

function setGold(goldValue){
    this.gold = goldValue;
    updateGoldValue();
}

//Getter
function getLevel(newLevel){
    return this.level;
}

function getAttackDamage(newLevel){
    return this.attackDamage;
}

function getHealthPoints(newLevel){
    return this.healthPoints;
}

function getUserGold(newLevel){
    return this.gold;
}




