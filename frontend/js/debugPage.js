var healthEnemyOne = 10;
const DEATH_CONDITION = 1;

window.onload = () => {
    console.log(`Enemy One HP: ${healthEnemyOne}`); 
}

function dealDamage(event){
    showHitmarker();
     if("enemyOnePic" == event.target.id){
        if(healthEnemyOne > DEATH_CONDITION){
            healthEnemyOne--;
            console.log(`Enemy One HP: ${healthEnemyOne}`);
        }else{
            console.log(`Enemy One died!`);
            //Delete Image and Text
            var img = document.getElementById(event.target.id);
            var description = document.getElementById("enemyOne")
            img.parentNode.removeChild(img);
            description.parentNode.removeChild(description);
        }   
    }
}

function showHitmarker(){ // Change the cursor as long as mouse is pressed
    window.onmousedown = () =>{
        document.body.style.cursor = "cell";
    }
    window.onmouseup = () =>{
        document.body.style.cursor = "auto";
    }
}