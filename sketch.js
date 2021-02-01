var box
var blueBlock;
var yellowBlock;
var purpleBlock;
var greenBlock;
var canvas;
var music;
var topEdge;
var rightEdge;
var leftEdge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    topEdge = createSprite(400,0,800,20)
    rightEdge = createSprite(800,300,20,600) 
    leftEdge = createSprite(0,300,20,600) 
    canvas = createCanvas(800,600);
    box = createSprite(random(20,750),200,50,50);
    box.shapeColor = "white";
    box.velocityX = 4
    box.velocityY = 8
    blueBlock = createSprite(100,550,180,20)
    blueBlock.shapeColor = "blue"
    yellowBlock = createSprite(300,550,180,20)
    yellowBlock.shapeColor = "yellow" 
    purpleBlock = createSprite(500,550,180,20)
    purpleBlock.shapeColor = "purple"
    greenBlock = createSprite(700,550,180,20)
    greenBlock.shapeColor = "green"

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
if(blueBlock.isTouching(box)){
    bounceOff();
     music.play();
    box.shapeColor = "blue"
    }
    if(purpleBlock.isTouching(box)){
        bounceOff();
        box.shapeColor = "purple"
        }
        if(greenBlock.isTouching(box)){
            bounceOff();
            box.shapeColor = "green"
            }    
          

if(yellowBlock.isTouching(box)){
     box.shapeColor = "yellow"
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
}          
box.bounceOff(rightEdge);
box.bounceOff(leftEdge)
box.bounceOff(topEdge)
drawSprites();
        }
    //add condition to check if box touching surface and make it box