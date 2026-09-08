(function(){
  const progress=document.getElementById('progress');
  const update=()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(h>0?(window.scrollY/h)*100:0)+'%'};
  window.addEventListener('scroll',update,{passive:true});update();
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
})();
