let apple='https://cdn.pixabay.com/photo/2015/05/22/16/43/apple-779336_960_720.jpg';
let pear='https://cdn.pixabay.com/photo/2016/04/01/11/00/pear-1300153_960_720.png';
let avocado='https://cdn.pixabay.com/photo/2020/02/13/16/14/avocado-4846143_960_720.png';
let pineapple='https://cdn.pixabay.com/photo/2020/01/14/10/55/cartoon-4764726_960_720.png';
let watermelon='https://cdn.pixabay.com/photo/2020/02/16/20/02/watermelon-4854649_960_720.png';
let raspberry='https://cdn.pixabay.com/photo/2013/07/12/19/34/raspberry-155019_960_720.png';

let fruitArray=[apple,pear,avocado,pineapple,watermelon,raspberry];


function displayFruits()
{
    let slot1 = randomImg('slot1');
    let slot2 = randomImg('slot2');
    let slot3 = randomImg('slot3');
    let scoreStatus= document.getElementById('status');
    let scoreBoard= score(slot1,slot2,slot3);
    if (scoreBoard) scoreStatus.innerText='Status: Win';
    else scoreStatus.innerText='Status: loss';
    
    return false;

}

function randomImg(slotNum)
{
    let slot = document.getElementById(slotNum);
    slot = slot.querySelector('img');
    let randomFruit =Math.floor(Math.random() * fruitArray.length);
    $(slot).attr('src',fruitArray[randomFruit]);
    return randomFruit;

    
}

function score(arrInd1, arrInd2, arrInd3)
{
    // if all the img showing are the same
    if (arrInd1 === arrInd2 && arrInd1 === arrInd3) return true;
    else return false; 

}
