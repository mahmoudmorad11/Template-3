// DOM element
let ourSkillsSection = document.getElementById("our-skills");
let ProgressBars = document.querySelectorAll(".skill .the-progress span");
let statsSection = document.getElementById("stats");
let statsNums = document.querySelectorAll(".stats .box .number");
let countStarted = false;

//progress bar
window.onscroll = function () {
  if (window.scrollY >= ourSkillsSection.offsetTop - 300) {
    ProgressBars.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else if (window.scrollY == statsSection.offsetTop - 200) {
    if (!countStarted) {
      // statsNums.forEach((num) => startCount(num));
      console.log("mahmoud");
    }
    countStarted = true;
  }
};
