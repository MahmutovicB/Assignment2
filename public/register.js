console.log('register.js loaded');
$(document).ready(function() {
    console.log('Document ready');
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); 
        console.log('Form submitted');

        var formData = {
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val()
        };

        console.log('Form data:', formData);

        // Validate form data
        var isValid = true;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (formData.username.length < 2) {
            toastr.error("Username must be at least 2 characters long");
            isValid = false;
        }

        if (!emailPattern.test(formData.email)) {
            toastr.error("Please enter a valid email address");
            isValid = false;
        }

        if (formData.password.length < 8 || formData.password.length > 20) {
            toastr.error("Password must be 8-20 characters long");
            isValid = false;
        }

        if (isValid) {
            toastr.success('Validation successful');
            $('#successMessage').show();
            document.getElementById('registrationForm').reset();
        }

    });
});