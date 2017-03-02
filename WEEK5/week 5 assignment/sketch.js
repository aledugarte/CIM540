//Poll

var choices = {
    
    "Chocolate": 0,
    "Vanilla": 0,
    "Strawberry":0,
    "Coffee":0,
};

    
var ChocolateMessage = "";  
var VanillaMessage = "";
var StrawberryMessage = "";
var CoffeeMessage = "";
  

function setup() {  
    createCanvas(400,400);
    console.log(choices);
    console.log(choices["Chocolate"]);
    console.log(choices["Vanilla"]);
    console.log(choices["Strawberry"]);
    console.log(choices["Coffee"]);
}

function draw() {
    background(255);
         fill ("pink");
    ellipse (width/2, 120, 200,200);
    
    fill ("beige");
    triangle(100,150, 300,150, width/2, 380);
    noStroke();
  
    noStroke();
    fill(255,0,0,100);
    ellipse(50, height/4, choices["Chocolate"], choices["Chocolate"]);
    fill(0,255,0,100);
     ellipse(120, height/4, choices["Vanilla"], choices["Vanilla"]);
     fill(0,0,255,100);
     ellipse(200, height/4, choices["Strawberry"], choices["Strawberry"]);
   fill(100,100,100,100);
     ellipse(300, height/4, choices["Coffee"], choices["Coffee"]);
    
    
    
    fill ("black");
    textSize(14);
    text(ChocolateMessage, 10, height/5);
    text(VanillaMessage, 100, height/5);
    text(StrawberryMessage, 180, height/5);
    text(CoffeeMessage, 290, height/5);
    
    textSize(20);         
    text("Pick Your Flavor", 120,50);   
//    fill(0,102,153);

    

}


function keyPressed(){
    //49 ==1, 50==2, 51 ==3, 52==4
    if(keyCode == 49){
        choices["Chocolate"]++;
        ChocolateMessage = "Chocolate: " + choices["Chocolate"];
    }else if(keyCode ==50){
        choices["Vanilla"]++;
        VanillaMessage = "Vanilla: " + choices["Vanilla"];
    }else if(keyCode ==51){
        choices["Strawberry"]++;
        StrawberryMessage = "Strawberry: " + choices["Strawberry"];
    }else if(keyCode ==52){
        choices["Coffee"]++;
        CoffeeMessage = "Coffee: " + choices["Coffee"];
    }
    
    
    
    console.log(choices);
    
}