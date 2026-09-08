const progress=document.getElementById("progress");
const glow=document.querySelector(".cursor-glow");
window.addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(max>0?(scrollY/max)*100:0)+"%";
});
window.addEventListener("pointermove",e=>{
  if(glow){glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";}
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.querySelectorAll("a[href^='#']").forEach(a=>{
  a.addEventListener("click",e=>{
    const target=document.querySelector(a.getAttribute("href"));
    if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"});}
  });
});
