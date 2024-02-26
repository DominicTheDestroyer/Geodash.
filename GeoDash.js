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

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  cnv = new Canvas( SCREEN_WIDTH, SCREEN_HEIGHT);
  player = new Sprite(40, 40, 40, 40, 'd');
  player.color = color('purple');
  floor = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
  floor.color = color('black');
  world.gravity.y = 10;
  document.addEventListener('keydown',
    function(event){
        console.log('Key pressed');
        if (event.code === 'ArrowLeft') {
        }else {
    }
    });
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background('lightblue');
  
  
}

/*******************************************************/
//  END OF APP
/*******************************************************/
