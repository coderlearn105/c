

var ball;


function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor="red";
}

function draw(){
background("black");

    if(keyDown(LEFT_ARROW)){
        changePosition(-3,0);
    }

    if(keyDown(RIGHT_ARROW)){
        changePosition(3, 0);
    }

    if(keyDown(UP_ARROW)){
        changePosition(0, -3);
    }

    if(keyDown(DOWN_ARROW)){
        changePosition(0, 3);
    }

drawSprites();

}

function changePosition(a,b){
    ball.x = ball.x+a; // a = +2, -2
    ball.y=ball.y+b; // b = +2, -2

}