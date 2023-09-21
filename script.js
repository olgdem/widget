function showTime() {
    const time = document.querySelector('.time');

const date = new Date();
const currentTime = date.toLocaleTimeString();
time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    showGreeting();
    getRandomNum();
    
  }
  showTime();


function showDate() {
const screenDate = document.querySelector('date');

const date = new Date();
const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
const currentDate = date.toLocaleDateString('en-Br', options);
screenDate.textContent = currentDate;
}

function getTimeOfDay() {
    const date = new Date();
const hours = date.getHours();
if (hours >= 0 && hours <= 5) {
    return 'night';
}
if (hours >= 6 && hours <= 11) {
    return 'morning';
}
if (hours >= 12 && hours <= 17) {
    return 'afternoon';
}
if (hours >= 18 && hours <= 23) {
    return 'day';
}
 }

function showGreeting() {
    const greeting = document.querySelector('.greeting');
    const nameInput = document.querySelector('.name');
    const placeholder = nameInput.placeholder = '[Enter name]';
    const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}, `;
greeting.textContent = greetingText;
}

function setLocalStorage() {
    const nameInput = document.querySelector('.name');
    const enteredName = nameInput.value;
    localStorage.setItem('name', enteredName);
    
  }
  window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('click', setLocalStorage);

  function getLocalStorage() {
    const nameInput = document.querySelector('.name');
    const greeting = document.querySelector('.greeting');
    const enteredName = nameInput.value;
    const nameFromLS = localStorage.getItem('name');
  enteredName.value = nameFromLS;

  if (nameFromLS !== null) {
    nameInput.value = nameFromLS;
  }
}
  window.addEventListener('load', getLocalStorage);

function getRandomNum(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1) + min);


}
getRandomNum();
window.addEventListener('load', getRandomNum);


function setBg() {
  const randomNum = getRandomNum(1,20);
  const bgNum = randomNum.toString().padStart(2,'0');
  return bgNum;
}
setBg();

const splitNum = setBg().toString();
const timeOfDay = getTimeOfDay().toString();
const body = document.querySelector('body');
const imageUrl = `url('assets/background/${timeOfDay}/${splitNum}.jpg')`;
  body.style.backgroundImage = imageUrl;


const slidePrev = document.querySelector('.slide-prev');
  const slideNext = document.querySelector('.slide-next');
  let randomNum = getRandomNum(1,20);

 
function getSlideNext() {
   
  function setZeroPlusNum(){
    randomNum = randomNum < 20 ? randomNum+=1 : randomNum = 1;
    let plusZero = randomNum.toString().padStart(2,'0');
    return plusZero;
  }

  let randomPlusNum = setZeroPlusNum().toString();
  let slideUrl = `url('assets/background/${timeOfDay}/${randomPlusNum}.jpg')`;
 body.style.backgroundImage = slideUrl;
  }
 
 slideNext.addEventListener('click', getSlideNext);  
 
    
 function getSlidePrev() {
   
  function setZeroMinusNum(){
    randomNum = randomNum > 1 ? randomNum-=1 : randomNum = 20;
    let minusZero = randomNum.toString().padStart(2,'0');
    return minusZero;
  }

  let randomMinusNum = setZeroMinusNum().toString();
  let slideUrl = `url('assets/background/${timeOfDay}/${randomMinusNum}.jpg')`;
 body.style.backgroundImage = slideUrl;
  }
    
  slidePrev.addEventListener('click', getSlidePrev); 
   
  // async function getQuotes() {  
  //   const quotes = 'data.json';
  //   const res = await fetch(quotes);
  //   const data = await res.json(); 
  //   console.log(data);
  // }
  // getQuotes();
  

