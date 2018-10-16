const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const paw = document.querySelector('.kitty-paw--large');
const digitalCLock = document.getElementById('digitalClock');

function setDate(){
  const time = new Date();
  const seconds = time.getSeconds();
  const secondsDegrees = ((seconds/60)*360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutes = time.getMinutes();
  const minutesDegrees = ((minutes/60)*360) + ((seconds/60)*6) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  const hour = time.getHours();
  const hourDegrees = ((hour/12)*360)+ ((minutes/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  digitalCLock.innerHTML = hour + ':' + minutes + ':' + seconds;
}

setInterval(setDate,1000);