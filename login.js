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
        //window.location.href = "day1.html";
    });
});