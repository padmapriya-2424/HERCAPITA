// header functionality


document.addEventListener('scroll', function() {
    const header = document.querySelector('.header-inner');
    
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
        header.classList.add('header-expanded');
    } else {
        header.classList.remove('header-expanded');
    }
});