const container = document.querySelector(".container");
const text = document.querySelector("#text");

const TOTAL_TIME = 7500;

const breatheTime = (TOTAL_TIME / 5) * 2;
const holdTime = TOTAL_TIME / 5;

breathAnimantion();

function breathAnimantion() {
  text.innerHTML = "Breath In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerHTML = "Hold";

    setTimeout(() => {
      text.innerHTML = "Breath Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}
//Run this every 7.5 seconds
setInterval(breathAnimantion, TOTAL_TIME);
