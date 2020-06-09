# Fruit-Machine
<a href="https://ibb.co/wL61YzN"><img src="https://i.ibb.co/0XJ3QGj/spin-photo.png" alt="spin-photo" border="0"></a>

You can run this project by cloning and using your git gui to  clone a repositry and open up this file in visual studio.
 
 You use this by clicking spin and after spinning, the browser shows 3 random images and deceipher if its a loss or win.
 I done this project to show all my JavaScript, CSS and HTML knowledge from the Tech talent accelerator course- This is a 6 week course where I learnt about these programs and how to use them from no prior learning.

 This project shows of good examples of reusable code as I use the animation (init) function to move the objects up and keep repeating this for each slot spin.

## The process


Link to my [Trello](https://trello.com/b/EVa1CLxd/fruit-machine)  for further explanation on the process
So I started of fairly simple by making my program display 3 randoms images and deceipher whether all the images match. i.e. if the 3 images match that would be a win and if not - that would be a loss. I did this by create an image array of src's and randomly selecting  and assigning these src to img tag elements. 


My first method did not actually mirror a slot machine hence I wanted to count through the elements in the array and then stop on a random number. First to keep on 'spinning' the images, this required the use of  a set interval function, where I would  keep changing the image. I also  implemented this using the modulus function so I could  cycle through the images in order to 'mirror' a slot machine and stop on a random number. 

To find if the user has lost or won after spining I used set timeout because set interval is an async function hence, I used the set timeout so my program could 'wait' until it was provided with the appropriate values of the last index the image was left on. I then went on to use this to compare all the index to see if they were equal or not to deceipher a win or loss.

To add the spinning effect I used the css key frame animation and simply made each div element move up. Now keyframes by default only will run once, hence I had to keep reseting the animation by seting its name to none and repaint the page so the browser  acknowledges the reset by using the offsetheight property. 

Adding on to this I would create a betting option for the user, so they start of with an inital amount and loose/gain money depending on their score status. Once, they have loss all their money, I want to give them an option to reset the game. I also want to add more effects for wining i.e. confetti to improve user experience.






