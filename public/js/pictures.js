document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "../IMAGES/Pictures/Homepage/Engineering/img1.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img2.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img3.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img4.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img5.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img6.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img7.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img8.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img9.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img10.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img11.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img12.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img13.jpeg",
        "../IMAGES/Pictures/Homepage/Engineering/img14.jpeg",
        "../IMAGES/Pictures/Homepage/Drafting/process.jpg",
        "../IMAGES/Pictures/Homepage/Engineering/image1.jpg",
        "../IMAGES/Pictures/Homepage/Engineering/image2.jpg",
        "../IMAGES/Pictures/Homepage/Engineering/Image3.jpg",
        "../IMAGES/Pictures/Services/Procurement/miningsupplies.jpg",
        "../IMAGES/Pictures/Homepage/PointCloud/Pointcloudimage.jpg",
        "../IMAGES/Pictures/Services/drafting/1.jpg",
        "../IMAGES/Pictures/Services/drafting/2.jpg",
        "../IMAGES/Pictures/Services/drafting/3.jpg",
        "../IMAGES/Pictures/Services/drafting/4.jpg",
        "../IMAGES/Pictures/Services/drafting/5.jpg",
        "../IMAGES/Pictures/Services/drafting/6.jpg",
        "../IMAGES/Pictures/Services/drafting/7.jpg",
        "../IMAGES/Pictures/Services/drafting/8.jpg",
        "../IMAGES/Pictures/Services/drafting/9.jpg",
        "../IMAGES/Pictures/Services/drafting/10.jpg",
        "../IMAGES/Pictures/Services/drafting/11.jpg",
        "../IMAGES/Pictures/Services/drafting/12.jpg",
        "../IMAGES/Pictures/Services/drafting/13.jpg",
        "../IMAGES/Pictures/Services/drafting/14.png",
        "../IMAGES/Pictures/Services/drafting/15.jpg",
    ];

    const galleryGrid = document.querySelector('.gallery-grid');
    const paginationInfo = document.querySelector('.pagination-info');
    const filterItems = document.querySelectorAll('.gal_tab .item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromURL = urlParams.get('filter');

    const imagesPerPage = 6;
    let currentPage = 1;
    let filteredImages = images;
    
    // Add canonical + noindex
    if (categoryFromURL) {
        const canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        canonicalTag.setAttribute('href', 'https://www.chinatagroup.co.za/gallery/');
        document.head.appendChild(canonicalTag);

        const robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        robotsMeta.setAttribute('content', 'noindex, follow');
        document.head.appendChild(robotsMeta);
    }

    // Fisher-Yates shuffle
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    function renderGallery(page = 1) {
        galleryGrid.innerHTML = '';
        const start = (page - 1) * imagesPerPage;
        const end = start + imagesPerPage;
        const imagesToShow = filteredImages.slice(start, end);
    
        imagesToShow.forEach(image => {
            const imgElement = document.createElement('div');
            imgElement.classList.add('gallery-item');
            
            const imageFileName = image.split('/').pop().split('.')[0].toLowerCase();
            let imageAltText = imageFileName;
            
            if (image.toLowerCase().includes('drafting')) {
                imageAltText = `Drafting tool image`;
            } else if (image.toLowerCase().includes('engineering')) {
                imageAltText = `Engineering project image`;
            } else if (image.toLowerCase().includes('mining')) {
                imageAltText = `Mining supplies image`;
            } else {
                imageAltText = `Chinata Group Service image`;
            }
            
            imgElement.innerHTML = `<img src="${image}" alt="${imageAltText}" title="${imageAltText}">`;
            galleryGrid.appendChild(imgElement);
        });
    
        const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
        paginationInfo.textContent = `< ${page} of ${totalPages} >`;
    
        prevButton.disabled = page === 1;
        nextButton.disabled = page === totalPages;
    }
    
    // function updateCanonicalTag() {
    //     const canonicalUrl = 'https://www.chinatagroup.co.za/gallery/';
    //     let canonicalTag = document.querySelector('link[rel="canonical"]');
    
    //     if (canonicalTag) {
    //         canonicalTag.href = canonicalUrl;
    //     } else {
    //         const newCanonicalTag = document.createElement('link');
    //         newCanonicalTag.rel = 'canonical';
    //         newCanonicalTag.href = canonicalUrl;
    //         document.head.appendChild(newCanonicalTag);
    //     }
    // }

    function filterGallery(category) {
        const newUrl = new URL(window.location);
        newUrl.pathname = '/gallery/';
        newUrl.searchParams.set('filter', category);
        window.history.pushState({}, '', newUrl);

        
        // Update the canonical tag
        //updateCanonicalTag(category);

        if (category === 'all') {
            filteredImages = [...images];
            shuffleArray(filteredImages);
        } else {
            filteredImages = images.filter(image =>
                image.toLowerCase().includes(category.toLowerCase())
            );
        }

        currentPage = 1;
        renderGallery();
    }

    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            filterItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const category = item.getAttribute('data-filter');
            filterGallery(category);
        });
    });

    if (categoryFromURL) {
        filterGallery(categoryFromURL);

        filterItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-filter') === categoryFromURL) {
                item.classList.add('active');
            }
        });
    } else {
        renderGallery();
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderGallery(currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderGallery(currentPage);
        }
    });

    window.addEventListener('popstate', () => {
        const newParams = new URLSearchParams(window.location.search);
        const newCategory = newParams.get('filter') || 'all';
        filterGallery(newCategory);

        filterItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-filter') === newCategory) {
                item.classList.add('active');
            }
        });
    });
});
