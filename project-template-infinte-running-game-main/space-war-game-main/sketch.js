

var playerCraftImg,playerCraft;
var enemyImg,enemy,enemyGroup;
var enemy2Img,enemy2,enemy2Group;
var enemy3Img,enemy3,enemy3Group;
var enemy4Img,enemy4,enemy4Group;
var enemy5Img,enemy5,enemy5Group;
var enemy6Img,enemy6,enemy6Group;
var skyImg;


function preload(){
skyImg = loadImage("sky.png")
enemyImg = loadImage("enemy.png")
enemy2Img = loadImage("enemy2.png")
enemy3Img= loadImage("enemy3.png")
enemy4Img = loadImage("enemy4.png")
enemy5Img = loadImage("enemy5.png")
enemy6Img = loadImage("enemy6.png")

};

function setup(){
createCanvas(windowWidth,windowHeight)

angle = -PI / 4;

sky = createSprite(width/2,height/2)
sky = createSprite(600,600)
sky.addImage("sky", skyImg)
sky.velocityY=3




playerCraft = createSprite(700,530,70,80)
playerCraft.addImage("craft", playerCraftImg)
playerCraft.scale=0.2


enemy = createSprite(150,80,0,0)
enemy.addImage("enemy",enemyImg)
enemy.scale=0.3


enemy2 = createSprite(380,80,0,0)
enemy2.addImage("2",enemy2Img)
enemy2.scale= 0.3


enemy3 = createSprite(600,80,0,0)
enemy3.addImage("3",enemy3Img)
enemy3.scale= 0.4


enemy4 = createSprite(800,80,0,0)
enemy4.addImage("4",enemy4Img)
enemy4.scale= 0.2


enemy5 = createSprite(1000,80,0,0)
enemy5.addImage("5",enemy5Img)
enemy5.scale= 0.5


enemy6 = createSprite(1200,80,0,0)
enemy6.addImage("6",enemy6Img)
enemy6.scale= 0.2



};




function draw (){



//code to reset the background
    if(sky.y>400 ){
        sky.y = height/2
      } 

      //edges= createEdgeSprites();
      //playerCraft.collide(edges);

      if(keyDown("left_arrow")|| keyCode ===65){
        playerCraft.x = playerCraft.x - 7;

      
    }
    if(keyDown("right_arrow") ||keyCode === 76){
  
          playerCraft.x = playerCraft.x + 7;
    }

    if(keyDown("down_arrow") ||keyCode === 86){
        playerCraft.velocityY = +10;
  }

    if(keyDown("space") || keyDown("up_arrow") || keyCode === 84){
  
         playerCraft.velocityY = -10;

     
      
    }
      
   // for (var i = 0; i < playerBall.length; i++) {
      //  showplayerBalls(playerBalls[i], i);
    //  }
    

    

drawSprites()



    };

















