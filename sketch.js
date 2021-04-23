// loading the images and the sounds.
function preload(){
    wallPaperImg = loadImage("finishedImages/wallpaper.png");
    groundImg = loadImage("finishedImages/ground.png");
    cloud1Img = loadImage("finishedImages/cloud1.png");
    cloud2Img = loadImage("finishedImages/cloud2.png");
    cloud3Img = loadImage("finishedImages/cloud3.png");
    mountain1Img = loadImage("finishedImages/mountain1.png");
    mountain2Img = loadImage("finishedImages/mountain2.png");
   superMarioAnime = loadAnimation("MarioImages/mario1.png", "MarioImages/mario2.png", 
   "MarioImages/mario3.png", "MarioImages/mario4.png", )
    bar1Img = loadImage("finishedImages/bar1.png");
    bar2Img = loadImage("finishedImages/bar2.png");
    rod1Img = loadImage("finishedImages/rod1.png");
    rod2Img = loadImage("finishedImages/rod2.png");
    squidAnime = loadAnimation("ObstacleImages/squid1.png", "ObstacleImages/squid2.png");
    fireBallAnime = loadAnimation("ObstacleImages/fireBall1.png", "ObstacleImages/fireBall2.png", 
    "ObstacleImages/fireBall3.png", "ObstacleImages/fireBall4.png");
    spinyAnimalAnime = loadAnimation("ObstacleImages/spinyAnimal1.png", 
    "ObstacleImages/spinyAnimal2.png");
    goombaAnime = loadAnimation("ObstacleImages/goomba1.png", "ObstacleImages/goomba1.png");
    starAnime = loadAnimation("powerUps/star1.png", "powerUps/star2.png", "powerUps/star3.png", 
    "powerUps/star4.png");
    coinsAnime = loadAnimation("powerUps/coin1.png", "powerUps/coin1.png");
    gameOverImg = loadImage("conditionImages/gameOver.png");
    restartImg = loadImage("conditionImages/restart.png");
    coinSound = loadSound("Sounds/coin.mp3");
    gameOverSound = loadSound("Sounds/gameOver.mp3");
    jumpSound = loadSound("Sounds/jump.mp3");
    powerUpSound = loadSound("Sounds/powerUp.mp3");
    kickSound = loadSound("Sounds/kick.mp3");
    marioDies = loadSound("Sounds/marioDies.mp3");
}

function setup(){

    // creating the canvas
    createCanvas(1000,600);

    // creating the gamestates.
    gameState = 0;

    // creating the intro part
    wallpaper = createSprite(width/2, height/2, width, height);
    wallpaper.addImage(wallPaperImg);
    wallpaper.scale = 0.4;

    // creating the ground.
    ground = createSprite(width/2, 550, 10, 10);
    ground.addImage(groundImg);
    ground.scaleX = 0.9;
    ground.scaleY = 0.2;

    // creating the super mario
    superMario = createSprite(100, 550, 10, 10);
    superMario.addAnimation("animation",superMarioAnime);
    superMario.scale = 4;
    superMario.setCollider("rectangle", 0, 0, 15, 27);

    // creating the necessary groups.
    bar1Group = new Group();
    bar2Group = new Group();
    rod1Group = new Group();
    rod2Group = new Group();
    squidGroup = new Group();
    fireBallGroup = new Group();
    spinyAnimalGroup = new Group();
    goombaGroup = new Group();
    piranhaPlantGroup = new Group();
    starGroup = new Group();
    coinsGroup = new Group();

    //creating the necessary scores.
    enemiesKilled = 0;
    coinsCollected = 0;
}

function draw(){

    // creating the nackground for the intro part.
    background(0);

    // defining the gameStates.
    if(gameState === 0){

        // making the ground and super mario false visibility
        ground.visible = false;
        superMario.visible = false;
    
        // writing the necessary text.
        textSize(30);
        textFont("georgia");
        fill("yellow");
        text("Welcome to the Classic Super Mario Game", 230, 40); 

        textSize(30);
        textFont("georgia");
        fill("yellow");
        text("Press space to start the game !!", 330, 585); 
    }

    // gameState conversion
    if(keyDown("space") && gameState === 0){
        gameState = 1;
    }

    // defining the gameState 1.
    if(gameState === 1){

        wallpaper.destroy();

        textSize(30);
        textFont("georgia");
        fill("yellow");
        text("The rules of the game are as follows :-", 50, 50); 

        textSize(30);
        textFont("georgia");
        fill("yellow");
        text("1) There will be a super mario for the game.", 50, 100); 

        textSize(30);
        textFont("georgia");
        fill("yellow");
        text("2) Use the up and the left arrow key to control the super mario.", 50, 150); 

        textSize(30);
        textFont("georgia");
        fill("yellow");
        text("3) Beware from all the enemies and kill all the enemies if possible.", 50, 200); 

        textSize(30);
        textFont("georgia");
        fill("yellow");
        text("4) Dodge from all kind of obstacles (fireshots and the spiny animal).", 50, 250); 

        textSize(30);
        textFont("georgia");
        fill("yellow");
        text("5) Collect as many coins as possible. ", 50, 300); 

        textSize(30);
        textFont("georgia");
        fill("yellow");
        text("6) Stay within the screen for as much time as possible.", 50, 350);

        textSize(50);
        textFont("georgia");
        fill("yellow");
        text("ALL THE BEST FOR THE GAME !!", 130, 480); 

        textSize(30);
        textFont("georgia");
        fill("yellow");
        text("Press the left arrow key to start the super mario's journey.", 130, 550); 

    }

    // gameState conversion
    if(gameState === 1 && keyDown(LEFT_ARROW)){
        gameState = 2;
    }

  // defining the gameState play
    if(gameState === 2){

        // making the background as blue.
        background(92,148,252);

        // making the super mario collide with necessary items.
        superMario.collide(ground);
        
        // making the background to be movable.
        // making the cloud1.
        if(frameCount % 50 === 0){
            var cloud1 = createSprite(1010, random(50,150), 10, 10);
            cloud1.velocityX = -9;
            cloud1.addImage(cloud1Img);
            cloud1.scale = 1.7;
            cloud1.lifetime = 200;
        }

        // making the cloud2.
        if(frameCount % 60 === 0){
            var cloud2 = createSprite(1010, random(50,150), 10, 10);
            cloud2.velocityX = -9;
            cloud2.addImage(cloud2Img);
            cloud2.scale = 1.7;
            cloud2.lifetime = 200;
        }

        // making the cloud3.
        if(frameCount % 70 === 0){
            var cloud3 = createSprite(1010, random(50,150), 10, 10);
            cloud3.velocityX = -9;
            cloud3.addImage(cloud3Img);
            cloud3.scale = 1.7;
            cloud3.lifetime = 200;
        }

        // making the mountain1
        if(frameCount % 100 === 0){
            var mountain1 = createSprite(1010, 470, 10, 10);
            mountain1.velocityX = -9;
            mountain1.collide(ground);
            mountain1.addImage(mountain1Img);
            mountain1.scale = 1.7;
            mountain1.lifetime = 200;
        }

        // making the mountain1
        if(frameCount % 80 === 0){
            var mountain2 = createSprite(1010, 460, 10, 10);
            mountain2.velocityX = -9;
            mountain2.collide(ground);
            mountain2.addImage(mountain2Img);
            mountain2.scale = 1.7;
            mountain2.lifetime = 200;
        }

        // making the things from which super mario should collide.
        // making the bar1.
        if(frameCount % 180 === 0){
            var bar1 = createSprite(1010, random(160,350), 10, 10);
            bar1.velocityX = -9
            bar1.addImage(bar1Img);
            bar1.scale = 3;
            bar1.lifetime = 200;
            bar1.setCollider("rectangle", 0, 0, 50, 5);
            bar1Group.add(bar1);
        }

        // creating the rod1
        if(frameCount % 233 === 0){
            var rod1 = createSprite(1010, 440, 10, 10);
            rod1.velocityX = -9
            rod1.addImage(rod1Img);
            rod1.scale = 3;
            rod1.lifetime = 200;
            rod1.depth = rod1.depth + 1;
            rod1.setCollider("rectangle", 0, 0, 30, 30);
            rod1Group.add(rod1);
        }

        // creating the rod2
        if(frameCount % 150 === 0){
            var rod2 = createSprite(1010, 440, 10, 10);
            rod2.velocityX = -9
            rod2.addImage(rod2Img);
            rod2.scale = 3;
            rod2.lifetime = 200;
            rod2.depth = rod2.depth + 1;
            rod2.setCollider("rectangle", 0, 0, 30, 30);
            rod2Group.add(rod2);
        }

        // making the bar1.
        if(frameCount % 230 === 0){
            var bar2 = createSprite(1010, random(160,350), 10, 10);
            bar2.velocityX = -9
            bar2.addImage(bar2Img);
            bar2.scale = 3;
            bar2.setCollider("rectangle", 0, 0, 20, 5);
            bar2.lifetime = 200;
            bar2Group.add(bar2);
        }

        // making the obstacles.
        // making the squids
        if(frameCount % 340 === 0){
            var squid = createSprite(1010, random(200,450), 10, 10);
            squid.velocityX = -9
            squid.addAnimation("animation",squidAnime);
            squid.scale = 3;
            squid.setCollider("rectangle", 0, -10, 15, 10);
            squid.lifetime = 200;
            squidGroup.add(squid);
        }

        // making the random fireballs
        if(frameCount % 390 === 0){
            var fireBall = createSprite(1010, random(200,325), 10, 10);
            fireBall.velocityX = -9
            fireBall.addAnimation("animation",fireBallAnime);
            fireBall.scale = 3;
            fireBall.setCollider("circle", 0, 0, 3);
            fireBall.lifetime = 200;
            fireBallGroup.add(fireBall);
        }

        // making the spinyAnimal.
        if(frameCount % 440 === 0){
            var spinyAnimal = createSprite(1010, 480, 10, 10);
            spinyAnimal.velocityX = -9
            spinyAnimal.addAnimation("animation",spinyAnimalAnime);
            spinyAnimal.scale = 3;
            spinyAnimal.setCollider("rectangle", 0, 0, 15, 10);
            spinyAnimal.lifetime = 200;
            spinyAnimalGroup.add(spinyAnimal);
        }

        // making the goomba.
        if(frameCount % 120 === 0){
            var goomba = createSprite(1010, 465, 10, 10);
            goomba.velocityX = -9
            goomba.addAnimation("animation",goombaAnime);
            goomba.scale = 4;
            goomba.setCollider("rectangle", 0, -10, 20, 5);
            goomba.lifetime = 200;
            goombaGroup.add(goomba);
        }

        // making the power ups for super mario. 
        // making the star power ups.
        if(frameCount %  100 === 0){
            var star = createSprite(1010, random(150, 330), 10, 10);
            star.velocityX = -9
            star.addAnimation("animation",starAnime);
            star.scale = 3;
            star.setCollider("rectangle", 0, 0, 10, 10);
            star.lifetime = 200;
            starGroup.add(star);
        }

        // making the coins
        if(frameCount % 197 === 0){
            var coins = createSprite(1010, random(150, 330), 10, 10);
            coins.velocityX = -9
            coins.addAnimation("animation",coinsAnime);
            coins.scale = 3;
            coins.setCollider("rectangle", 0, 0, 10, 12);
            coins.lifetime = 200;
            coinsGroup.add(coins);
        }    

        // making the super mario and the ground to be visible
        superMario.visible = true;
        ground.visible = true;
        
        // making the super mrio to be visible at any cost.
       superMario.depth = superMario.depth + 1;

       // allowing the user to stay in the game
       if(keyDown(RIGHT_ARROW)){
        superMario.velocityX = superMario.velocityX + 3;
       }
       if(keyWentUp(RIGHT_ARROW)){
        superMario.velocityX = 0;
       }

       // making the sound effects to happen.
       if(superMario.isTouching(coinsGroup)){
        coinSound.play();
       }

       if(superMario.isTouching(starGroup)){
        powerUpSound.play();
       }

       // making the super mario collide with necessary items.
       superMario.collide(ground);
       superMario.collide(bar1Group);
       superMario.collide(bar2Group);
       superMario.collide(rod1Group);
       superMario.collide(rod2Group);

       // creating the necessary scores : enemies killed and the coins collected.
       // scores for coins collected
       textSize(30);
       fill("darkBlue");
       textFont("Georgia");
       text("Enemies Killed = " + enemiesKilled, 700, 30);

       // for enemies killed.
       textSize(30);
       fill("darkBlue");
       textFont("Georgia");
       text("Coins Collected = " + coinsCollected, 10, 30);

       // making the coins to be collected.
       if(superMario.isTouching(coinsGroup)){
        coinsCollected = coinsCollected + 1;
        coinsGroup.destroyEach();
       }

       // ncreasing the size of super Mario.
       if(superMario.isTouching(starGroup)){
         superMario.scale = superMario.scale + 0.01;
         starGroup.destroyEach();
       }

       // making the enemies to be killed 
       // for the squids.
       if(superMario.isTouching(squidGroup)){
        squidGroup.destroyEach();
        enemiesKilled = enemiesKilled + 1;
        kickSound.play();
       }

       // for the fireballs
       if(fireBallGroup.isTouching(superMario)){
        superMario.visible = false;
        fireBallGroup.destroyEach();
        gameState = 3;
        gameOverSound.play();
       }

       // for the goomba
       if(superMario.isTouching(goombaGroup)){
        goombaGroup.destroyEach();
        enemiesKilled = enemiesKilled + 1;
        kickSound.play();
       }

       // for the spiny animal.
       if(superMario.isTouching(spinyAnimalGroup)){
        superMario.visible = false;
        spinyAnimalGroup.destroyEach();
        gameState = 3;
        gameOverSound.play();
       }

       // making the super mario to jump
       if(keyWentUp(UP_ARROW)){
        superMario.velocityY = -15;
        jumpSound.play();
       }
       superMario.velocityY  = superMario.velocityY + 0.8;
    }

    // defining the gameState 3.
    if(gameState === 3){

        // creating the gameOver variable
        var gameOver = createSprite(width/2, height/2 - 200, width, height);
        gameOver.addImage(gameOverImg);
        gameOver.scale = 0.2;
        ground.visible = false;
        gameOver.depth = gameOver.depth + 1;

        // creating the necessary text.
       textSize(30);
       fill("lightBlue");
       textFont("Georgia");
       text("YOUR SCORE :-", 400, 250);

       textSize(30);
       fill("yellow");
       textFont("Georgia");
       text("Enemies Killed = " + enemiesKilled, 380, 300);

       textSize(30);
       fill("yellow");
       textFont("Georgia");
       text("Coins Collected = " + coinsCollected, 380, 350);

       textSize(50);
       fill(123,214,10);
       textFont("Georgia");
       text("Excellent !!", 380, 500);

    }

    // creating the sprites.
    drawSprites();
}