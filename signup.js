//Signup code
const signupform = document.querySelector('#signup-form');
signupform.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get user info
    const email = signupform['email_value'].value;

    // Get password
    const password = signupform['password_value'].value;

    // Get Name
    const name = signupform['name_value'].value;

   // Code to create account
   // authentication was initialized in signup.html.
   // We can use the authentication variable from
   // signup.html because it was initialized before 
   // calling this file
   authentication.createUserWithEmailAndPassword(email, password).then(cred => {
       //Code to reset the form
        signupform.reset();

        // Code to go to login page to actually login
        window.location.href = "login.html";
   });


});