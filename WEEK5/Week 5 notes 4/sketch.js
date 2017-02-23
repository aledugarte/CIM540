//MORE ARRAYS

var randomHello = [];


function setup() { 
    
//    background(255);
//    
    createCanvas(500,500); 
    
    console.log(randomHello);
    console.log(typeof(randomHello));   
    
    randomHello.push("Hello");
    console.log(randomHello);
    console.log(randomHello[0]);
    
    randomHello.push("Parev");
    randomHello.push("Goddag");
    randomHello.push("Bonjour");
    randomHello.push("Halo");
    randomHello.push("Aloha");
    randomHello.push("Shalom");
    randomHello.push("Sawubona");
//    randomHello.push("Bonjour");
//    randomHello.push("Halo");
//    randomHello.push("Aloha");
//    randomHello.push("Shalom");
//    randomHello.push("Sawubona");
//    randomHello.push("Bonjour");
//    randomHello.push("Halo");
//    randomHello.push("Aloha");
//    randomHello.push("Shalom");
//    randomHello.push("Sawubona");
    
    console.log(randomHello[randomHello.length-1]);
    console.log(randomHello.length);
    
    //shift
    console.log(randomHello.shift());
    console.log(randomHello);
    
    
    //pop
    console.log(randomHello.pop());
    console.log(randomHello);
    
    //sort
    console.log(randomHello.sort());
    
    
    //reverse
    console.log(randomHello.reverse());
   
    
    
    
//    text(randomHello[0], random(width), random(height));
//    text(randomHello[1], random(width), random(height));
//    text(randomHello[2], random(width), random(height));
//    text(randomHello[3], random(width), random(height));
//    text(randomHello[4], random(width), random(height));
//    text(randomHello[5], random(width), random(height));
//    text(randomHello[6], random(width), random(height));
//    text(randomHello[7], random(width), random(height));
    
    for(var i =0; i<randomHello.length; i++){
     text(randomHello[i], random(width), random(height));
    }
    
}

function draw() {
//     background(255);
//    
//     for(var i =0; i < randomHello.length; i++){
//     text(randomHello[i], random(width), random(height));
//    }
}
