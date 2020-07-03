let apple = 'https://cdn.pixabay.com/photo/2015/05/22/16/43/apple-779336_960_720.jpg';
let pear = 'https://cdn.pixabay.com/photo/2016/04/01/11/00/pear-1300153_960_720.png';
let avocado = 'https://cdn.pixabay.com/photo/2020/02/13/16/14/avocado-4846143_960_720.png';
let pineapple = 'https://cdn.pixabay.com/photo/2020/01/14/10/55/cartoon-4764726_960_720.png';
let watermelon = 'https://cdn.pixabay.com/photo/2020/02/16/20/02/watermelon-4854649_960_720.png';
let raspberry = 'https://cdn.pixabay.com/photo/2013/07/12/19/34/raspberry-155019_960_720.png';
let fruitArray = [apple, pear, avocado, pineapple, watermelon, raspberry];

function MakeSlots(spinCount, slotNum) {
	this.startInd = Math.floor(Math.random() * fruitArray.length); // starts on a random number
	this.lastInd = null; // what ends on after running
	this.slotNum = slotNum;
	this.spinCount = spinCount; // how many times run function. i.e. diffferent for each slot
}

function displayFruits(){
    let status = document.getElementById('status');
	status.innerText = ('Status: SPINNNINGG....');
	let audio = new Audio('spinEffect.mp3');
	let wining = new Audio('win.wav');
	let losing = new Audio('looseHorn.wav');
	$(audio).animate({
		volume: 0.2
	}, 1000);
	audio.play();
	let slot = new MakeSlots(20, 'slot1');
	let spin = setInterval(spining, 100);;
	slot.spinCount = slot.spinCount + Math.floor(Math.random() * fruitArray.length);
	// this is for slot 2
	let slot2 = new MakeSlots(25, 'slot2');
	let spin2 = setInterval(spining2, 115);;
    slot2.spinCount = slot2.spinCount + Math.floor(Math.random() * fruitArray.length);
    // this is for slot3
	let slot3 = new MakeSlots(30, 'slot3');
	let spin3 = setInterval(spining3, 130);;
    slot3.spinCount = slot3.spinCount + Math.floor(Math.random() * fruitArray.length);
    let win = () => {
		audio.pause();
		if (slot.lastInd === slot2.lastInd && slot.lastInd === slot3.lastInd) {
			status.innerText = 'Status: Win';
			wining.play();
			$(wining).animate({
				volume: 0.2
			}, 1000);
		} else {
			status.innerText = 'Status: Loss';
			losing.play();
			$(losing).animate({
				volume: 0.2
			}, 1000);
		}
	}
    setTimeout(win, 6200); // get final index of image after spining to check if 'loss' or 'win'

    function spining()  { 
		if (slot.lastInd === null) startingFunction(slot); // mean it would be a first spin
		// value that the slot is on 
		//let counter = slot3.spinCount;
		slot.lastInd++;
		let arrInd = slot.lastInd % fruitArray.length; // cycling through the array to mimic a slot machine
		if (slot.lastInd === slot.spinCount) {
			
			slot.lastInd = arrInd;
            
			clearInterval(spin);
		}
		nextPart(slot.slotNum, arrInd);
	}
    
    function spining2() {
		if (slot2.lastInd === null) startingFunction(slot2); // mean it would be a first spin
		// value that the slot is on 
		//let counter = slot3.spinCount;
		slot2.lastInd++;
		let arrInd = slot2.lastInd % fruitArray.length; // cycling through the array to mimic a slot machine
		if (slot2.lastInd === slot2.spinCount) {
			
			slot2.lastInd = arrInd;
            
			clearInterval(spin2);
		}
		nextPart(slot2.slotNum, arrInd);
	}
    
    
    
	

	function spining3() {
		if (slot3.lastInd === null) startingFunction(slot3); // mean it would be a first spin
		// value that the slot is on 
		//let counter = slot3.spinCount;
		slot3.lastInd++;
		let arrInd = slot3.lastInd % fruitArray.length; // cycling through the array to mimic a slot machine
		if (slot3.lastInd === slot3.spinCount) {
			
			slot3.lastInd = arrInd;
            
			clearInterval(spin3);
		}
		nextPart(slot3.slotNum, arrInd);
	}
	return false;
}

function showImg1(slotNum, arrInd) {
	let slotCell = document.getElementById(slotNum);
	slotCell = slotCell.querySelector('div');
	slotCell.classList.remove('move');
	slotCell.offsetHeight;
	// browser needs to recognise animation has been reset by  a page repaint
	$(slotCell).addClass('move');
	
}

function startingFunction(slot) {
	slot.lastInd = slot.startInd;
    let first = init(slot.slotNum, slot.lastInd);
    slot.lastInd = first;
}

function init(slotNum, randomInd)
{
    let slotCell = document.getElementById(slotNum);
	slotCell = slotCell.querySelectorAll('img');

 
 slotCell.forEach( item => {
    if (item.src.length == 0){
      //i.e. has no source
    }   item.src= fruitArray[randomInd % fruitArray.length]
        randomInd++;

  })

  return randomInd;
}






function nextPart(slotNum ,randomInd)
{

    let slotCell = document.getElementById(slotNum);
    slotCell = slotCell.querySelectorAll('img');
    showImg1(slotNum,randomInd);
    slotCell[0].src=fruitArray[randomInd]
  for (let i = 1; i < slotCell.length; i++)
  {
    for (let j = i + 1; j< slotCell.length; j++)
    {
      slotCell[i].src = slotCell[j].src;
      break;
    }

  }
  

  
}