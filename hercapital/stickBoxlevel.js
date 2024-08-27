// script.js
document.addEventListener('DOMContentLoaded', function () {
    const rightContainer = document.querySelector('.right-container');
    const footer = document.querySelector('.footer');
    const footerOffset = footer.getBoundingClientRect().top + window.scrollY;

    function adjustRightContainer() {
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > footerOffset) {
            rightContainer.style.position = 'absolute';
            rightContainer.style.bottom = '20px'; // Add some spacing from the footer
        } else {
            rightContainer.style.position = 'fixed';
            rightContainer.style.top = '20%';
        }
    }

    window.addEventListener('scroll', adjustRightContainer);
    adjustRightContainer(); // Initial adjustment
});