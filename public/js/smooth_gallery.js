// Initialize ScrollReveal
const sr = ScrollReveal({
    distance: '50px',
    duration: 500,
    delay: 300,
    easing: 'ease-in-out',
    opacity: 0,
    reset: false,
  });
  
  // Gallery Landing Container
  sr.reveal('.gallery_landing', { delay: 200, origin: 'bottom' });
  sr.reveal('.gallery_landing > .transparent > h3', { delay: 300, origin: 'top' });
  sr.reveal('.gallery_landing > .transparent > p', { delay: 400, origin: 'left' });
  sr.reveal('.gallery_landing > .transparent > p > span > img', { delay: 500, origin: 'right' });
  
  // Gallery Tab Filter
  sr.reveal('.gal_tab', { delay: 200, origin: 'bottom' });
  sr.reveal('.gal_tab > .container', { delay: 300, origin: 'top' });
  sr.reveal('.gal_tab > .container > .item', {
    delay: 400,
    origin: 'left',
    interval: 200,
  });
  
  // Gallery Main
  sr.reveal('.gallery-main', { delay: 200, origin: 'bottom' });
  sr.reveal('.gallery-main > .gallery-grid', { delay: 300, origin: 'top' });
  sr.reveal('.gallery-main > .gallery-grid > .gallery-item', {
    delay: 400,
    origin: 'right',
    interval: 200,
  });
  sr.reveal('.gallery-main > .gallery-grid > .gallery-item > img', { delay: 500, origin: 'bottom' });
  
  sr.reveal('.gallery-main > .bg-blue', { delay: 600, origin: 'left' });
  
  sr.reveal('.gallery-main > .gallery-footer', { delay: 300, origin: 'top' });
  sr.reveal('.gallery-main > .gallery-footer > .prev-button', { delay: 400, origin: 'left' });
  sr.reveal('.gallery-main > .gallery-footer > .next-button', { delay: 500, origin: 'right' });
  