const target = new Date('2026-10-03T20:00:00-05:00').getTime();

function updateCountdown(){
  const now = Date.now();
  let distance = target - now;
  const message = document.getElementById('countdownMessage');

  if(distance <= 0){
    document.getElementById('days').textContent='00';
    document.getElementById('hours').textContent='00';
    document.getElementById('minutes').textContent='00';
    document.getElementById('seconds').textContent='00';
    message.textContent='¡Hoy es el gran día! ✨';
    return;
  }
  const days = Math.floor(distance / 86400000);
  distance %= 86400000;
  const hours = Math.floor(distance / 3600000);
  distance %= 3600000;
  const minutes = Math.floor(distance / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  document.getElementById('days').textContent=String(days).padStart(2,'0');
  document.getElementById('hours').textContent=String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent=String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent=String(seconds).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown,1000);

document.getElementById('openInvitation').addEventListener('click',()=>{
  document.getElementById('invitacion').scrollIntoView({behavior:'smooth'});
});

const music=document.getElementById('music');
const musicBtn=document.getElementById('musicBtn');
musicBtn.addEventListener('click',async()=>{
  try{
    if(music.paused){
      await music.play();
      musicBtn.textContent='❚❚ Pausar música';
    }else{
      music.pause();
      musicBtn.textContent='▶ Reproducir música';
    }
  }catch(e){
    musicBtn.textContent='Añade el archivo MP3 para activar la música';
  }
});

// Reemplaza 573XXXXXXXXX por el número de WhatsApp, sin + ni espacios.
document.getElementById('rsvpBtn').addEventListener('click',(e)=>{
  e.preventDefault();
  const phone='573XXXXXXXXX';
  const text=encodeURIComponent('Hola, quiero confirmar mi asistencia a los 15 años de Daniela. ✨');
  if(!phone.includes('X')) window.open(`https://wa.me/${phone}?text=${text}`,'_blank');
  else alert('Primero reemplaza el número de WhatsApp en script.js.');
});
