"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const fagButton = document.querySelector(".Faggot");
  const fagWord = document.querySelector(".hidden p");
  const cyclingText = document.createElement("div");
  cyclingText.id = "cyclingText";
  cyclingText.textContent = "FAGGOT";
  document.body.appendChild(cyclingText);

  const audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.loop = true;

  fagButton.addEventListener("click", function () {
    fagButton.style.display = "none";
    fagWord.classList.add("visible");

    cyclingText.style.animation = "colorCycleText 1s infinite";
    cyclingText.style.display = "block";
    document.body.style.animation = "colorCycleBackground 1s infinite";
    document.body.style.background = "none";

    audioPlayer.play();
  });
});
