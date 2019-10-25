var hypnoticBall, database;
var position;
var player,gameState = 0,playerCount = 0,form,game;
var allPlayer;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new GAME();
  game.getState();
  game.start();  
}

function draw(){
  background("white");
  if (playerCount===4){
    game.update(1);
  }
  if (gameState === 1){
    clear();
    game.play();
  }
    drawSprites();
  
}