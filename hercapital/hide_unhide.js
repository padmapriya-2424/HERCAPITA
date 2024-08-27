function toggleBoxes() {
    const boxes = document.querySelectorAll('.user-boxes .box');
    const button = document.querySelector('.toggle-button');
    const gradientOverlay = document.querySelector('.gradient-overlay');

    if (button.textContent === 'load more') {
        // Show all boxes
        boxes.forEach(box => box.style.display = 'block');
        // Change button text
        button.textContent = 'Hide';
        // Move gradient overlay and button down
        gradientOverlay.classList.add('reduced');
    } else {
        // Hide some boxes
        boxes.forEach((box, index) => {
            if (index >= 6) { // Adjust the index based on how many boxes you want to hide
                box.style.display = 'none';
            }
        });
        // Change button text
        button.textContent = 'load more';
        // Move gradient overlay and button back up
        gradientOverlay.classList.remove('reduced');
    }
}