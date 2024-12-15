document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Basic form validation
    if (name && email && message) {
        document.getElementById('formMessage').textContent = 'Thank you for reaching out, ' + name + '! We will get back to you soon.';
        document.getElementById('formMessage').style.color = 'green';
        
        // Clear form fields
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').textContent = 'Please fill out all fields.';
        document.getElementById('formMessage').style.color = 'red';
    }
});