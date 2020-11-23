

//listen to see if authorization status changes
authentication.onAuthStateChanged(user => {
    if(user != null){
    }
})
//Code 
var playersRef = firebase.database().ref("user_info/");
// Will give the person's name for the game

