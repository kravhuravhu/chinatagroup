<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Browse Chinata Group's Gallery showcasing engineering, drafting, and procurement projects with innovative solutions and quality results.">
    <meta name="keywords" content="Chinata Group Gallery, projects, engineering, drafting, procurement, innovation">
    <meta name="author" content="Chinata Group">
    <title>Gallery | Chinata Group</title>
    <meta property="og:title" content="Chinata Group | Gallery">
    <meta property="og:description" content="Browse Chinata Group's Gallery showcasing engineering, drafting, and procurement projects with innovative solutions and quality results.">
    <meta property="og:image" content="IMAGES/default.png">
    <meta property="og:url" content="https://www.chinatagroup.co.za/gallery">
    <meta property="og:type" content="website">
    <link rel="icon" href="IMAGES/icon.png" type="image/x-icon">
    <link rel="stylesheet" href="{{ asset('css/styles_home.css') }}" type="text/css"/>
    <link rel="stylesheet" href="{{ asset('css/about.css') }}" type="text/css"/>
    <link rel="stylesheet" href="{{ asset('css/gallery.css') }}" type="text/css"/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="canonical" href="https://www.chinatagroup.co.za/gallery" />

    <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "WebPage",
      "name": "Gallery | Chinata Group",
      "url": "https://www.chinatagroup.co.za/gallery",
      "description": "Browse Chinata Group's Gallery showcasing engineering, drafting, and procurement projects with innovative solutions and quality results.",
      "image": "https://www.chinatagroup.co.za/IMAGES/default.png",
      "publisher": {
        "@type": "Organization",
        "name": "Chinata Group",
        "logo": "https://www.chinatagroup.co.za/IMAGES/default.png",
        "url": "https://www.chinatagroup.co.za"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+27-82-481-5338",
        "contactType": "Customer Service"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61572800102199",
        "https://www.linkedin.com/company/chinata-group-pty-ltd/",
        "https://wa.me/27699545411"
      ]
    }
    </script>
  </head>

  <body>
    <section class="nav_container">
      <div>
        <nav id="nav_bar" data-logo="white.png"></nav>
      </div>
    </section>
    <section class="gallery_landing abt_landing">
      <section class="transparent">
        <h3>Gallery</h3>
        <p>
          <b>Chinata Group</b>
          <span>
            <img src="IMAGES/right-arrow.png" alt="arrow-right"/>
              Projects & Innovation
          </span>
        </p>
      </section>
    </section>
    <section class="gal_tab">
      <div class="container">
        <div class="item active" data-filter="all">All</div>
        <div class="item" data-filter="engineering">Engineering</div>
        <div class="item" data-filter="drafting">Drafting</div>
        <div class="item" data-filter="procurement">Procurement</div>
      </div>
    </section>
    <main class="gallery-main blur_container">
        <div class="bg-blue"></div>
        <div class="gallery-grid">
            <!-- images on js -->
        </div>
        <div class="gallery-footer">
            <p class="pagination-info">&lt; 1 of x &gt;</p>
            <button class="prev-button">Previous</button>
            <button class="next-button">Next</button>
        </div>
    </main>
    
    <footer class="footer" id="footer_container" data-logo="white.png"></footer>
    <script src="js/footer.js"></script>
    <script src="js/nav_ddw.js"></script>
    <script src="js/pictures.js"></script>

    <!-- <script src="https://unpkg.com/scrollreveal"></script>
    <script src="js/smooth_gallery.js"></script> -->
</body>
</html>
