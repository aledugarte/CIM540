var i = 0;
var Color = 0;


function setup() {
createCanvas (576,301.64);
background("BLACK");
noStroke();
   
   
max_distance = dist(0, 0, width, height);    
    

    
}

function draw() {
    

    
      //    RANDOM DOTS
     for(var i = 0; i<width; i++){
        console.log(i);
        fill(255 );
         ellipse(int(random(width)), int(random(height)),5,5);
         
    
     }
    
  
    
    


    
//    Left serif of left sife of A
    fill("black");
    noStroke();
    beginShape();
    vertex(49.02,274.07);
    quadraticVertex(77.41,261.95,91.82,239.83);
    quadraticVertex(91.82,239.83,91.82,282.15);
    quadraticVertex(91.82,282.15,49.02,282.15 );
    quadraticVertex(49.02,282.15,49.02,274.07);
    endShape();
    
   
    
    //right serif of left side of A
    fill("black");
    noStroke();
    beginShape();
    vertex(142.32,274.07);
    quadraticVertex(115.93,261.95,101.52,239.83);
    quadraticVertex(101.52,239.83,101.52,282.15);
    quadraticVertex(101.52,282.15,144.32,282.15);
    quadraticVertex(144.32,282.15,144.32,274.07);
    endShape();
    

    //shape of the A
    fill("black");
    noStroke();
    beginShape();
    vertex(73.27,282.15);
    vertex(186.66,23.5);
    vertex(201.04,23.5);
    vertex(291.51,282.15);
    vertex(275.38,282.15);
    vertex(199.98,59.87);
    vertex(111.41,282.15);
    vertex(73.27,282.15);
    endShape();
    
    
    //middle
    fill("black");
    noStroke();
    beginShape();
    vertex(144.32,144.74);
    vertex(144.32,160.91);
    vertex(241.32, 160.91);
    vertex(241.32,144.74);
    vertex(144.32,144.74);
    endShape();
    

    
    //left serif of right side
    fill("black");
    noStroke();
    beginShape();
    vertex(251.09,274.07);
    quadraticVertex(268.61,271.48,275.34,257.9);
    quadraticVertex(275.34,257.9,291.51,282.15);
    vertex(251.09,282.15);
    vertex(251.09,274.07);
    endShape();
    
    
    //top serif of the D
    fill("black");
    noStroke();
    beginShape();
    vertex(252.87,23.51);
    vertex(293.28,23.51);
    vertex(293.28,80.09);
    quadraticVertex(281.9,43.39,252.87,31.59);
    vertex(252.87,23.51);
    endShape();
    
    //D left side body
    fill("black");
    noStroke();
    beginShape();
    vertex(283.3,23.5);
    vertex(323.59,23.5);
    vertex(323.59,282.15);
    vertex(283.3, 282.15);
    endShape();

    //top square
    fill("black");
    noStroke();
    beginShape();
    vertex(323.59,23.51)
    vertex(323.59,31.56);
    vertex(382.58,31.56);
    vertex(382.58,23.51);
    endShape();
    
    //bottom square
    fill("black");
    noStroke();
    beginShape();
    vertex(323.59,274.07);
    vertex(323.59,282);
    vertex(382.58,282);
    vertex(382.58,274.07);
    endShape();
    
    //D curve
    fill("black");
    noStroke();
    beginShape();
    vertex(382.58,23.5);
    bezierVertex(506.36,95.97,492.19,237.01,382.58,282);
    vertex(382.58,274.07);
    bezierVertex(469.36,211.97,467.3,90.07,382.58,31.5);
    endShape(close);
    
    
    for(var i = 0; i <= width; i += 10) {
    for(var j = 0; j <= height; j += 10) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_distance * 10;
        fill(0);
      ellipse(i, j, size, size);
    }
    }


  
    
}



function mousePressed(){
    
   
    
    }


function mouseReleased(){
    
}
   




    


