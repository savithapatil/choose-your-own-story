
//listen to see if authorization status changes
authentication.onAuthStateChanged(user => {
    console.log(user);
})



//Signup code
const signupform = document.querySelector('#signup-form');
signupform.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get user info
    const email = signupform['email_value'].value;

    // Get password
    const password = signupform['password_value'].value;

    // Get Name
    var name = signupform['name_value'].value;

    Cookies.set('Email', email);
   // Code to create account
   // authentication was initialized in signup.html.
   // We can use the authentication variable from
   // signup.html because it was initialized before 
   // calling this file
   authentication.createUserWithEmailAndPassword(email, password).then(cred => {
       // First save data to database, only save name, and email in function
       // but add achievements directly in the function
        
     savedata(name, email, 1);

        //go to day 1 to start game
       window.location.href = "intro.html";
   });
});



// Function to get the form values
// based off their id
function getformvalue(id) {
    return document.getElementById(id).value;
}

// Creates user data for name, email, and all 
// achievements possible
// If I can modify these values for achievements
// then I've won
function savedata(name, email, UID) {
    // var datatosave = user_info.push();
    // datatosave.set({
  
       // })
    database.ref('/users' ).push({
      name: name,
        email: email,
        day1: false,
        day2: false,
        day3: false,
        day4: false,
        befriend_alex: false,
        befriend_katie: false,
        befriend_benjy: false,
        befriend_ella: false,
        befriend_gabby: false,
        befriend_theo: false,
        befriend_zach: false,
        
    })
}
