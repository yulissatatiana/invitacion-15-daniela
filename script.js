const EVENT_DATE="2026-10-03T20:00:00-05:00";

const openBtn=document.getElementById("openBtn");
const opening=document.getElementById("opening");
const page=document.getElementById("page");

openBtn?.addEventListener("click",()=>{
  document.getElementById("envelope")?.classList.add("open");
  opening?.classList.add("closed");
  page?.classList.add("show");
});

const pad=n=>String(n).padStart(2,"0");
function updateCountdown(){
  const diff=new Date(EVENT_DATE).getTime()-Date.now();
  if(diff<=0){
    ["days","hours","minutes","seconds"].forEach(id=>{
      const el=document.getElementById(id); if(el) el.textContent="00";
    });
    const title=document.querySelector(".countdown-card h2");
    if(title) title.textContent="¡Hoy es el gran día!";
    return;
  }
  let s=Math.floor(diff/1000);
  const days=Math.floor(s/86400);
  const hours=Math.floor(s%86400/3600);
  const minutes=Math.floor(s%3600/60);
  const seconds=s%60;
  document.getElementById("days").textContent=pad(days);
  document.getElementById("hours").textContent=pad(hours);
  document.getElementById("minutes").textContent=pad(minutes);
  document.getElementById("seconds").textContent=pad(seconds);
}
updateCountdown();
setInterval(updateCountdown,1000);

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const audio=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");
if(audio && musicBtn){
  audio.src="assets/musica.mp3";
  musicBtn.addEventListener("click",()=>{
    if(audio.paused){
      audio.play().then(()=>{
        musicBtn.textContent="❚❚ Pausar";
      }).catch(()=>{
        musicBtn.textContent="▶ Reproducir";
      });
    }else{
      audio.pause();
      musicBtn.textContent="▶ Reproducir";
    }
  });
  audio.addEventListener("ended",()=>musicBtn.textContent="▶ Reproducir");
}

const specialEnvelope=document.getElementById("specialEnvelope");
const specialReveal=document.getElementById("specialReveal");
if(specialEnvelope && specialReveal){
  specialEnvelope.addEventListener("click",()=>{
    const isOpen=specialEnvelope.classList.toggle("open");
    specialEnvelope.setAttribute("aria-expanded",String(isOpen));
    specialReveal.classList.toggle("open",isOpen);
    specialReveal.setAttribute("aria-hidden",String(!isOpen));
  });
}
