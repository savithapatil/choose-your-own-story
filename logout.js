//listen to see if authorization status changes
authentication.onAuthStateChanged(user => {
    console.log(user);
})
//Code was modified after watching youtube tutorial
// https://www.youtube.com/watch?v=wkdCpktUfGg&ab_channel=TheNetNinja

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    Cookies.remove("Email");
    authentication.signOut().then(() => {
        window.location.href = "index.html"
    });
});