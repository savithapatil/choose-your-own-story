

//listen to see if authorization status changes
authentication.onAuthStateChanged(user => {
    if(user != null){
    }
})
//Code 
var playersRef = firebase.database().ref("user_info/");
// Will give the person's name for the game

function getName() {
    playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
        console.log("Name 12 " + data.val().name);
        // console.log("day 1 is " + data.val().day1); 
        // console.log("day 2 is " + data.val().day2);
        var name = data.val().name 
        return name;
    });
}
