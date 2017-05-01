# Final Project
### CIMonster

My final project for CIM540 is a monster with whom the user can play. The idea is to create an animated monster that can move its eyes, fly across the screen and also play hide and seek. In addition to this, the user should be able to change the background from day to night by clicking on the moon and sun buttons.

Code Plan

# Input

-	Moving the mouse across the image, the monster's eyes will look at the mouse.
-	Hover over the red button and the monster will fly.
-	mouseClick on the moon button to change the background to night with included sound effect.
-	mouseClick on the sun button to change the background back to day with included sound effect.
-	mouseClick on the magnifying glass to play hide and seek with the monster.
-	While playing hide and seek, hover over the monster's nose to find him.
-	Click on the nose and the monster will laugh.


# Pseudocode

-	Preload all the images and sound effects that will be used in the preload function.
-	In the setup function create the canvas. 
-	Create a new function for the buttons, named dots.
-	Create a different function for the nose button.
-	In the draw function, create a white rectangle in the bottom of the image that will include the text and instructions on how play.
-	Display the background images (preloaded images).
-	Display the monster. 
-	Draw the eyes with ellipses and create maps so that the pupils can move with the mouse. 
-	Incorporate the illustrated images for the buttons and then display the buttons created. 
-	Create a mousePressed function that will trigger the sound effects and background changes when clicking on the different buttons. 
-	In order for the monster to fly, create a hover effect on the red button, if the mouse is on top of it, then the location of the monster will change -15, +15 in both the X and Y location. This is also added to the pupils and nose button so they all move together.
-	Create a couple of if statements for the hide and seek game. The first one, if it is dark, then have the invisible area you can look through. The second one, if it is dark, and you hover over the nose, then the monster laughs and this means that you found him.
-	Create if statements that will have the sound effect play only once and not over and over again.

