function validateForm(event) {
    event.preventDefault(); 

    var isValid = true;

    var name = document.getElementById('cname').value;
    var email = document.getElementById('cemail').value;
    var date = document.getElementById('cdate').value;
    var password = document.getElementById('cpassword').value;


    if (name.length < 2) {
        alert("Name must be at least 2 characters long");
        isValid = false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        isValid = false;
    }

    if (!date) {
        alert("Please select a date");
        isValid = false;
    }

    if (password.length < 8 || password.length > 20) {
        alert("Password must be 8-20 characters long");
        isValid = false;
    }

    if (isValid) {
        document.getElementById('contactForm').submit();
    }
}

function updateProgressBar() {
    var password = document.getElementById('cpassword').value;
    var progressBar = document.getElementById('pb');

    var passwordStrength = 0;
    if (password.length >= 8) passwordStrength += 25;
    if (password.length >= 12) passwordStrength += 25;
    if (/[A-Z]/.test(password)) passwordStrength += 25;
    if (/[0-9]/.test(password)) passwordStrength += 25;

    progressBar.style.width = passwordStrength + '%';
    progressBar.setAttribute('aria-valuenow', passwordStrength);

    if (passwordStrength < 50) {
        progressBar.classList.remove('bg-success', 'bg-info');
        progressBar.classList.add('bg-warning');
        progressBar.innerText = 'Weak';
    } else if (passwordStrength < 75) {
        progressBar.classList.remove('bg-success', 'bg-warning');
        progressBar.classList.add('bg-info');
        progressBar.innerText = 'Moderate';
    } else {
        progressBar.classList.remove('bg-warning', 'bg-info');
        progressBar.classList.add('bg-success');
        progressBar.innerText = 'Strong';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cpassword').addEventListener('input', updateProgressBar);
});