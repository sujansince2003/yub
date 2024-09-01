document.addEventListener('DOMContentLoaded', function() {
    // Handle refresh when footer is clicked
    document.querySelector('.footer').addEventListener('click', function() {
        location.reload();
    });

    // Handle refresh when logo is clicked
    document.querySelector('.logo').addEventListener('click', function() {
        location.reload();
    });

    // Handle refresh when home link is clicked
    document.querySelector('.nav a[href="#"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        location.reload();
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const mainContent = document.querySelector('.main-content');

    sidebarToggle.addEventListener('click', () => {
        const isSidebarVisible = sidebar.style.left === '0px';

        if (isSidebarVisible) {
            sidebar.style.left = '-250px';
            mainContent.style.marginLeft = '0';
        } else {
            sidebar.style.left = '0';
            mainContent.style.marginLeft = '250px';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const images = document.querySelectorAll('.gallery-item img');
    let currentIndex = 0;

    function showImage(index) {
        lightboxImage.src = images[index].src;
        currentIndex = index;
        lightbox.style.display = 'block';
    }

    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            showImage(index);
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    // Close lightbox when clicking outside of the image
    lightbox.addEventListener('click', function(event) {
        if (event.target !== lightboxImage && event.target !== prevBtn && event.target !== nextBtn) {
            lightbox.style.display = 'none';
        }
    });
});
