const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){
  toggle.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
  });
});
