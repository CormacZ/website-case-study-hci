// Wait for the DOM content to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Form validation function
    const validateForm = (formId) => {
        const form = document.getElementById(formId);
        const inputs = form.querySelectorAll('input, select');
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                input.style.border = '2px solid red';
                valid = false;
            } else {
                input.style.border = '1px solid #ccc';
            }
        });

        return valid;
    };

    // Event listener for Sign-Up form
    const signUpForm = document.getElementById('signup-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', (event) => {
            if (!validateForm('signup-form')) {
                event.preventDefault();
                alert('Please fill in all the required fields.');
            }
        });
    }

    // Event listener for Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            if (!validateForm('login-form')) {
                event.preventDefault();
                alert('Please fill in all the required fields.');
            }
        });
    }

    // Event listener for Booking form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            if (!validateForm('booking-form')) {
                event.preventDefault();
                alert('Please fill in all the required fields.');
            }
        });
    }

});
