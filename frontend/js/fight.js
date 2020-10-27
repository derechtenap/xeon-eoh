var ENEMY_ONE_START_HEALTH = 10;
var ENEMY_TWO_START_HEALTH = 10;
var ENEMY_THREE_START_HEALTH = 10;


var healthEnemyOne = 10;
var healthEnemyTwo = 10;
var healthEnemyThree = 10;

const DEATH_CONDITION_ENEMY = 1;

//OnStart
function initalize(){
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