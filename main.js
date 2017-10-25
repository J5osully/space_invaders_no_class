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

    playerBullets = createBullet(playerBullets, playerPos[0],
                                 playerPos[1]);
    drawBullets(playerBullets, "blue");           
}

function draw() {

}

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