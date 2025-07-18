document.addEventListener('DOMContentLoaded', () => {
   
    ScrollReveal().reveal(
      '.gallery_landing, .gal_tab, .gallery-main, .contact-container .inn_container .main_container, .form_container, .border_container',
      {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        delay: 200,
        easing: 'ease-in-out',
        interval: 100,
        opacity: 0,
        reset: true,
      }
    );
  
    ScrollReveal().reveal('.gallery_landing h3, .gallery_landing p, .contact-form label, .contact-form input, .contact-form textarea', {
      origin: 'left', 
      distance: '30px',
      duration: 600,
      delay: 100,
      easing: 'ease-in-out',
      opacity: 0,
      interval: 50,
      reset: true,
    });

  ScrollReveal().reveal('.contact-form .form-group:nth-child(1) input', {
    origin: 'left',
    distance: '50px',
    duration: 800,
    delay: 100,
    easing: 'ease-in-out',
    opacity: 0,
    reset: true,
  });

  ScrollReveal().reveal('.contact-form .form-group:nth-child(2) input', {
    origin: 'right',
    distance: '50px',
    duration: 800,
    delay: 200,
    easing: 'ease-in-out',
    opacity: 0,
    reset: true,
  });

  ScrollReveal().reveal('.contact-form .form-group:nth-child(3) textarea', {
    origin: 'top', 
    distance: '50px',
    duration: 800,
    delay: 300,
    easing: 'ease-in-out',
    opacity: 0,
    reset: true,
  });

  ScrollReveal().reveal('.contact-form .form-group:nth-child(4) button', {
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    delay: 400,
    easing: 'ease-in-out',
    opacity: 0,
    reset: true,
  });
  });
  