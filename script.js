import data from "./data.json" with { type: "json" };

const keys = document.querySelectorAll(".key");
const resErrors = document.querySelector(".res-errors");
const resAcc = document.querySelector(".res-acc");
const resWPM = document.querySelector(".res-WPM");
const retryBtn = document.querySelector(".retry-btn");
const closeBtn = document.querySelector(".close");
const resultWindow = document.querySelector(".result-window");
const retryAgain = document.querySelector(".retryAgain");
const retry = document.querySelector(".retry");
const retryIcon = document.querySelector(".retry-icon");
const retryIconSecond = document.querySelector(".retry-icon-2");
const rank = document.querySelector(".rank");

let randomText = "";
let mistakes = 0;
let correct = 0;
let currentIndex = 0;
let startTime = null;
let mistakesElement = document.getElementById("error-count");
let accuracyElement = document.getElementById("accuracy");
let WPM = document.getElementById("WPM");

getRandomText();

document.addEventListener("keydown", (e) => {
  if (startTime === null) {
    startTime = Date.now();
  }
  let time = (Date.now() + 0.1 - startTime) / 1000 / 60;
  let wpm = correct / 5 / time;

  if (e.key === characters[currentIndex]) {
    correctKey(wpm)
  } else {
    wrongKey()
  }
    accuracyCount()

  let keyElement = document.querySelector(`[data-key="${e.key}"]`);

  if(keyElement){
    keyElement.classList.add("active");
  }

});
document.addEventListener("keyup", (e) => {
  let keyElement = document.querySelector(`[data-key="${e.key}"]`);

  if(keyElement){
    keyElement.classList.remove("active");
  }
  
});
let text = document.querySelector(".text");
const textVariable = randomText;
const characters = textVariable.toLowerCase().split("");
for (const character of characters) {
  const span = document.createElement("span");
  span.textContent = character;
  text.append(span);
}
let spans = document.querySelectorAll(".text span");
spans[currentIndex].classList.add("current");

retryBtn.addEventListener("click", () => {
  window.location.reload();
});
closeBtn.addEventListener("click", () => {
  resultWindow.style.display = "none";
  retryAgain.style.display = "flex";
});
retry.addEventListener("click", () => {
  window.location.reload();
});
retryBtn.addEventListener("mouseover", () => {
  retryIcon.classList.add("active");
});
retryBtn.addEventListener("mouseout", () => {
  retryIcon.classList.remove("active");
});
retry.addEventListener("mouseover", () => {
  retryIconSecond.classList.add("active");
});

retry.addEventListener("mouseout", () => {
  retryIconSecond.classList.remove("active");
});

function getRandomText() {
  const random = Math.random();
  if (random <= 0.2) {
    randomText = data.text1;
  } else if (random > 0.2 && random <= 0.4) {
    randomText = data.text2;
  } else if (random > 0.4 && random <= 0.6) {
    randomText = data.text3;
  } else if (random > 0.6 && random <= 0.8) {
    randomText = data.text4;
  } else {
    randomText = data.text5;
  }
}
function correctKey(wpm){
    spans[currentIndex].classList.remove("wrong");
    spans[currentIndex].classList.remove("current");
    spans[currentIndex].classList.add("correct");

    WPM.textContent = Math.floor(wpm);
    resWPM.textContent = Math.floor(wpm);

    if (wpm <= 15) {
      rank.textContent = "🐌 Snail";
    } else if (wpm <= 25) {
      rank.textContent = "🐢 Turtle";
    } else if (wpm <= 35) {
      rank.textContent = "🐨 Koala";
    } else if (wpm <= 45) {
      rank.textContent = "🦊 Fox";
    } else if (wpm <= 55) {
      rank.textContent = "🐺 Wolf";
    } else if (wpm <= 70) {
      rank.textContent = "⚡ Lightning";
    } else if (wpm <= 85) {
      rank.textContent = "🏎️ Speedster";
    } else if (wpm <= 100) {
      rank.textContent = "🔥 Blaze";
    } else if (wpm <= 120) {
      rank.textContent = "👑 Master";
    } else {
      rank.textContent = "👹 Keyboard Demon";
    }

    correct++;

    if (currentIndex === characters.length - 1) {
      resultWindow.style.display = "block";
    }

    currentIndex++;
    spans[currentIndex].classList.add("current");
}
function wrongKey(){
  spans[currentIndex].classList.add("wrong");
    mistakes++;
    mistakesElement.textContent = mistakes;
    resErrors.textContent = mistakes;
}
function accuracyCount(){
  let accuracy = (correct / (correct + mistakes)) * 100;
  accuracyElement.textContent = Math.floor(accuracy);
  resAcc.textContent = Math.floor(accuracy);
}
