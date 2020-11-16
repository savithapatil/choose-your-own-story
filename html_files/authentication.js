
//Code was modified after watching youtube tutorial
// https://www.youtube.com/watch?v=wkdCpktUfGg&ab_channel=TheNetNinja

//Signup code
const signupform = document.querySelector('#signup-form');
signupform.addEventListener('submit', (e) => {
    event.preventDefault();
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
       console.log(cred);
       
   })

})