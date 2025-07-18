document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        distance: '50px',
        duration: 500,
        reset: true,
        easing: 'ease-in-out',
    });

    sr.reveal('.service_landing', { origin: 'top' });
    sr.reveal('.service_landing .transparent h3', { origin: 'left', delay: 200 });
    sr.reveal('.service_landing .transparent p', { origin: 'right', delay: 400 });

    sr.reveal('.main_cont .mini_container .title_container', { origin: 'left' });
    sr.reveal('.main_cont .mini_container .main .description', { origin: 'right', delay: 300 });

    sr.reveal('.main_cont .mini_container .main .image_container', { origin: 'left' });
    sr.reveal('.plasma_container .mini_container .main .description', { origin: 'right' });

    sr.reveal('.main_cont .mini_container .cta-button', { origin: 'top' });
    sr.reveal('.machining_container .main_machining .title_container', { origin: 'bottom' });
    sr.reveal('.machining_container .main_machining .descrip p', { origin: 'left', delay: 300 });
    sr.reveal('.machining_container .main_machining .gal_container .grid .list', { origin: 'right', interval: 200 });

    // Drafting Services Section
    sr.reveal('.drafting_services .mini_container', { origin: 'left' });
    sr.reveal('.drafting_services .mini_container .main', { origin: 'bottom', delay: 200 });
    sr.reveal('.drafting_services .mini_container .main .description p', { origin: 'top', delay: 400 });

    // Draft Section 2
    sr.reveal('.draft_section2 .mini_container', { origin: 'right' });
    sr.reveal('.draft_section2 .mini_container .main', { origin: 'left', delay: 200 });
    sr.reveal('.draft_section2 .mini_container .main ._sec_img', { origin: 'top', delay: 400 });
    sr.reveal('.draft_section2 .mini_container .main ._sec_des', { origin: 'bottom', delay: 600 });

    // Footer Quote Section 1
    sr.reveal('.footer_qoute_1 .container', { origin: 'bottom' });
    sr.reveal('.footer_qoute_1 .container .descrip', { origin: 'right', delay: 200 });
    sr.reveal('.footer_qoute_1 .container .descrip strong', { origin: 'left', delay: 400 });

    // Reveal the footer elements
    sr.reveal('.footer_qoute .container .descrip p', { origin: 'left' });
    sr.reveal('.footer_qoute .container .button', { origin: 'bottom' });
    sr.reveal('.footer .main_container', { origin: 'right', delay: 200 });
    sr.reveal('.footer .rights', { origin: 'top' });

    sr.reveal('.procurement_landing', { origin: 'top' });
    sr.reveal('.expo_container', { origin: 'bottom' });
    sr.reveal('.expo_container > .main_container', { origin: 'left' });
    sr.reveal('.expo_container > .main_container > .title_container', { origin: 'right', delay: 300 });
    sr.reveal('.expo_container > .main_container > .title_container > h3', { origin: 'top', delay: 400 });
    sr.reveal('.expo_container > .main_container > .subdescr', { origin: 'bottom', delay: 200 });
    sr.reveal('.expo_container > .main_container > .subdescr > p', { origin: 'left', delay: 300 });
    sr.reveal('.expo_container > .main_container > .main', { origin: 'right', delay: 100 });
    sr.reveal('.expo_container > .main_container > .main > .imp_container', { origin: 'left', delay: 300 });
    sr.reveal('.expo_container > .main_container > .main > .ex_container', { origin: 'right', delay: 200 });
    
    sr.reveal('.expo_container > .main_container > .main > .imp_container > .description', { origin: 'bottom', delay: 300 });
    sr.reveal('.expo_container > .main_container > .main > .ex_container > .description', { origin: 'bottom', delay: 500 });
    sr.reveal('.expo_container > .main_container > .main > .imp_container > .description > .img_container', { origin: 'top', delay: 200 });
    sr.reveal('.expo_container > .main_container > .main > .ex_container > .description > .img_container', { origin: 'top', delay: 100 });
    sr.reveal('.expo_container > .main_container > .main > .imp_container > .description > .expo_impo_title', { origin: 'left', delay: 200 });
    sr.reveal('.expo_container > .main_container > .main > .ex_container > .description > .expo_impo_descrp', { origin: 'right', delay: 400 });
    sr.reveal('.expo_container > .main_container > .main > .imp_container > .description > .expo_impo_descrp > p', { origin: 'bottom', delay: 200 });
    sr.reveal('.expo_container > .main_container > .main > .ex_container > .description > .expo_impo_title > p', { origin: 'top', delay: 300 });
  
});



