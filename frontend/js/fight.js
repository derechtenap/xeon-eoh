var LINK_TO_GAME_ASSETS = "../frontend/assets/forest.json"
var LINK_TO_ASSETS = "../frontend/assets/";

const DEATH_CONDITION_ENEMY = 0;

var enemyOne = {
    startingHealth: 0.0,
    currentHealth: 0.0,
    damage: 0.0,
    healthbarAnchor:"",
    imgAnchor:""
}
var enemyTwo = {
    startingHealth: 0.0,
    currentHealth: 0.0,
    damage: 0.0,
    healthbarAnchor:"",
    imgAnchor:""
}
var enemyThree = {
    startingHealth: 0.0,
    currentHealth: 0.0,
    damage: 0.0,
    healthbarAnchor:"",
    imgAnchor:""
}
//EnemyOne with HTML-Anchors
enemyOne.imgAnchor = document.getElementById("enemyOne");
enemyOne.healthbarAnchor = document.getElementById("progressEnemyOne");

//EnemyTwo with HTML-Anchors
enemyTwo.imgAnchor = document.getElementById("enemyTwo");
enemyTwo.healthbarAnchor = document.getElementById("progressEnemyTwo");

//EnemyThree with HTML-Anchors
enemyThree.imgAnchor = document.getElementById("enemyThree");
enemyThree.healthbarAnchor = document.getElementById("progressEnemyThree");

//OnStart
function initalize(){
    loadGameAssets();
    addClickListener();
    initalizeProgressbar();
}
initalize();

async function loadGameAssets(){
    var levelAssets = await (await fetch(LINK_TO_GAME_ASSETS)).json();
    loadEnemyAssets(levelAssets.spawnable_enemies);

    //Set enemy container background
    var enemyContainer = document.getElementById("fight-main");
    enemyContainer.style.background = `url(${levelAssets.background_image})`;

    //Set dungeon amount
    var allLevel = document.getElementById("level-count");
    allLevel.innerHTML = levelAssets.dungeon_count;

}

async function loadEnemyAssets(enemyNameArray){
    var enemy = await (await fetch(LINK_TO_ASSETS + enemyNameArray[0] + ".json")).json();

    //EnemyOne
    enemyOne.startingHealth = enemy.tier[0].base_hp;
    enemyOne.damage         = enemy.tier[0].base_attack;
    enemyOne.currentHealth  = enemyOne.startingHealth;
    enemyOne.imgAnchor.src = enemy.tier[0].image;

    //EnemyTwo
    enemyTwo.startingHealth = enemy.tier[0].base_hp;
    enemyTwo.damage         = enemy.tier[0].base_attack;
    enemyTwo.currentHealth  = enemyTwo.startingHealth;
    enemyTwo.imgAnchor.src = enemy.tier[0].image;

    //EnemyThree
    enemyThree.startingHealth = enemy.tier[0].base_hp;
    enemyThree.damage         = enemy.tier[0].base_attack;
    enemyThree.currentHealth  = enemyThree.startingHealth;
    enemyThree.imgAnchor.src = enemy.tier[0].image;
}

//Add click listener to enemy pictures
function addClickListener(){
    enemyOne.imgAnchor.addEventListener("click", dealDamage);
    enemyTwo.imgAnchor.addEventListener("click", dealDamage);
    enemyThree.imgAnchor.addEventListener("click", dealDamage);
}

//set HealthProgressbar
function initalizeProgressbar(){
    enemyOne.healthbarAnchor.value = 100;
    enemyTwo.healthbarAnchor.value = 100;
    enemyThree.healthbarAnchor.value = 100;
}

function dealDamage(event){
    showHitmarker();

   if("enemyOne" == event.target.id){
       if((enemyOne.currentHealth - enemyOne.damage) > DEATH_CONDITION_ENEMY){
            enemyOne.currentHealth -= enemyOne.damage;
            enemyOne.healthbarAnchor.value = calculateHealthBarValue(enemyOne, enemyOne);
       }
       else{
        //Delete Image and progressbar
        enemyOne.imgAnchor.style.display = "none";
        enemyOne.healthbarAnchor.style.display = "none";        
       }
   }
   else if("enemyTwo" == event.target.id){
        if((enemyTwo.currentHealth - enemyTwo.damage) > DEATH_CONDITION_ENEMY){
            enemyTwo.currentHealth -= enemyTwo.damage;
            enemyTwo.healthbarAnchor.value = calculateHealthBarValue(enemyTwo, enemyTwo);
        }
        else{
        //Delete Image and progressbar
        enemyTwo.imgAnchor.style.display = "none";
        enemyTwo.healthbarAnchor.style.display = "none";        
        }
    }
    else if("enemyThree" == event.target.id){
        if((enemyThree.currentHealth - enemyThree.damage) > DEATH_CONDITION_ENEMY){
            enemyThree.currentHealth -= enemyThree.damage;
            enemyThree.healthbarAnchor.value = calculateHealthBarValue(enemyThree, enemyThree);
        }
        else{
        //Delete Image and progressbar
        enemyThree.imgAnchor.style.display = "none";
        enemyThree.healthbarAnchor.style.display = "none";        
        }
    }
}

function calculateHealthBarValue(player, enemy){
    var damageInPercent = (enemy.damage / enemy.startingHealth) * 100;
    healthBarValue = enemy.healthbarAnchor.value - damageInPercent;

    return healthBarValue;
}

function showHitmarker(){
    window.onmousedown = () =>{
        document.body.style.cursor = "cell";
    }
    window.onmouseup = () =>{
        document.body.style.cursor = "auto";
    }
}
