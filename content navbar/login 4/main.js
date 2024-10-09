// main.js: Correctly toggle between active/inactive states
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// When clicking "Sign Up"
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

// When clicking "Sign In"
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
