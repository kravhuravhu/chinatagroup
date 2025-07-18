// Initialize ScrollReveal
const sr = ScrollReveal({
    distance: '50px',
    duration: 700,
    delay: 300,
    easing: 'ease-in-out',
    opacity: 0,
    reset: true,
  });
  
  // Basic reveals
  //sr.reveal('.nav_container', { delay: 200, origin: 'top' });
  sr.reveal('.abt_landing', { delay: 300, origin: 'bottom' });
  sr.reveal('.abt_intro', { delay: 400, origin: 'bottom' });
  sr.reveal('.stry_container', { delay: 500, origin: 'bottom' });
  sr.reveal('.addition_dit', { delay: 600, origin: 'bottom' });
  sr.reveal('.val_container', { delay: 700, origin: 'bottom' });
  sr.reveal('.vismis_container', { delay: 800, origin: 'bottom' });
  sr.reveal('.ind_container', { delay: 900, origin: 'bottom' });
  sr.reveal('.cert_container', { delay: 1000, origin: 'bottom' });
  
  // Nested reveals
  sr.reveal('.nav-container > div', { delay: 100, origin: 'top' });
  sr.reveal('.abt_landing .transparent > h3', { delay: 200, origin: 'top' });
  sr.reveal('.abt_landing .transparent > p', { delay: 300, origin: 'top' });
  sr.reveal('.abt_intro > div > p', { delay: 400, origin: 'bottom' });
  sr.reveal('.stry_container > .stry_container_in > .image_container', { delay: 500, origin: 'right' });
  sr.reveal('.addition_dit > .ddimg_container', { delay: 600, origin: 'right' });
  sr.reveal('.story_container > div > p', { delay: 700, origin: 'left' });
  sr.reveal('.val_container > .val_in_cont > .values > .cr', { delay: 800, origin: 'bottom' });
  sr.reveal('.vismis_container > .main_vimi > .vision_', { delay: 900, origin: 'left' });
  sr.reveal('.ind_container > .ind_ > .solutions_cont > .grid > .li', { delay: 1000, origin: 'bottom' });
  sr.reveal('.cert_container .main_cert > .sub_description > p', { delay: 1100, origin: 'top' });
  