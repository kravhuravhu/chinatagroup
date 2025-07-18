document.addEventListener('DOMContentLoaded', () => {
  const footerContainer = document.getElementById('footer_container');

  const footer_logo = footerContainer.getAttribute('data-logo') || 'white.png';

  const getImagePath = (imageName) => {
    const basePath = window.location.pathname.includes('/Pages/')
      ? '../IMAGES/'
      : 'IMAGES/';
    return `${basePath}${imageName}`;
  };

  footerContainer.innerHTML = `
    <div class="main_container">
      <div class="fo_logo">
        <img src="${getImagePath(footer_logo)}" alt="logo"/>
        <p>Innovating Mining and Industrial Solutions for a Sustainable Future</p>
      </div>
      <div class="fo_links">
        <h4><b>Quick Links</b></h4>
        <ul>
          <a href="/">Home</a>
          <a href="/engineering">Services</a>
          <a href="/about">About Us</a>
          <a href="/gallery">Gallery</a>
          <a href="/careers">Career</a>
          <a href="/contact">Contact Us</a>
          <a href="/quote">Request a Quote</a>
        </ul>
      </div>
      <div class="fo_cert">
        <h4><b>Certifications & Compliance</b></h4>
        <p>ISO 45001<br><span>Occupational Health & Safety</span></p>
        <p>ISO 9001<br><span>Quality Management System</span></p>
        <p>ISO 14001<br><span>Environmental Management System</span></p>
        <p>B-BBEE Level 1</p>
      </div>
      <div class="fo_contact">
        <h4><b>Contact Us</b></h4>
        <p><b>Email:</b><span>admin@chinatagroup.co.za</span></p>
        <p><b>Phone:</b><span>+27 69 954 5411</span></p>
        <div class="icons">
          <a href="https://www.facebook.com/profile.php?id=61572800102199" target="_blank">
            <img src="../${getImagePath('Social/facebook.png')}" alt="fb_icon"/>
          </a>
          <a href="https://wa.me/27699545411" target="_blank">
            <img src="../${getImagePath('Social/whatsapp.png')}" alt="wa_icon"/>
          </a>
          <a href="https://www.linkedin.com/company/chinata-group-pty-ltd/" target="_blank">
            <img src="../${getImagePath('Social/linkedin.png')}" alt="in_icon"/>
          </a>
          <a href="mailto:webquery@chinatagroup.co.za" target="_blank">
            <img src="../${getImagePath('Social/email.png')}" alt="mail_icon"/>
          </a>
        </div>
      </div>
    </div>
    <div class="rights">
      <p>Copyright © 2025 ChinataGroup. All rights reserved.</p>
    </div>
  `;
});
