
var center = 250;
var bodyY = 330;
var bodyW = 215;
var faceH = 170;
var eyeX = 170;
var eyeY = 160;
var eyeW = 170;
var eyeH = 170;

function setup() {

    createCanvas(500,500);
    background(33,64,154);
    
    noStroke();
    
    
}

function draw() {

  
    //HEAD
      
   fill(170,140,128);
   ellipse (center,bodyY - faceH, faceH, bodyW)    
        
    
  //BODY  
  fill (170,140,128); //dark brown
  ellipse (center,330,265,215);   
  
  fill (208,184,161); //light brown
  ellipse (center,330,215,235);
    
//EYES
    fill(170,140,128);
    ellipse (eyeX,eyeY,eyeW,eyeH);
    
    


}