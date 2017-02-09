
var center = 250;
var bodyY = 330;
var bodyW = 215;
var faceH = 170;
var eyeY = 160;
var eyeW = 170;
var eyeH = 170;
var legY = 450;

var backgroundColor = '#21409a';

var mapX = 0;

function setup() {

    createCanvas(500,500);
    //background(33,64,154);
    
    noStroke();
    
    
}

function draw() {

    background (backgroundColor);
    
    mapX = map(mouseX,0,width,-10,-2);
    mapY = map (mouseY,0,height,-10,5);
    
    mapX2 = map(mouseX,0,width,-15,-2);
    mapY2 = map (mouseY,0,height,-15,13);
    
    
  
    //HEAD
      
   fill(170,140,128);
   ellipse (center,bodyY - (faceH),bodyW, 215);    
   
   //EAR
   triangle (center+28,58,center+70,58,center+60,85);
   triangle (center-28,58,center-70,58,center-60,85); 
        
    
  //BODY  
  fill (170,140,128); //dark brown
  ellipse (center,330,265,215);   
  
  fill (208,184,161); //light brown
  ellipse (center,330,215,235);
    
//EYES
    //EYE1
    fill(170,140,128);
    ellipse (center-80,eyeY,eyeW,eyeH);
    
    fill(208,184,161);
    ellipse(center-70, eyeY,130,130);
    
    fill(170,140,128);
    ellipse (center-50,eyeY,70,70);
    
    fill("black");
    ellipse (center-50+mapX,eyeY+mapY,50,50);
    
    fill ("white");
    ellipse (center-55+mapX2, eyeY-5+mapY2,18,18);
    
    //EYE2
     fill(170,140,128);
    ellipse (center+80,eyeY,eyeW,eyeH);
    
    fill(208,184,161);
    ellipse(center+70, eyeY,130,130);
    
    fill(170,140,128);
    ellipse (center+50,eyeY,70,70);
    
    fill("black");
    ellipse (center+50+mapX,eyeY+mapY,50,50);
    
    fill ("white");
    ellipse (center+55+mapX, eyeY-5+mapY,18,18);
    
    //BOW
    fill("red");
    triangle (center,58, center-40, 58-30, center-40, 58+30 );
    triangle (center,58, center+40, 58-30, center+40, 58+30 );
    
    
    //NOSE
    fill ("#fdbe13"); //yellow
    triangle (center,eyeY+25, center-20, eyeY+60, center+20,eyeY+60)
    
    //LEGS
    
        //LEG1
    ellipse (center-30, legY, 9,30)
    ellipse (center-38, legY, 9,30)
    ellipse (center-46, legY, 9,30)

    
     //LEG1
    ellipse (center+30, legY, 9,30)
    ellipse (center+38, legY, 9,30)
    ellipse (center+46, legY, 9,30)

}



function mousePressed (){
  

    backgroundColor = '#f26522';
    
}


function mouseReleased (){
    
    backgroundColor = '#21409a';
    
}
