
// A sound file object
var sneeze;

// (what will trigger the sound)
var nose;

function setup() {
  createCanvas(500, 500);

  // Load the sound file.
  soundFormats('mp3');
  sneeze = loadSound('assets/sneeze.mp3');

  // Create a new button
  
  nose = new Nose(213, 300, 20);
    
    img = loadImage("assets/woman.png");  
}

function draw() {
  background(255);
 
//  image(img,0,0);    
 image(img, 0, 80, img.width/2, img.height/2);
    
  nose.display(mouseX, mouseY);
}

function mousePressed() {
  // If the user clicks on the nose, play the sound!
  if (nose.contains(mouseX, mouseY)) {
    sneeze.play();
  }
}

// (really a button)
var Belly = function(x_, y_, r_) {
  // Location and size
  var x = x_;
  var y = y_;
  var r = r_;

  // Is a point inside the nose? (used for mouse rollover, etc.)
  this.contains = function(mx, my) {
    if (dist(mx, my, x, y) < r) {
      return true;
    } else {
      return false;
    }
  };

  // Show the doorbell (hardcoded colors, could be improved)
  this.display = function(mx, my) {
    if (this.contains(mx, my)) {
      fill(255,0,0);
    } else {
      fill(255,0,0,100);
    }
    stroke(0);
    strokeWeight(0);
    ellipse(x, y, r, r);
  };
};
