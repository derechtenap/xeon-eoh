var LINK_TO_GAME_ASSETS = "http://127.0.0.1:5500/frontend/assets/forest.json";
var LINK_TO_ASSETS = "http://127.0.0.1:5500/frontend/assets/";

var ENEMY_ONE_START_HEALTH = 10;
var ENEMY_TWO_START_HEALTH = 10;
var ENEMY_THREE_START_HEALTH = 10;


var healthEnemyOne = 10;
var healthEnemyTwo = 10;
var healthEnemyThree = 10;

const DEATH_CONDITION_ENEMY = 1;

//OnStart
function initalize(){
    loadGameAssets();
    addClickListener();
    initalizeProgressbar();
}
initalize();

//Add click listener to enemy pictures
function addClickListener(){
    document.getElementById("enemyOne").addEventListener("click", dealDamage);
    document.getElementById("enemyTwo").addEventListener("click", dealDamage);
    document.getElementById("enemyThree").addEventListener("click", dealDamage);
}

//set HealthProgressbar
function initalizeProgressbar(){
    var pOne = document.getElementById("progressEnemyOne");
    pOne.value = 100;
    
    var pTwo = document.getElementById("progressEnemyTwo");
    pTwo.value = 100;
    
    var pThree = document.getElementById("progressEnemyThree");
    pThree.value = 100;
}

async function loadGameAssets(){
    var levelAssets = await (await fetch(LINK_TO_GAME_ASSETS)).json();
    loadEnemyAssets(levelAssets.spawnable_enemies);
    console.log(levelAssets);

    //Set enemy container background
    //document.body.style.background = `url(${levelAssets.background_image})`;
    var enemyContainer = document.getElementById("fight-main");
    enemyContainer.style.background = `url(${levelAssets.background_image})`;

    //Set dungeon amount
    var allLevel = document.getElementById("level-count");
    allLevel.innerHTML = levelAssets.dungeon_count;

}

async function loadEnemyAssets(enemyNameArray){
    //console.log(enemyNameArray)
    var enemy = await (await fetch(LINK_TO_ASSETS + enemyNameArray[0] + ".json")).json();

    //Changing the enemy one img for now
    var enemyOnePic = document.getElementById("enemyOne");
    enemyOnePic.src = enemy.tier[0].image;

    console.log(enemy);
}

function dealDamage(event){
    showHitmarker();

     if("enemyOne" == event.target.id){
        if(healthEnemyOne > DEATH_CONDITION_ENEMY){
            healthEnemyOne--;
            updateProgressBar("One", 10);
            console.log(`Enemy One HP: ${healthEnemyOne}`);
        }else{
            console.log(`Enemy One died!`);
            //Delete Image and progressbar
            var img = document.getElementById(event.target.id);
            img.parentNode.removeChild(img);
            var progressbar = document.getElementById("progressEnemyOne");
            progressbar.style.display ="none";
        }   
    }

    if("enemyTwo" == event.target.id){
        if(healthEnemyTwo > DEATH_CONDITION_ENEMY){
            healthEnemyTwo--;
            updateProgressBar("Two", 10);
        }else{
            //Delete Image and progressbar
            var img = document.getElementById(event.target.id);
            img.parentNode.removeChild(img);
            var progressbar = document.getElementById("progressEnemyTwo");
            progressbar.style.display ="none";
        }   
    }

    if("enemyThree" == event.target.id){
        if(healthEnemyThree > DEATH_CONDITION_ENEMY){
            healthEnemyThree--;
            updateProgressBar("Three", 10);
        }else{
            //Delete Image and progressbar
            var img = document.getElementById(event.target.id);
            img.parentNode.removeChild(img);
            var progressbar = document.getElementById("progressEnemyThree");
            progressbar.style.display ="none";
        }   
    }
}


function updateProgressBar(name,damageAmount){
    var bar = document.getElementById("progressEnemy" + name);
    bar.value -= damageAmount;
}


function showHitmarker(){ // Change the cursor as long as mouse is pressed
    window.onmousedown = () =>{
        document.body.style.cursor = "cell";
    }
    window.onmouseup = () =>{
        document.body.style.cursor = "auto";
    }
}