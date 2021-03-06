
var mouthX = 35;
var mouthY = 300;
var mouthW = 400;
var mouthH = 50;

var eye1X = 70;
var eye1Y = 70;

//create an offset to make it easier to figure out the position of the other eye.

var eye2offset = 325;
var pupiloffset = 20;




function setup() {
   

    createCanvas(500,400);
    background(0,0,0);
    background(255,0,0);
    background(125);
    
    
    console.log("width: " + width + " " + "height: " + height)
    //this is to see in the console the current width and height
    
    noStroke();

}

function draw() {
    
    fill(255); //white for eye
    
    //EYE1
    ellipse(eye1X,eye1Y,100,100);
    fill(0,0,255); //color pupil
    ellipse (eye1X, eye1Y + pupiloffset,23,55); //pupil
    
    fill(255); // white for eye2
    
    //EYE2
    ellipse(eye1X + eye2offset, eye1Y, 100, 100);
    fill(0,0,255);
    ellipse (eye1X + eye2offset, eye1Y + pupiloffset, 25, 55);    
    
    fill(255);
    
    //NOSE
    //ellipse(width/2,height/2,50,50);
    triangle (width/2,height/2,(width/2)+20,(height/2)+20,(width/2)-20,(height/2)+20)
    //put it like this so its always centered even if you change canvas size.
    
 
    

     
    
    //MOUTH
    rect(mouthX, mouthY, mouthW, mouthH);
    stroke(125);
    strokeWeight (5);
    line (mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
    noStroke();
    
    //TONGUE
    fill('red');
    arc(width/2,(mouthY + mouthH/2)- 2.5,100,110,0,PI);
    
}