document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});revealItems.forEach((el,i)=>{el.style.transitionDelay=(i%3)*65+'ms';observer.observe(el)})}else revealItems.forEach(el=>el.classList.add('visible'));
document.querySelectorAll('.dropdown').forEach(drop=>{document.addEventListener('click',e=>{if(!drop.contains(e.target))drop.open=false});drop.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>drop.open=false))});

// Playful sticker layer: lightweight CSS/emoji only, no image downloads.
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const art=document.querySelector('.hero-art');
 if(art){[['✦','sticker-star one'],['☺','sticker-smile two'],['⚡','sticker-zap three']].forEach(([symbol,cls])=>{const el=document.createElement('span');el.className='play-sticker '+cls;el.textContent=symbol;el.setAttribute('aria-hidden','true');art.appendChild(el)});}
 document.querySelectorAll('.service-card').forEach((card,i)=>{const mini=document.createElement('span');mini.className='sticker-mini';mini.setAttribute('aria-hidden','true');mini.textContent=['💬','🖍️','🎬','🛸','🚀','🔎','💌','📊','🤳'][i%9];card.appendChild(mini);const bit=document.createElement('span');bit.className='confetti-bit';bit.textContent=['✦','✳','★'][i%3];bit.setAttribute('aria-hidden','true');card.appendChild(bit)});
}
