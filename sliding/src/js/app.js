// Overlay buttons. 
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signin');
// main container.
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    console.log("sign up clicked");
    container.classList.add('right-panel-active');
});
signInButton.addEventListener('click', () => {

    container.classList.remove('right-panel-active')
}
);
