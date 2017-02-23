//Poll

var choices = {
    
    "Chocolate": 0,
    "Vanilla": 0,
    "Strawberry":0,
    "Coffee":0,
  
};

function setup() {  
    createCanvas(400,400);
    console.log(choices);
    console.log(choices["Chocolate"]);
    console.log(choices["Vanilla"]);
    console.log(choices["Strawberry"]);
    console.log(choices["Coffee"]);
}

function draw() {
    background(255,122,23);
    fill ("pink");
    ellipse (width/2, 120, 200,200);
    noStroke();
    fill ("beige");
    triangle(100,150, 300,150, width/2, 380);
    
    textSize(32);         
    text("Pick Your Flavor", 80,50);   
    fill(0,102,153);

}


function keyPressed(){
    //49 ==1, 50==2, 51 ==3, 52==4
    if(keyCode == 49){
        choices["Chocolate"]++;
    }else if(keyCode ==50){
        choices["Vanilla"]++;
    }else if(keyCode ==51){
        choices["Strawberry"]++;
    }else if(keyCode ==52){
        choices["Coffee"]++;
    }
    
    console.log(choices);
    
}