var spaceStationImg,spaceShip01Img,dockingImg,backgroundImg,spaceShip02Img,spaceShip03Img,spaceShip04Img;
var iss,spaceCraft,hasDocked


function preload(){
spaceStationImg=loadImage("Docking-undocking/iss.png")
spaceShip01Img=loadImage("Docking-undocking/spacecraft1.png");
spaceShip02Img=loadImage("Docking-undocking/spacecraft2.png");
spaceShip03Img=loadImage("Docking-undocking/spacecraft3.png");
spaceShip04Img=loadImage("Docking-undocking/spacecraft4.png");
backgroundImg=loadImage("Docking-undocking/spacebg.jpg")



}
function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(spaceStationImg);
  iss.scale=0.6;

  spaceCraft=createSprite(400,300,50,50);
  spaceCraft.addImage(spaceShip01Img);
  spaceCraft.scale=0.2
}

function draw() {
  background(backgroundImg);
  
  if(!hasDocked){

    spaceCraft.x=spaceCraft.x+random(-1,1)

    
  }
  


  if(keyDown("LEFT_ARROW")){

    spaceCraft.x=spaceCraft.x-1


    spaceCraft.addImage(spaceShip04Img)
  }
  if(keyDown("RIGHT_ARROW")){

    spaceCraft.x=spaceCraft.x+1
 
    spaceCraft.addImage(spaceShip03Img)
  }
  if(keyDown("DOWN_ARROW")){

    spaceCraft.y=spaceCraft.y+1

    spaceCraft.addImage(spaceShip01Img)

  }
  if(keyDown("UP_ARROW")){

    spaceCraft.y=spaceCraft.y-1

    spaceCraft.addImage(spaceShip02Img)

  }


  if( spaceCraft.x<=(iss.x-10)&&spaceCraft.y<=(iss.y+70)){
     fill("red");
     textSize(20)
     text("SpaceCraft Has Docked Successfully",100,100)

     hasDocked=true;
  }

  console.log(spaceCraft.x+" "+spaceCraft.y)
  drawSprites();
}


