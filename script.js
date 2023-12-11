const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
// so by clicking the signup or signin button the animation moves showing the intended forms for the clicked button
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// From here, i will add the google api manipulation code and try not to mess with it much as it is quite delicate + complex