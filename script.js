const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const login = document.getElementById('Login')
const signupAccept = document.getElementById('SignupAccept')
let DbPhoneNo = document.getElementById('DbPhoneNo')
let DbPassword = document.getElementById('DbPassword')
// so by clicking the signup or signin button the animation moves showing the intended forms for the clicked button
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
DataBase={}
function SaveDetails() {
    database.DbPhoneNo=DbPassword;
}


function validateLogin() {
    // Check if the username and password match your database values
    for Dbusername in Database { 

        if (username === "your_username" && password === "your_password") {
        // Redirect to the dashboard.html page
        window.location.href = "index.html";
        } 
    else {
        alert("Invalid username or password. Please try again.");
        }
    }
}

// From here, i will add the google api manipulation code and try not to mess with it much as it is quite delicate + complex