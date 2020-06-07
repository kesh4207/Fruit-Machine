let apple='https://cdn.pixabay.com/photo/2015/05/22/16/43/apple-779336_960_720.jpg';
let pear='https://cdn.pixabay.com/photo/2016/04/01/11/00/pear-1300153_960_720.png';
let avocado='https://cdn.pixabay.com/photo/2020/02/13/16/14/avocado-4846143_960_720.png';
let pineapple='https://cdn.pixabay.com/photo/2020/01/14/10/55/cartoon-4764726_960_720.png';
let watermelon='https://cdn.pixabay.com/photo/2020/02/16/20/02/watermelon-4854649_960_720.png';
let raspberry='https://cdn.pixabay.com/photo/2013/07/12/19/34/raspberry-155019_960_720.png';

let fruitArray=[apple,pear,avocado,pineapple,watermelon,raspberry];



function MakeSlots(spinCount,slotNum)
{
    
    
    this.startInd = Math.floor(Math.random() * fruitArray.length); // starts on a random number
    this.lastInd = null; // what ends on after running
    this.slotNum = slotNum;
    this.spinCount = spinCount; // how many times run function. i.e. diffferent for each slot
    
    
  
}





function displayFruits(){
   
    //console.log(slot1.lastInd);
    //let spin = setInterval(spining(),170);
    
    //let spin = setInterval(spining(slot1,20),170);
    
    let slot = new MakeSlots(20, 'slot1');
    
    
   let spin = setInterval( spining, 100 );
   //setInterval( function() { funca(10,3); }, 500 );
    console.log('spincount is ' , slot.spinCount);
    slot.spinCount = slot.spinCount + Math.floor(Math.random() * fruitArray.length);
    

    let spin3 = () => 
    {
      if (slot.lastInd === 1 |slot.lastInd === 2| slot.lastInd === 3|slot.lastInd === 4|slot.lastInd === 5)
      {
        console.log('it worksssssssssss');
      }
    }
    setTimeout(spin3, 3000);
    
    function spining () {
      

      if (slot.lastInd === null ) startingFunction(slot); // mean it would be a first spin
  
      // value that the slot is on 
      let counter = slot.spinCount; 
      console.log('counter: ', counter);
      console.log('last: ' , slot.lastInd);
      
      slot.lastInd ++;
      
   
 
      let arrInd =  slot.lastInd % fruitArray.length; // cycling through the array to mimic a slot machine
       console.log('ind ', arrInd);
       console.log('last: ' , slot.lastInd);
    
 
        if ( slot.lastInd === counter) {
           //show(slot.slotNum,arrInd);
           
           slot.lastInd = arrInd;
           console.log(arrInd);
           show(slot.slotNum,arrInd); 
           
          

           
           
           clearInterval(spin);
          
       }
       
       
      showImg1(slot.slotNum,arrInd); 
     
  }
  
 
    return false;
}


  function showImg1(slotNum, arrInd)
{
   
  console.log(arrInd);
  let slotCell = document.getElementById(slotNum);
  slotCell= slotCell.querySelector('img');
  //slotCell.style.filter ='blur(2px)';
 
  slotCell.classList.remove('move');
  slotCell.offsetHeight;
  // browser needs to recognise animation has been reset by  a page repaint
  $(slotCell).addClass('move');

  
  
  
  
  
  
  // var elem = slotCell;   
  // var pos = 0;
  // var id = setInterval(frame, 3);
  // function frame() {
  //   if (pos == 100) {
  //     elem.style.top = 0; 
  //     clearInterval(id);
  //   } else {
  //     $(slotCell).attr('src',fruitArray[arrInd]);
  //     pos++;
  //     elem.style.top = pos + "px"; 
      
  //   }
  // }
 
    $(slotCell).attr('src',fruitArray[arrInd]);


}

function show(slotNum, arrInd)
{
   
  console.log(arrInd);
  let slotCell = document.getElementById(slotNum);
  slotCell= slotCell.querySelector('img');
  
  
  $(slotCell).attr('src',fruitArray[arrInd]);
 // slotCell.classList.remove('move');
  //slotCell.offsetHeight;
  
 
  slotCell.style.filter ='blur(0)';
  
  
  
}

/* problem with CSS animations keyframes by default only run ONCE hence the animation needs to be reset  */




function startingFunction(slot) {
    slot.lastInd = slot.startInd;
    showImg1(slot.slotNum,slot.lastInd);
    

       
}




 
 
 
 
