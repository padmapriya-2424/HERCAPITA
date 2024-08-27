const cells = document.querySelectorAll('tbody td.cell');

cells.forEach(cell => {
    cell.addEventListener('click', function () {
        // Reset all cells
        cells.forEach(c => {
            c.classList.add('fade');
        });

        // Set the clicked cell as active
        this.classList.remove('fade');
        this.classList.add('active');

        // Update the content in Headers 2 to 6
        document.getElementById('header2-content').textContent = this.getAttribute('data-header2');
        document.getElementById('header3-content').textContent = this.getAttribute('data-header3');
        document.getElementById('header4-content').textContent = this.getAttribute('data-header4');
        document.getElementById('header5-content').textContent = this.getAttribute('data-header5');
        document.getElementById('header6-content').textContent = this.getAttribute('data-header6');
    });
});