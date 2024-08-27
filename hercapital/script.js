document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Simulate payment processing
    processPayment();
});

function processPayment() {
    // Display the confirmation message
    document.getElementById('paymentForm').classList.add('hidden');
    document.getElementById('confirmationMessage').classList.remove('hidden');
}

