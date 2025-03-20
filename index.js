
document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Username validation
    if (!username) {
        document.getElementById('usernameError').textContent = 'Enter the UserName.';
        isValid = false;
    } else {
        document.getElementById('usernameError').textContent = '';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Password validation
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z]).{8,}$/;
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least 8 characters, one uppercase, and one lowercase letter.';
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // You can add code here to submit the form data to a server
    }
});
