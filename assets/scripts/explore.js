// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  var voiceSelect = document.querySelector('select');
  var voices = [];

  //set delay to load voices
  setTimeout(() => {
    voices = synth.getVoices();
    getVoiceOptions();
  }, 50);

  //set options for voices
  function getVoiceOptions() {
    for(let i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name;

      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  const button = document.querySelector('button');
  const text = document.querySelector("#text-to-speak");
  const image = document.querySelector("img");

  button.addEventListener('click', onClick);

  function onClick() {
    if(voiceSelect.value !== "select" && text.value !== "") {
      var utterThis = new SpeechSynthesisUtterance(text.value);
      var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

      for(let i = 0; i < voices.length ; i++) {
        if(voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }

      synth.speak(utterThis);
      image.src = "assets/images/smiling-open.png";

      utterThis.addEventListener('end', function() {
        image.src = "assets/images/smiling.png";
      });
    }
  }
}