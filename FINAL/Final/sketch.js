var tickle;
var nightSound;
var daySound;

var playNight = false;
var stopNight = true;
var playDay = false;
var stopDay = true;

var imgMove;

var dot = [];

var moveX = 0;
var moveY = 0;

var mapX = 0;
var mapY = 0;

var center = 250;

var currentType = "";

var musicPlay = true;

function preload (){
    img0 = loadImage("assets/front.png");
    img1 = loadImage("assets/monster.png");
    img2 = loadImage("assets/middle.png");
    img3 = loadImage("assets/back.png");
    img4 = loadImage("assets/day.png");
    img5 = loadImage("assets/night.png");
    
    
      // Load the sound file.
    soundFormats('mp3');
    tickle = loadSound('assets/tickle.mp3');
    soundFormats('wav');
    nightSound = loadSound('assets/night.wav');
    daySound = loadSound('assets/day.wav');
}

function setup() {
    createCanvas(600, 600);



    dot = new Dot(50, 570, 20, "red");
    dot1 = new Dot(150, 570, 20, "blue");
    dot2 = new Dot (250,570,20,"yellow");

    max_distance = dist(0, 0, width, height);
    
}

function draw() {
    
//  
//    background(255);
//    fill(204, 120);
//    rect(0, 0, width, height);
    
//       if (dot1.contains(mouseX,mouseY)) {
//        image(img5,0,0,img5.width,img5.height);
//        playNight = true;
//           
//    }else{
//        tint(255,120);
//        image(img4,0,0,img4.width,img4.height);  
//        stopNight = true;
//       }
//
//    if (playNight == true){
//    playNight = false;
//    stopNight = false;    
//    nightSound.play();    
//    }
//    
//    if (stopNight == true){
//    playNight = false;
//        stopNight = false;
//        nightSound.stop();
//    }
    
    //BACKGROUND
//    tint(255,120);
//    image(img4,0,0,img4.width,img4.height);  
    tint(255,150);
    image(img3, 0,0,img3.width,img3.height);
    tint(255,200);
    image(img2, 0,0,img2.width,img2.height);
    tint(255,255);
    image(img0, 0,0,img0.width,img0.height);
    
    
//    MONSTER
    tint(255,255);
    image(img1, 0 + moveX, 0 + moveY, img1.width, img1.height);
    

//    Eyes
    fill(0);
    ellipse(338+mapX+moveX,323+mapY+moveY,40,40);
    ellipse(263.91+mapX+moveX, 323 +mapY+moveY,40,40);
    ellipse(301+mapX+moveX, 273+mapY+moveY,35,35);

    mapX = map(mouseX,0,width,-5,0);
    mapY = map (mouseY,0,height,-8,3);
    
    map2X= map(mouseX,0,width, -10,0);
    map2Y= map(mouseY,0,height,-15,6);
    
    //pupils
    fill(255);
    ellipse(338+map2X+moveX,323+map2Y+moveY,15,15);
    ellipse(263.91+map2X+moveX,323+map2Y+moveY,15,15);
    ellipse(301+map2X+moveX,273+map2Y+moveY,15,15);
//    

    dot.display(mouseX, mouseY);
    dot1.display(mouseX, mouseY);
    dot2.display(mouseX,mouseY);

    if (dot.contains(mouseX,mouseY)) {
        moveX += random(-10, 10);
        moveY += random(-10, 10);
        
        
    }else{
        moveX =0 ;
        moveY =0;
    }
    
    if(dot.contains(mouseX,mouseY)){
        musicPlay=true;
    }else{
        musicPlay=false;
    }
 
}




function mousePressed() {
    if (dot.contains(mouseX, mouseY)) {
        tickle.play();
    }
    
         if (dot1.contains(mouseX,mouseY)) {
        image(img5,0,0,img5.width,img5.height);
        playNight = true;
           
    }else{
        image(img5,0,0,img5.width,img5.height);
        stopNight = true;
       }

    if (playNight == true){
    playNight = false;
    stopNight = false; 
    nightSound.setVolume(-1);
    nightSound.play();    
    }
    
    if (stopNight == true){
    playNight = false;
        stopNight = false;
        nightSound.stop();
    }
    
    
        if (dot2.contains(mouseX,mouseY)) {
        image(img4,0,0,img4.width,img4.height);
        playDay = true;
           
    }else{
        image(img5,0,0,img5.width,img5.height);
        stopDay = true;
       }

    if (playDay == true){
    playDay = false;
    stopDay = false;
    daySound.setVolume(3);
    daySound.play();    
    }
    
    if (stopDay == true){
    playDay = false;
        stopDay = false;
        daySound.stop();
    }
    
}

// (really a button)
var Dot = function (x_, y_, r_, color_, color1_,color2_) {
    // Location and size
    var x = x_;
    var y = y_;
    var r = r_;
    var fillColor = color_;
    var fillColor1 = color1_;
    var fillColor2 = color2_;

    // Is a point inside the nose? (used for mouse rollover, etc.)
    this.contains = function (mx, my) {
        if (dist(mx, my, x, y) < r) {
            return true;
        } else {
            return false;
        }
    };

    // Show the doorbell (hardcoded colors, could be improved)
    this.display = function (mx, my) {
        fill(fillColor);
        stroke(0);
        strokeWeight(0);
        ellipse(x, y, r, r);

        if (this.contains(mx, my)) {
            fill(255, 100)
            ellipse(x, y, r, r);    
        }
        
    };
};

