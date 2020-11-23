
//Code was modified after watching youtube tutorial
// https://www.youtube.com/watch?v=wkdCpktUfGg&ab_channel=TheNetNinja

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("made it here")
    authentication.signOut().then(() => {
        console.log('user signed out');
    });
});