/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 500;
const SCREEN_HEIGHT = 400;
const PLAYER_HEIGHT = 25;
const PLAYER_WIDTH = 25;


const OBSTACLE_HEIGHT = PLAYER_HEIGHT;
const OBSTACLE_WIDTH = PLAYER_WIDTH;
var  spawnDist = 0+1;
var nextSpawn = 0;
var score = 0;
  
var screenSelector = "start";  

var obstacles;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv= new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    player = new Sprite(PLAYER_WIDTH*1.2,  SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
    player.color = color("purple");
    
    obstacles = new Group();

    floor =  new Sprite(SCREEN_WIDTH/2,  SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
    floor.color = color("black");
    world.gravity.y = 80;
    
    document.addEventListener("keydown", 
        function(event) {
            console.log("Key pressed!"+player.y);
            screenSelector = "game"
            if(player.y > 184 ){// 184 - found from testing - floor level
                console.log("Key pressed!");
                player.vel.y = -20;
            }
    });

    player.collides(obstacles, youDead);
    
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
 if(screenSelector=="game"){
    gameScreen();
 }else if(screenSelector=="end"){
     endScreen();
 }else if(screenSelector=="start"){
     startScreen();
 }else{
         text("wrong screen - you shouldnt get here", 50, 50);
console.log("wrong screen - you shouldnt get here")
 }
}

function newObstacle(){

    obstacle = new Sprite((SCREEN_WIDTH -100),  SCREEN_HEIGHT - OBSTACLE_HEIGHT/2, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k');
    obstacle.color = color("yellow");
    obstacle.vel.x = -10;
    
    obstacles.add(obstacle);
}
function youDead(_player, _obstacle){
screenSelector = "end";    
}

// Main screen functions

function startScreen(){
    console.log("Start screen")
    background("white");

    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(3);
    text("Welcome to the game", 50, 50);
    textSize(24);
    text("Press any key to start", 50, 110);
}

function gameScreen(){
    background("lightblue");
    allSprites.visible = true;
    score++;
    if(frameCount> nextSpawn){
        newObstacle();
        nextSpawn = frameCount + random(10,100);
    }
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(3);
    text(score, 50, 50);
}

function endScreen(){
    console.log("End screen")
    background("white");

    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(3);
    text("You died! Too bad :-(", 50, 50);
    textSize(24);
    text("your score was: "+score, 50, 110);
    textSize(14);
}

function restGame(){
    player.x = PLAYER_WIDTH*1.2
    player.y =   SCREEN_HEIGHT/2
    score = 0;
}



/*******************************************************/
//  END OF APP
/*******************************************************/
