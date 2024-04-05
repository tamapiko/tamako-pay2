document.addEventListener('DOMContentLoaded', function() {
    const loginFormContainer = document.getElementById('loginFormContainer');
    const signupFormContainer = document.getElementById('signupFormContainer');
    const showSignupFormLink = document.getElementById('showSignupForm');
    const showLoginFormLink = document.getElementById('showLoginForm');

    showSignupFormLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginFormContainer.classList.add('hidden');
        signupFormContainer.classList.remove('hidden');
    });

    showLoginFormLink.addEventListener('click', function(event) {
        event.preventDefault();
        signupFormContainer.classList.add('hidden');
        loginFormContainer.classList.remove('hidden');
    });
});
