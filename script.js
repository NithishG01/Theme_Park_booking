document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting immediately
    
    // Show the confirmation message
    document.getElementById('confirmation').style.display = 'block';

    // Optionally, hide the form
    document.getElementById('booking-form').style.display = 'none';
});