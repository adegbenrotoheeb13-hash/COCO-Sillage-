// WhatsApp order button behavior
const WA_NUMBER = '2349033714086';
document.querySelectorAll('.order-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const name = btn.dataset.name || 'COCO SILLAGE product';
    const msg = encodeURIComponent(`Hello COCO SILLAGE, I'd like to order: ${name}. Please send details.`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  });
});

// slider
(function(){
  const slider = document.getElementById('slider');
  if (!slider) return;
  const slides = slider.querySelector('.slides');
  const total = slides.children.length;
  let idx = 0;
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');

  function go(i){
    idx = (i + total) % total;
    slides.style.transform = `translateX(-${idx * 100}%)`;
  }
  if (prev) prev.addEventListener('click', ()=>go(idx-1));
  if (next) next.addEventListener('click', ()=>go(idx+1));

  // swipe
  let startX = 0;
  slides.addEventListener('touchstart', e=> startX = e.touches[0].clientX);
  slides.addEventListener('touchend', e=>{
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 40) go(idx+1);
    if (endX - startX > 40) go(idx-1);
  });
})();
