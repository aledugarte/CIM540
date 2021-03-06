var tickle;
var nightSound;
var daySound;

var playNight = false;
var stopNight = true;
var playDay = false;
var stopDay = true;

var playTickle = false;

var dark = false;

var dayBack = true;
var nightBack = true;

var value = 0;

var imgMove;

var dot = [];

var moveX = 0;
var moveY = 0;

var mapX = 0;
var mapY = 0;

var center = 250;

var currentType = "";

var musicPlay = true;

var buttonY = 560;
    
    
function preload (){
    img0 = loadImage("assets/front.png");
    img1 = loadImage("assets/monster.png");
    img2 = loadImage("assets/middle.png");
    img3 = loadImage("assets/back.png");
    img4 = loadImage("assets/day.png");
    img5 = loadImage("assets/night.png");
    img6 = loadImage ("assets/sun.png");
    img7 = loadImage ("assets/moon.png");
    img8 = loadImage ("assets/flashlight.png");
    
    
      // Load the sound file.
    soundFormats('mp3');
    tickle = loadSound('assets/tickle.mp3');
    soundFormats('wav');
    nightSound = loadSound('assets/night.wav');
    daySound = loadSound('assets/day.wav');
}

function setup() {
    createCanvas(600, 700);



    dot = new Dot(50, buttonY, 20, "red");
    dot1 = new Dot(220, buttonY, 15, 'rgba(0,52,221,100)');
    dot2 = new Dot (410,buttonY,25, ('rgb(255,230,0)'));
    dot3 = new Dot (550,buttonY,25,("black"));
    nose = new Nose (300+moveX,350+moveY,15,('rgb(183,9,125)'));
    
    max_distance = dist(0, 0, 50, 50);
    
}

function draw() {
    
//  
//    background(255);
   
    fill("white");
    rect(0, 600, width, 100);
    
     textSize(32);
    textStyle (BOLD);
    fill("red");
    text("CIMonster",15,630);
    
    textSize(14);
    textStyle (NORMAL);
    fill ("black");
    text ("Click on the buttons to play with the CIMonster. Have fun!",25,650);
    
     textSize(12);
    textStyle (ITALIC);
    fill ("black");
    text ("P.S. Try his nose!",25,664);
    
    
    
    

    
    if (dayBack == true){
        image(img4, 0,0,img4.width,img4.height)
    }
    else{
        image(img5, 0,0,img5.width,img5.height)
    }
    
        
       if (nightBack==true){
        image(img5, 0,0,img5.width,img5.height)
    }
    else{
         image(img4, 0,0,img4.width,img4.height)
    }
    
 
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

    //fly
    dot.display(mouseX, mouseY);
    
    //moon
    image(img7,201,524,img7.width/4, img7.height/4);
    dot1.display(mouseX, mouseY);
    
    //sun
    image(img6,372,524,img6.width/4, img6.height/4);
    dot2.display(mouseX,mouseY);
    
    //flashlight
    image (img8,527,538, img8.width/4, img8.height/4);
    dot3.display(mouseX, mouseY);
    
    nose.display (mouseX,mouseY);

    if (dot.contains(mouseX,mouseY)) {
        moveX += random(-15, 15);
        moveY += random(-15, 15);
        
        
    }else{
        moveX =0 ;
        moveY =0;
    }
    

    if (dark == true){
        for(var i = 0; i <= width; i += 10) {
    for(var j = 0; j <= height; j += 10) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_distance * 10;
        fill(value);
      ellipse(i, j, size, size);
    }
    }  
    } 
    
    if (dark == true){
        
       if (nose.contains (mouseX, mouseY)){
           playTickle = true;
           tickle.playMode('sustain');
       } 
        
       
        
    }
    
    if (playTickle == true){
        tickle.play();
        playTickle = false;
        stopTickle = true;
    }
  
    
}




function mousePressed() {

      if (dot1.contains(mouseX,mouseY)) {
//        image(img5,0,0,img5.width,img5.height);
        playNight = true;
        nightBack = true;
           
    }else{
//        image(img5,0,0,img5.width,img5.height);
        stopNight = true;
        nightBack = false;
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
//        image(img4,0,0,img4.width,img4.height);
        playDay = true;
        dayBack = true;
           
    }else{
//        image(img5,0,0,img5.width,img5.height);
        stopDay = true;
        dayBack = false;
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
    
    if (nose.contains(mouseX,mouseY)){
        tickle.play();
    }
    
    if (dot3.contains(mouseX,mouseY)){     
    dark = true;
    }else{
    dark = false;    
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
}

var Nose = function (_x,_y,_r,_color){
    var x = _x ;
    var y = _y ;
    var r = _r;
    var fillColor = _color;
    
    this.contains = function(mx,my){
          if (dist(mx, my, x, y) < r) {
            return true;
        } else {
            return false;
        }
    };

    
    
    this.display = function (mx, my){
        fill (fillColor);
        stroke(0);
        strokeWeight(0);
        ellipse(x+moveX,y+moveY,r,r);
        
        if (this.contains(mx, my)) {
            fill(255, 100)
            ellipse(x, y, r, r);    
        }
        
    };
}
