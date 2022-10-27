// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  let speechSynthesis=window.speechSynthesis;
  speechSynthesis.addEventListener("voiceschanged",populateVoices);
  
  let talk=document.getElementsByTagName("button")[0];
  talk.addEventListener('click', speak);


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

function speak(e){
    let speechSynthesis=window.speechSynthesis;
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
    let text=document.getElementById("text-to-speak").value;

    const utterThis = new SpeechSynthesisUtterance(text);
    let voiceSelect=document.getElementById("voice-select");
    
    
    const selectedOption = 
    voiceSelect.selectedOptions[0].getAttribute('data-name');

    let voices=speechSynthesis.getVoices();

    
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    speechSynthesis.speak(utterThis);

    let smileFace=document.getElementsByTagName("img")[0];
  
    utterThis.addEventListener("start",()=>{
        smileFace.src="assets/images/smiling-open.png";
    })

    utterThis.addEventListener("end",()=>{
      smileFace.src="assets/images/smiling.png";
    })

}



