const scrollContainer = document.getElementById('scrollContainer');
    
scrollContainer.addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
        scrollContainer.scrollLeft += event.deltaY * 4; // Increase scroll distance by multiplying deltaY
        event.preventDefault(); // Prevent the default vertical scroll behavior
    }
}, { passive: false }); // Set passive to false to call preventDefault