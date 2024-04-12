//used the starter p5play code.
//used the p5play tutorial

//intial varibles. 
let player;
let fiends;
let food;
let gems;
let score = 0;
let counter = 0;
let approach = 0;
let bloat = 0;

function setup() {
  // creates a canvas that fills the screen
  new Canvas();
  //initial varibles


//food sprite
//random code from p5play learn
food = new Group();
// Create multiple food sprites and add them to the food group
for (let i = 0; i < 10; i++) {
  let singleFood = createSprite(random(0, width), random(0, height));
  singleFood.addImage(loadImage("assets/food.png")); // Assuming p5.play's loadImage() function is available
  singleFood.scale = 0.5; // Example scaling, adjust as needed
  food.add(singleFood);
}
food.d = 10;
food.x = () => random(0, canvas.w);
food.y = () => random(0, canvas.h);
food.amount = 10;

//monster sprite
monster = new Sprite();
monster.x = 50;
monster.y = 50;
monster.img= 'assets/monster.png';
monster.scale = 0.8;
monster.color = color(255,0,0);
monster.stroke = color(0,0,0,0);
monster.width= 40;
monster.height = 40;
monster.overlaps(food);
monster.vel.y = 1;

//fiend sprite
fiend = new Sprite();
fiend.x = 50;
fiend.y = 50;
fiend.img = 'assets/fiend.png';
fiend.width = 60;
fiend.height = 60;
fiend.overlaps(monster);
fiend.overlaps(food);

//player sprite
player = new Sprite();
player.color = 'orange';
player.stroke = color(0,0,0,0);
player.img = 'assets/player.png';
player.scale = 0.5;
player.width = 30;
player.height = 30;
//calls functions nom and lose
player.overlaps(food,nom);
player.overlaps(monster,lose);
player.overlaps(fiend,lose);
}

//when the player touches food: removes food and increases the score and counter
function nom(player,food) {
  food.remove();
  score++;
  counter++;
  approach++;
}
//when the player touches monster: remove the player and destory the world
function lose() {
  player.remove();
  world.gravity.y = 7;
}

function draw() { 
//clear
  clear();

//variables



//background color
background(color(0,0,50));

//text to display score
textSize(18);
fill(255);
text(score, 50, 50);
//counter resets at 10, counted the same as score.
if (counter === 10) {
counter = 0;

bloat++;

for(let i=0; i < 10; i++){
let fod = new food.Sprite();
}
}

//Fiend code

fiend.direction = fiend.angleTo(player);
fiend.speed = 2;

//Monster code

  monster.attractTo(player, 60);
  monster.direction - monster.angleTo(player);


 // Update monster position based on window boundaries //chatgpt
 if (monster.position.x < 0) {
  monster.position.x = 0;
} else if (monster.position.x > width) {
  monster.position.x = width;
}
if (monster.position.y < 0) {
  monster.position.y = 0;
} else if (monster.position.y > height) {
  monster.position.y = height;
}

if (player.position.x < 0) {
  player.position.x = 0;
} else if (player.position.x > width) {
  player.position.x = width;
}
if (player.position.y < 0) {
  player.position.y = 0;
} else if (player.position.y > height) {
  player.position.y = height;
}


//controls for the player
//horizontal movement
  if (kb.pressing('a')) player.vel.x = -5;
  else if (kb.pressing('d')) player.vel.x = 5;
  else player.vel.x = 0;
//vertical movement
  if(kb.pressing('w')) player.vel.y = -5;
  else if (kb.pressing('s')) player.vel.y = 5;
  else player.vel.y = 0;

  
  
  
}


