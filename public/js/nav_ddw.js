document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.getElementById('nav_bar');
    if (navBar) {
        const logoImage = navBar.getAttribute('data-logo') || 'default.png';
    
        const getImagePath = (imageName) => {
          const basePath = window.location.pathname.includes('/Pages/')
            ? '../IMAGES/'
            : 'IMAGES/';
          return `${basePath}${imageName}`;
        };
        
        // engineering base url with trail
        const engineeringUrl = '/engineering/';
    
        navBar.innerHTML = `
          <nav>
            <div class="logo">
              <a href="#">
                <img src="${getImagePath(logoImage)}" alt="Chinata Group Logo">
              </a>
            </div>
            <div class="menu-toggle" aria-label="Toggle navigation">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="nav-links">
              <div class="links">
                <a href="/" class="home">HOME</a>
                <div class="dropdown">
                  <a href="" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">SERVICES</a>
                  <div class="dropdown-menu">
                    <a href="" class="engin_ddw">Engineering</a>
                    <div class="sub-dropdown">
                      <a href="${engineeringUrl}">Fabrication</a>
                      <a href="${engineeringUrl}?section=machining">Machining</a>
                      <a href="${engineeringUrl}?section=plasma">Plasma Cutting</a>
                    </div>
                    <a href="/drafting">Drafting</a>
                    <a href="/procurement">Procurement</a>
                  </div>
                </div>
                <a href="/about">ABOUT US</a>
                <a href="/gallery">GALLERY</a>
                <a href="/careers">CAREERS</a>
                <a href="/contact">CONTACT US</a>
                <div class="quote-button">
                  <a href="/quote">REQUEST A QUOTE</a>
                </div>
              </div>
            </div>
          </nav>
        `;
    
        const currentPath = window.location.pathname;
    
        const isServiceActive = (path) => {
          return (
            path.includes('/engineering') ||
            path.includes('/machining') ||
            path.includes('/plasma') ||
            path.includes('/drafting') ||
            path.includes('/procurement') ||
            path.includes('/technology')
          );
        };
    
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
          const linkPath = link.getAttribute('href');
          if (currentPath === linkPath) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
    
        // dropdown link is active
        if (isServiceActive(currentPath)) {
          document.querySelector('.dropdown-toggle').classList.add('active');
        } else if (currentPath === '/' || currentPath === '/welcome') {
          document.querySelector('.home').classList.add('active');
        }
    
        // Dropdown toggle
        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
          toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
              if (menu !== dropdownMenu) menu.style.display = 'none';
            });
            if (dropdownMenu) {
              dropdownMenu.style.display =
                dropdownMenu.style.display === 'block' ? 'none' : 'block';
            }
          });
        });
    
        document.querySelectorAll('.engin_ddw').forEach(subToggle => {
          subToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const subDropdown = subToggle.nextElementSibling;
            if (subDropdown) {
              subDropdown.style.display =
                subDropdown.style.display === 'block' ? 'none' : 'block';
            }
          });
        });
    
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu, .sub-dropdown').forEach(menu => {
              menu.style.display = 'none';
            });
          }
        });
    
        // Menu toggle functionality
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const landContainer = document.querySelector('.land_container');
        const otherSections = document.querySelector('.blur_container');
    
        menuToggle.addEventListener('click', () => {
          menuToggle.classList.toggle('active');
          navLinks.classList.toggle('active');
    
          // blur effect on other sections
          if (navLinks.classList.contains('active')) {
            //landContainer.classList.add('blur-effect');
            if (otherSections) {
              otherSections.classList.add('blur-effect');
            }
          } else {
            //landContainer.classList.remove('blur-effect');
            if (otherSections) {
              otherSections.classList.remove('blur-effect');
            }
          }
        });
    }
    const params = new URLSearchParams(window.location.search);
    
    // /engineering path
    if (window.location.pathname === '/engineering') {
      const newUrl = new URL(window.location);
      newUrl.pathname = '/engineering/';
      window.history.replaceState({}, '', newUrl);
    }
    
    // Scroll to section only on /engineering/
    if (window.location.pathname === '/engineering/') {
      const section = params.get('section');
      if (section) {
        const targetSection = document.querySelector(`.${section}_container`);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    // unique page
    if (params.has('section')) {
        const canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', 'https://www.chinatagroup.co.za/engineering/');
        document.head.appendChild(canonical);
    
        // const meta = document.createElement('meta');
        // meta.setAttribute('name', 'robots');
        // meta.setAttribute('content', 'noindex, follow');
        // document.head.appendChild(meta);
    }
});