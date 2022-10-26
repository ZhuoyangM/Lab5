// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();

  let horn=document.getElementById("horn-select");
  horn.addEventListener('change', hornSelect);
  
  let volume=document.getElementById("volume");
  volume.addEventListener('input', changeVolume);
  
  let audio=document.querySelector("audio");

  let sound=document.querySelector("button");
  sound.addEventListener('click', 
      ()=>{
      let horn=document.getElementById("horn-select");
      audio.play();
      if(horn.value=="party-horn"){
        jsConfetti.addConfetti();
    }});
}

function hornSelect(e){
    let image=document.images[0];
    let audio=document.getElementsByClassName("hidden")[0];
    if(e.target.value=='air-horn'){
        image.src="assets/images/air-horn.svg";
        audio.src="assets/audio/air-horn.mp3";
    }
    if(e.target.value=='car-horn'){
        image.src="assets/images/car-horn.svg";
        audio.src="assets/audio/car-horn.mp3";
    }
    if(e.target.value=='party-horn'){
        image.src="assets/images/party-horn.svg";
        audio.src="assets/audio/party-horn.mp3";
    }
}




function changeVolume(e){
    let image=document.images[1];
    let audio=document.getElementsByClassName('hidden')[0];
    let vol=Number(e.target.value);
    audio.volume=vol/100;
    if(vol==0){
      image.src="assets/icons/volume-level-0.svg";
    }
    if(vol>=1 && vol<33){
      image.src="assets/icons/volume-level-1.svg";
    }
    if(vol>=33 && vol<67){
      image.src="assets/icons/volume-level-2.svg";
    }
    if(vol>=67){
      image.src="assets/icons/volume-level-3.svg";
    }
}