var num = 100;
var num2 = 50;
var message = "hello";
var message2 = "goodbye";
var booleanVar = true;
var booleanVar2 = false;
var mouthX = 25;
var mouthY = 250;
var mouthW = 400;
var mouthH = 60;

function setup() {
    console.log(num);
    console.log("num + num2" + (num + num2));
    console.log(num * num2);
    console.log(num / num2);   
    console.log(message + " " + message2);    
    console.log(booleanVar);

    console.log(message + num2);


        //this is not going to work
    console.log(message * num2);  
        // this will also not work
        //console.log(message/num2;)

        /*
        If you want to write more stuff, 
        use a multi-line
        comment

        */

    //var message2 = "This only works in the setup";
    //console.log(message2); 
    //console.log(message3); ERROR   


    createCanvas(500,400);
    background(0,0,0);
    background(255,0,0);
    background(125);
    
    
    console.log("width: " + width + " " + "height: " + height)
    //this is to see in the console the current width and height
    
    

}

function draw() {
    //  console.log(num); 
    //  console.log(message2); ERROR
    //  var message3 = "this only works in the draw" ERROR
    
    
    //(x,y,w,h)
    ellipse(70,70,100,100);
    ellipse(width/2,height/2,50,50);
    //put it like this so its always centered even if you change canvas size.
    
    rect(mouthX, mouthY, mouthW, mouthH); 
    line (mouthX, mouthY + mouthH/2, mouthX + mouthW, mouthY + mouthH/2);
    
    
    
    
    
}