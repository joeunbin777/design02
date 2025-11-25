// Typing animation
const typedEl = document.getElementById('typed');
const subEl = document.getElementById('sub');
const ctaEl = document.getElementById('cta');
const text = "Hi, I'm Eunbin.";
let idx = 0;

function typeOnce(){
  if(idx <= text.length){
    typedEl.textContent = text.slice(0, idx);
    idx++;
    let delay = 70;
    const ch = text.charAt(idx-1);
    if(ch === ',' || ch === '.') delay = 300;
    setTimeout(typeOnce, delay);
  } else {
    setTimeout(()=>{
      subEl.style.opacity = 1;
      subEl.style.transform = 'translateY(0)';
      ctaEl.style.opacity = 1;
      ctaEl.style.transform = 'translateY(0)';
    }, 220);
  }
}

window.addEventListener('load', ()=>{ typeOnce(); });

// Chat panel
const chatToggle = document.getElementById('chatToggle');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
const chatForm = document.getElementById('chatForm');
const chatBody = document.getElementById('chatBody');

chatToggle.addEventListener('click', ()=>{
  chatPanel.classList.toggle('open');
  chatPanel.setAttribute('aria-hidden', chatPanel.classList.contains('open') ? 'false' : 'true');
});
chatClose.addEventListener('click', ()=>{ 
  chatPanel.classList.remove('open'); 
  chatPanel.setAttribute('aria-hidden','true'); 
});

chatForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const input = document.getElementById('chatInput');
  const v = input.value.trim();
  if(!v) return;
  const u = document.createElement('div'); u.textContent = v; u.style.margin='8px 0'; u.style.fontWeight='600';
  chatBody.appendChild(u);
  input.value = '';
  const bot = document.createElement('div'); bot.textContent = 'Kriss: This is a demo reply.'; bot.style.margin='8px 0'; bot.style.opacity='.85';
  setTimeout(()=>chatBody.appendChild(bot), 700);
  chatBody.scrollTop = chatBody.scrollHeight;
});

// Scroll animation
window.addEventListener('DOMContentLoaded', ()=>{
  const hero = document.querySelector('.hero');
  const portfolioMain = document.querySelector('.portfolio-main img');
  const thumbs = document.querySelectorAll('.portfolio-thumbs img');

  window.addEventListener('scroll', ()=>{
    const scrollY = window.scrollY;

    // Hero fade out
    hero.style.opacity = Math.max(0, 1 - scrollY / 00);
    hero.style.transform = `translateY(-${scrollY / 3}px)`;

    // Portfolio main fade in
    if(scrollY > 200) portfolioMain.classList.add('show');

    // Thumbs fade in
    if(scrollY > 350){
      thumbs.forEach((t,i)=>{
        setTimeout(()=>t.classList.add('show'), i*150);
      });
    }
  });
});

// CTA 클릭 시 portfolio 섹션으로 부드럽게 스크롤 이동
window.addEventListener('DOMContentLoaded', () => {
  const ctaEl = document.getElementById('cta');
  const portfolioSection = document.querySelector('.portfolio');

  if(ctaEl && portfolioSection){
    ctaEl.addEventListener('click', () => {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

document.querySelector('a[href="#projects"]').addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelector('a[href="#footer"]').addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#footer").scrollIntoView({
        behavior: "smooth"
    });
});
