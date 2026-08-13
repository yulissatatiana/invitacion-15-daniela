const EVENT_DATE="2026-10-03T20:00:00-05:00";
const openBtn=document.getElementById("openBtn"),opening=document.getElementById("opening"),page=document.getElementById("page");
openBtn.addEventListener("click",()=>{document.getElementById("envelope").classList.add("open");opening.classList.add("closed");page.classList.add("show");setTimeout(()=>document.querySelector(".intro")?.scrollIntoView({behavior:"smooth"}),550);});

const pad=n=>String(n).padStart(2,"0");
function updateCountdown(){let d=new Date(EVENT_DATE).getTime()-Date.now();
if(d<=0){["days","hours","minutes","seconds"].forEach(x=>document.getElementById(x).textContent="00");document.querySelector(".countdown-card h2").textContent="¡Hoy es el gran día!";return}
let s=Math.floor(d/1000),days=Math.floor(s/86400),hours=Math.floor(s%86400/3600),mins=Math.floor(s%3600/60),secs=s%60;
days=pad(days);document.getElementById("days").textContent=days;document.getElementById("hours").textContent=pad(hours);document.getElementById("minutes").textContent=pad(mins);document.getElementById("seconds").textContent=pad(secs);}
updateCountdown();setInterval(updateCountdown,1000);

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));

const audio=document.getElementById("music"),btn=document.getElementById("musicBtn");
audio.src="assets/musica.mp3";
btn.addEventListener("click",()=>{if(audio.paused){audio.play().then(()=>btn.textContent="❚❚ Pausar").catch(()=>alert("Para activar la música, sube el archivo de la canción como assets/musica.mp3."));}else{audio.pause();btn.textContent="▶ Reproducir";}});
