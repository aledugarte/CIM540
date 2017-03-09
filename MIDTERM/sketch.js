var prevMillis = 0;
var interval = 100;
var currentEllipse = 0;
var arrayx = [146,138,130,124,118,110,103,95,89,81,74,66,60,52,75,29,158,166,171,178,185,190,197,205,213,217,224,238,210,125,147,170];
var arrayy = [50,67,84,101,117,134,151,168,185,201,219,235,252,268,268,268,67,85,104,124,144,163,182,201,221,240,260,270,270,158,158,158];
var i = 0;


//function preload(){
//        for (var i = 0; i<arrayx.length; i++){
//        fill("black");
//        ellipse (arrayx [i], (arrayy[i]), 15,15)
//        
//        
//    }
//    
//}

function setup() {
createCanvas (500,500);
//background(255);
    

}

function draw() {
//background(255);
     fill("black");   
   ellipse ((arrayx [i]), (arrayy[i]), 15,15);
    
   if(millis() - prevMillis >= interval){
   i++;
   console.log(i);
   prevMillis = millis();
  } 
    
      if (i == arrayy.length) {
     i = 0;
//     background(255);      
      }
    

}