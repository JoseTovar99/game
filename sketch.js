'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let partner;
let playerImg
let coinImg
let partnerImg;

function preload(){
  playerImg = loadImage('Hero-1.png.png');
  coinImg = loadImage('New Piskel-1.png.png');
  partnerImg = loadImage('New Piskel-1.png (1).png');
}

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();
  //coins[0] = new Coin();
  coins.push(new Coin());

  partner = new Partner();

}

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
        break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
        break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
          break;
      default:
        break;
  }
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (key = ' ') {
    player.direction = 'still';
  }
}

function keyReleased(){

  if (keyCode == UP_ARROW){
    player.direction = 'still';
    console.log('Up key released');
  } else if (keyCode == DOWN_ARROW){
    player.direction = 'still';
    console.log('Down key released');
  } else if (keyCode == LEFT_ARROW){
    player.direction = 'still';
    console.log('Left key released');
  } else if (keyCode == RIGHT_ARROW){
    player.direction = 'still';
    console.log('Right key released')
  }
}


function title() {

  background(207, 50, 39);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('Defender', w/2, h/5);
  textSize(30);
  text('Use arrow keys to move', w/2, h/2);
  text('Click anywhere to start', w/2, h/1.7);
  textSize(20);
  text('Defend your partner from getting COVID', w/2, h/3)
}

function titleMouseClicked(){
    console.log('canvas is clicked on title page');
    state = 'level 1'
}

function level1() {
  background(232, 179, 56);

  if (random(1) <= 0.01){
    coins.push(new Coin());
  }

  player.display();
  player.move();
  partner.display();

  //using for loop
  for (let i = 0; i < coins.length; i++){
    coins[i].display();
    coins[i].move();
  }

  //using forEach
  // coins.forEach(function(coin){
  //   coin.display();
  //   coin.move();
  // })

  //using for of loop
  // for (let coin of coins){
  //   coin.display();
  //   coin.move();
  // }



  // check for collision, if there is collision then increase point by 1 AND splice that coin out of the array
  for (let i = coins.length - 1; i >= 0; i--){
  if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2){
    points++;
    console.log(points);
    coins.splice(i, 1);
  } else if (coins[i].y > h){
    coins.splice(i, 1)
    console.log('coin is out of town');
  }
}

  text(`points: ${points}`, w / 4, h - 30);

}

function level1MouseClicked(){
//   points++;
//   console.log('points = ' + points);
//
// if (points >= 10) {
//   state = 'you win';
//
// }
}

function youWin(){
  background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('YOU WIN', w/2, h/2);
  textSize(30);
  text('click anywhere to restart', w/2,h * 3/4);

}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;

}
