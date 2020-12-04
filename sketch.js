const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var Players;
var box,box_img;
var score = 0
var robot,robot_img;
var backgr;
var enemies;
function preload()  {

    background_img = loadImage("Background.jpg")

    player_img = loadAnimation("PC/PC1.gif","PC/PC2.gif","PC/PC3.gif","PC/PC4.gif","PC/PC5.gif","PC/PC6.gif","PC/PC7.gif")

    box_img = loadImage("NPC/boxes.png");

    robot_img = loadAnimation("NPC/0.gif","NPC/1.gif","NPC/2.gif","NPC/3.gif","NPC/4.gif","NPC/5.gif","NPC/6.gif","NPC/7.gif","NPC/8.gif","NPC/9.gif","NPC/10.gif","NPC/11.gif")

    cloud1_img = loadImage("cloud1.png")
    cloud2_img = loadImage("cloud2.png")
    cloud3_img = loadImage("cloud3.png")

    enemy_img = loadAnimation("NPC/a.gif","NPC/b.gif","NPC/c.gif","NPC/d.gif","NPC/e.gif","NPC/f.gif","NPC/g.gif","NPC/h.gif","NPC/i.gif","NPC/j.gif")
    
}

function setup()  {
    createCanvas(750,400);

    backgr = createSprite(400,200)
    backgr.addImage(background_img)
    
    ground = createSprite(400,380,800,40)
    ground.shapeColor = 119,77,43

    player = createSprite(50,320,20,20)
    player.addAnimation("running",player_img)
    player.scale = 0.3
    

}


function draw()  {
    background(175)    
    player.collide(ground)
    spawnBoxes();
    //score = Math.round(score+getFrameRate()/60)
    if(frameCount%10===0)  {
        score = score+1

    }
   spawnEnemies();
    if(score>100)  {
        spawnRobots();

    }
    
    
    spawnClouds();
    drawSprites();
    textSize(25)
    fill("red")
    text("Score: "+score,600,50)
}

function spawnBoxes()  {
    if(frameCount%200===0)  {
        box = createSprite(800,320,20,20)
        box.addImage(box_img)
        box.velocityX = -4;
        box.scale = 0.3
        box.lifetime = 200
    }

}

function spawnRobots()  {
    if(frameCount%300===0)  {
        robot = createSprite(800,325,20,20)
        robot.addAnimation("robot",robot_img)
        robot.velocityX = -4
        robot.scale = 0.4
        robot.lifetime = 200
    }

}

function spawnClouds()  {
    if(frameCount%100===0)  {
        cloud = createSprite(800,random(50,150),20,20)
        var rand = Math.round(random(1,3))
        switch(rand)  {
            case 1: cloud.addImage(cloud1_img)
            break;
            case 2: cloud.addImage(cloud2_img)
            break;
            case 3: cloud.addImage(cloud3_img)
            default:
            break;
            
        }
        cloud.velocityX = -4
        cloud.scale = 0.2
        cloud.lifetime = 200
    }

}

function spawnEnemies()  {
    if(frameCount%300===0)  {
        enemies = createSprite(800,303,20,20)
        enemies.addAnimation("Enemies",enemy_img)
        enemies.velocityX = -4
        enemies.scale = 0.6
        enemies.lifetime = 200
    }

}