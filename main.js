var playerPos = []
var enemyPos = []
var playerBullets = []
var enemyBullets = []

function setup() {
    createCanvas(600, 400);
    background(0);
    stroke(250, 110, 110)
    line(0, 0, width, height)
    playerPos = [1/2 * width, height - 10]

    
               
}

function draw() {
    background(0);
    getInput();
    playerBullets = moveBullets(playerBullets, -5);
    drawBullets(playerBullets, "blue");
    drawPlayer();
}

//Input Functions 

// Bullet functions

function createBullet(bulletArr, xPos, yPos){
    bulletArr.push([xPos, yPos])
    return bulletArr;
}


function drawBullets (bulletArr, colorString){
    push();
    stroke(colorString);
    strokeWeight(5);

    for (let i=0; i<bulletArr.length; i++){
        point(bulletArr[i][0], bulletArr[i][1]);
    }
    pop()
}

function moveBullets(bulletArr, dy){
    for (i=bulletArr.length - 1; i>=0; i--){
      bulletArr[i][1] += dy; // moves bullets
      //deletes bullets above and below screen
      if (bulletArr[i][1]<0 || bulletArr[i][1] > height){
          bulletArr.splice(i,1);
      }
    }
    return bulletArr;
}


//Player functions
function getInput(){
    var dx = 0;
    var dy = 0;
    var speed = 5;
    if (keyIsDown(LEFT_ARROW)){
        dx = dx - speed;
    }
    if (keyIsDown(RIGHT_ARROW)){
        dx = dx + speed;
    }
    if (keyIsDown(32)){
        playerBullets = createBullet(playerBullets, playerPos[0],
                                 playerPos[1]);
    }
    movePlayer(dx, dy);
}

function movePlayer(dx, dy){
    playerPos[0] = playerPos[0] + dx;
    playerPos[1] = playerPos[1] + dy;
}

function drawPlayer(){
    var size = 20;
    var x = playerPos[0];
    var y = playerPos[1];
    noStroke();
    fill(10,250,200);//rectangle color is teal
    rectMode(CENTER);
    rect(x, y, size, size);
    fill(100,0,100);//triangle color is purple
    triangle(x - size, y + size, x + size, y + size, x + 0, y - size);
}
//Enemy Functions