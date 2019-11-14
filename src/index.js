const hourHand = document.getElementById('hour');
const minHand = document.getElementById('min');
const secHand = document.getElementById('sec');

const setTime = () => {
  const date = new Date();

  const hours = date.getHours();
  const hoursAngle = ((hours / 12) * 360) + 90;

  const mins = date.getMinutes();
  const minsAngle = ((mins / 60) * 360) + 90;

  const seconds = date.getSeconds();
  const secondsAngle = ((seconds / 60) * 360) + 90;
  console.log("TCL: setTime -> seconds", seconds)
  console.log("TCL: setTime -> secondsAngle", secondsAngle)
  if (seconds === 0) {
    secHand.classList.remove('tick');
    minHand.classList.remove('tick');
    hourHand.classList.remove('tick');
    moveHands();
  } else {
    secHand.classList.add('tick');
    minHand.classList.add('tick');
    hourHand.classList.add('tick');
    moveHands();
  }

  function moveHands() {


    hourHand.style.transform = `rotate(${hoursAngle}deg)`;
    minHand.style.transform = `rotate(${minsAngle}deg)`;
    secHand.style.transform = `rotate(${secondsAngle}deg)`;
  }

}

setInterval(setTime, 1000);