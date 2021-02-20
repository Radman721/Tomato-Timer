let pomodoroTime = 25;
let shortBreakTime = 5;
let longBreakTime = 10;
let coundDown;
let timeInSecond = 0;
let currentChosenTime = pomodoroTime;
let allBreaks = document.querySelectorAll(".break");
let showTimer = document.querySelector(".show-timer");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let pomodoro = document.querySelector(".pomodoro");
let shortBreak = document.querySelector(".short");
let longBreak = document.querySelector(".long");
let running = false;
let starter = false;

allBreaks.forEach((breakElement) => {
  breakElement.onclick = function () {
    for (let i = 0; i < allBreaks.length; i++)
      allBreaks[i].style.backgroundColor = "#53a7cb";
    breakElement.onmouseover = function () {
      breakElement.style.backgroundColor = "#1e728c";
    };
    this.style.backgroundColor = "#1e728c";
    currentChosenTime = parseInt(this.getAttribute("data-time"));
    // showTimer.textContent = currentChosenTime;
    showTimer.textContent = `${
      currentChosenTime < 10 ? "0" : ""
    }${currentChosenTime}:00`;
    clearInterval(coundDown);
    startTime(currentChosenTime);
  };
});

allBreaks.forEach((breakElement) => {
  breakElement.onmouseover = function () {
    breakElement.style.backgroundColor = "#1e728c";
  };
});
allBreaks.forEach((breakElement) => {
  breakElement.onmouseout = function () {
    breakElement.style.backgroundColor = "#53a7cb";
  };
});

function startTime(choesenTime) {
  let time = choesenTime;
  timeInSecond = time * 60;
  renderTime();
}

function renderTime() {
  coundDown = setInterval(() => {
    if (timeInSecond == 0) {
      clearInterval(coundDown);
    } else {
      timeInSecond--;
      showTimer.textContent = `${
        Math.floor(timeInSecond / 60) < 10 ? "0" : ""
      }${Math.floor(timeInSecond / 60)}:${timeInSecond % 60 < 10 ? "0" : ""}${
        timeInSecond % 60
      }`;
    }
  }, 1000);
}
startBtn.onclick = function () {
  if (running == false) {
    if (starter) {
      startTime(timeInSecond / 60);
    } else {
      starter = true;
      running = true;
      startTime(currentChosenTime);
    }
  } else {
    return;
  }
};

stopBtn.onclick = function () {
  running = false;
  clearInterval(coundDown);
};

resetBtn.onclick = function () {
  clearInterval(coundDown);
  showTimer.textContent = `${
    currentChosenTime < 10 ? "0" : ""
  }${currentChosenTime}:00`;
  clearInterval(coundDown);
  startTime(currentChosenTime);
};
