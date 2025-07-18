
  // Initialize ScrollReveal
  const sr = ScrollReveal({
    distance: '50px',
    duration: 700,
    delay: 300,
    easing: 'ease-in-out',
    opacity: 0,
    reset: true,
  });
  sr.reveal('.container', {
    delay: 200,
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
  });

  sr.reveal('.service-item', {
    delay: 200,
    origin: 'left',
    distance: '50px',
    duration: 1000,
  });

  sr.reveal('.industry-item', {
    delay: 200,
    origin: 'right',
    distance: '50px',
    duration: 1000,
  });

  sr.reveal('.tech_container', {
    delay: 200,
    origin: 'top',
    distance: '50px',
    duration: 1000,
  });

  sr.reveal('.feature', {
    delay: 200,
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
  });

  sr.reveal('.container h2', {
    delay: 300,
    origin: 'left',
    distance: '30px',
    duration: 1000,
  });

  sr.reveal('.container p', {
    delay: 300,
    origin: 'right',
    distance: '30px',
    duration: 1000,
  });

  sr.reveal('.service-item img, .industry-item img', {
    delay: 300,
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
  });