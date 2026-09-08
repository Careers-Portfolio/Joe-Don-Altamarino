(() => {
  const progress = document.getElementById('progress');
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  addEventListener('scroll', update, {passive:true});
  update();

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.08});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();