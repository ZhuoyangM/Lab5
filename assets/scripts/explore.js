// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  populateVoices();
  
}

function populateVoices(){
  let speechSynthesis=window.speechSynthesis;
  
  if (typeof speechSynthesis === 'undefined') {
    return;
  }
  let voices = speechSynthesis.getVoices();
  let select=document.getElementById('voice-select');
  
  for (let i=0;i<voices.length;i++){
      let option=document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      select.appendChild(option);
  }
}