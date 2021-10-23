// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //Change horn image
  const horn = document.querySelector("#horn-select");
  const horn_img = document.querySelector("img");
  const horn_sound = document.querySelector(".hidden");
  var horn_name;

  horn.addEventListener('change', (event) => {
    horn_name = event.target.value;

    if(event.target.value == "air-horn") {
      horn_img.src = "assets/images/air-horn.svg";
      horn_sound.src = "assets/audio/air-horn.mp3";
    }
    if(event.target.value == "car-horn") {
      horn_img.src = "assets/images/car-horn.svg";
      horn_sound.src = "assets/audio/car-horn.mp3"
    }
    if(event.target.value == "party-horn") {
      horn_img.src = "assets/images/party-horn.svg";
      horn_sound.src = "assets/audio/party-horn.mp3";
    }
  });

  //Change volume
  const input = document.querySelector("input");
  const vol_img = document.querySelector('#volume-controls img');

  input.addEventListener('input', changeVolume);
  function changeVolume() {
    horn_sound.volume = input.value/100;

    if(input.value == 0) {
      vol_img.src = "assets/icons/volume-level-0.svg";
    }
    if(input.value >= 1 && input.value < 33) {
      vol_img.src = vol_img.src = "assets/icons/volume-level-1.svg";
    }
    if(input.value >= 33 && input.value < 67) {
      vol_img.src = "assets/icons/volume-level-2.svg";
    }
    if(input.value >= 67) {
      vol_img.src = vol_img.src = "assets/icons/volume-level-3.svg";
    }
  }

  //On button click
  const button = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  button.addEventListener("click", playSound);
  function playSound() {
    horn_sound.play();

    if(horn_name == "party-horn" && horn_sound.volume > 0) {
      jsConfetti.addConfetti();
    }
  }
}