let signUpButton = document.getElementById('signUp');
let signInButton = document.getElementById('signIn');
let container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});
