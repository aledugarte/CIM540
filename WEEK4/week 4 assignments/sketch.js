
var bgColor = "white";
var ballDir = true;
var y = 0;


function setup() {
  createCanvas (400,400); 
  
    
}


function draw() {
  
    background (bgColor);
     if(mouseY > height/2){
     bgColor = color(200,150,15);        
    }else{
     bgColor = color(150,45,222);    
    }
   
    

    if (ballDir == true){
       y = y+1;
    }else{
        y = y-1;
    }
    
    if (y <= 0){
     y=0; 
    }else if (y >= height){
     y = height;
    }
    
    if (mouseY > height/2){
        ballDir = true;
    }else{
        ballDir = false;
    }
    
    
    fill("white");
    noStroke();
    ellipse(width/2,y,100,100);

}


