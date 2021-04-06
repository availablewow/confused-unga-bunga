var mfb,inviswall,triggerwalls,ctrlstation,
myself,suprisedbull,cowfee,controlIMG,mfbIMG,cowfeeIMG,spawnIMG,riverIMG,roadImg,uphillIMG2,laneIMG,hmIMG,myselfIMG
var ground,prkshbhaiya,prkshbhaiyaIMG,suprisedbullIMGm

var gameState = start;
var start = 0,play =  1,end=2;

function preload(){
//load all the images
controlIMG = loadImage("game img/background imgs/control point.png");
//mfbwalking = loadAnimation("mfb animation/pcs and npcs copy.png,mfb animation/pcs and npcs copy 2.png,mfb animation/pcs and npcs copy 4.png,mfb animation/pcs and npcs copy 5.png")

spawnIMG = loadImage("game img/background imgs/spawnpoint.png");
riverIMG = loadImage("game img/background imgs/river side.png");
roadImg  = loadImage("game img/background imgs/road.png");
uphillIMG = loadImage("game img/background imgs/uphill.png");
uphillIMG2 = loadImage("game img/background imgs/uphill control point.png");
laneImg = loadImage("game img/background imgs/knsmrdni mrg.png");
hmIMG = loadImage("game img/background imgs/hmm.png");
mrkt = loadImage("game img/background imgs/randm mrkt i fnd n  da intrnt.png");

cowfeeIMG = loadImage("game img/pcs and npcs/cowfee.png");
myselfIMG = loadImage("game img/pcs and npcs/meself.png");
prkshbhaiyaIMG = loadImage ("game img/pcs and npcs/prkshbhaiya.png")
suprisedbullIMG = loadImage("game img/pcs and npcs/sprsdbl.png")
mfbIMG = loadImage("game img/pcs and npcs/mfb.png")
}

function setup(){
    //canvas
 createCanvas(displayWidth,displayHeight);
 //mfb=createSprite(WHERE);
 
}

function draw() {

if(gameState === start){
    background("black");
    var heading = createElement("h1");
    heading.html("ADVENTURE SERIES 1");
    heading.position(width/2,100);
    var startButton = createButton("START ADVENTURE");
    startButton.position(width/2,height/2);
    drawSprites();
}

}