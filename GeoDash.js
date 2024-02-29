/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 500;
const SCREEN_HEIGHT = 200;
const PLAYER_HEIGHT = 25;
const PLAYER_WIDTH = 25;


const OBSTACLE_HEIGHT = PLAYER_HEIGHT;
const OBSTACLE_WIDTH = PLAYER_WIDTH;


var obstacles;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv= new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    
    player = new Sprite(PLAYER_WIDTH*1.2,  SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
    player.color = color("purple");
    
    obstacle = new Sprite(SCREEN_WIDTH-100,  SCREEN_HEIGHT - OBSTACLE_HEIGHT/2, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k');
    obstacle.color = color("blue");
    obstacle.vel.x = -10;
    
    obstacles = new Group();
    obstacles.add(obstacle)
    
    floor =  new Sprite(SCREEN_WIDTH/2,  SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
    floor.color = color("black");
    world.gravity.y = 80;
    
    document.addEventListener("keydown", 
        function(event) {
            console.log("Key pressed!"+player.y);

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
  background('lightblue');
  newObstacle();
}
function newObstacle(){
    obstacle = new Sprite(SCREEN_WIDTH-100,  SCREEN_HEIGHT - OBSTACLE_HEIGHT/2, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k');
    obstacle.color = color("blue");
    obstacle.vel.x = -10;
}

function youDead(_player, _obstacle){
    console.log("YouDied")
}
/*******************************************************/
//  END OF APP
/*******************************************************/
