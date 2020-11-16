
//Code was modified after watching youtube tutorial
// https://www.youtube.com/watch?v=wkdCpktUfGg&ab_channel=TheNetNinja

//Signup code
const signupform = document.querySelector('#signup-form');
signupform.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get user info
    const email = signupform['email_value'].value;

    // Get password
    const password = signupform['password_value'].value;

   // Code to create account
   // authentication was initialized in signup.html.
   // We can use the authentication variable from
   // signup.html because it was initialized before 
   // calling this file
   authentication.createUserWithEmailAndPassword(email, password).then(cred => {
       //Code to reset the form
        signupform.reset();

        //TODO: Code to jump to login page, idk how to do that tbh
   })


})

//Code to handle login information
const loginform = document.querySelector('#login-form');
loginform.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user info
    const email = loginform['login-email'].value;

    // Get password
    const password = loginform['login-password'].value;

    authentication.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        loginform.reset();
    });

})