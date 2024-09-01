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
