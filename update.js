var uid;
authentication.onAuthStateChanged(user => {
    if(user != null){
        uid = user.uid
    }
})



// var user = firebase.auth().currentUser;
// console.log("Testing updateprofile " + user);
// user.updateProfile({
//     name:  "test"
// }).then(
//     console.log("Did ??");
// )

function updateachievements(achievement_name){
    var currentuser = firebase.auth().currentUser;
    var fieldName = "day2"
    //console.log("curr user: " + currentuser.uid);
    //console.log("Made it here tonight");
    //database.ref("users/" + uid).update({name: "AGC 123"}); //This one works
    //database.ref("users/-MMrq6QLlwJuIu7LT5BA").update({day1: "true"})
    //console.log("UID is: " + uid);
    //database.ref("users/" + uid).update({name: "My Name"});
    //var userRef = database.collection('users').email('john@gmail.com');
    //var updateUser = userRef.update({day1: true});
    database.ref('users')
        .orderByChild("email")
        .equalTo(Cookies.get("Email"))
        .once('value', function (snapshot) {
            snapshot.forEach(function (child) {
                child.ref.update({[achievement_name]: true});
            }); 
        });
}
