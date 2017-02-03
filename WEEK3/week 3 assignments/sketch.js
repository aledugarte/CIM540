var HeadX = 250;
var HeadY = 200;
var HeadW = 260;
var headH = 300;
var mouthX = 200;


function setup() {

    createCanvas(500,600);
    background(0,0,0);
    
}

function draw() {

    rect (214,340,75,35); //neck
    rect (HeadX/2,375,HeadW,200); //shirt
    ellipse (HeadX,HeadY,HeadW,headH); //head
    ellipse (mouthX,250,110,60); //mouth
    ellipse (HeadX-100,150,23,30); //eye1
    ellipse (HeadX,150,25,32); //eye2
    
}