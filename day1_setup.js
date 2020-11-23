function clicked() {
   console.log("wrfhbfw");
   $('.myDiv').slideToggle("slow"); 
  //  or .show
}

/// function to get the cookie that holds a user's email
function getCookie(){
  return Cookies.get("Email");
}
console.log("Worked " + getCookie());

// still need to increment the score in this function
function talkToYourMom() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv">
      <p>MOM: "I remember when I used to go to this camp!<br>We had so much fun. We would scare each other silly over stories of this old camp legend...<br>Oh! We're here!"</p>
      <button class="choiceButton" onclick="getOutOfCar()">Get out of the car</button>
    </div>
  `);
  return;
}

function listenToRadio() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv">
      <p>Some static-y jazz music starts playing.<br>MOM: "Hmm. I guess the reception is still bad up here. Oh, we've made it!"</p>
      <button class="choiceButton" onclick="getOutOfCar()">Get out of the car</button>
    </div>
  `);
  return;
}

function getOutOfCar() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="Pictures/Background/Camp_Entrance.png" alt="camp entrance background image" width="35%" class="center">
    </div> 
  `);

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv">
      <img src="Pictures/CharactersIMG/Female_counselor/Jodie_Speaking.png" alt="Counselor Jodie says hi" width="10%">
      <p>GINA: "Hi! Welcome to Camp Northway! We're so happy to have you!<br>Let me introduce you to the boys' counselor, Counselor Cody"</p>
      <button class="nextButton" onclick="next1()">Next</button>
    </div>
`);
}

function next1() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv">
      <img src="Pictures/CharactersIMG/Male_counselor/Cody_Speaking.png" alt="Counselor Cody says hi" width ="10%">
      <p>CODY: "Hi! Ready for a week of fun! This is going to be the most funfilled week of your lives!<br>Just don't go in the woods, because there have been a lot of bear sightings."</p>
      <button class="nextButton" onclick="next2()">Next</button>
    </div>
  `);
}

function next2() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv">
      <img src="Pictures/CharactersIMG/Male_counselor/Cody_Speaking.png" alt="Counselor Cody speaking" width="10%">
      <img src="Pictures/CharactersIMG/Female_counselor/Jodie_Speaking.png" alt="Counselor Jodie speaking" width="10%">
      <p>CODY: "Now we're gonna have to ask for you to surrender your phones."</p>
      <p>JODIE: "This camp is a screen-free zone!"</p>
      <button class="nextButton" onclick="next3()">Next</button>
    </div>
  `);
  // figure out how to get the two counselor images here side by side instead of one after the other
}

function next2() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv">
      <img src="" alt="Snobby girl yelling">
      <p>GIRL WITH BLONDE HAIR: "You can't do that!"</p>
      <img src="Pictures/CharactersIMG/Male_counselor/Cody_Speaking.png" alt="Bad counselor speaking" width="10%">
      <p>CODY: "Oh but we can :)"</p>
      <p><em>A boy with blue hair walks past you. You hear him mutter under his breath.</em></p>
      <img src="" alt="Bad kid grumbling">
      <p>BOY WITH BLUE HAIR: "Whatever... I'll just steal it back later."</p>
      <p><em>You decide to introduce yourself to everyone.</em></p>

      <button class="nextButton" onclick="next3()">Next</button>
    </div>
  `);
}

function next3() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv"><p></p></div> 
  `);

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" >
        <div style="float: left; margin:5px;">
          <img src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_Speaking.png" alt="asdfasdf" width="10%"> 
          <p>My name is Katie</p>
        </div>

        <div style="float: right; margin:5px;">
          <img src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="kljhkh" width="10%">
          <p>My name is Zach</p>
        </div>
        
        <div style="float: left; margin:5px;">
          <img src="Pictures/CharactersIMG/dies_female/Exists_to_Die_Speaking.png" alt="kljhkh" width="10%">
          <p>My name is Alex</p>
        </div>

      

      <br>

      <div style="width:70%;">
      
        <div style="float: left; margin:5px;">
          <img src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Speaking.png" alt="kljhkh" width="10%">
          <p>My name is Benjy</p>
        </div>

        <div style="float: left; margin:5px;">
          <img src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_Speaking.png" alt="kljhkh" width="10%">
          <p>My name is Theo</p>
        </div>

        <div style="float: left; margin:5px;">
          <img src="Pictures/CharactersIMG/smart_character/Smart_Camper_Speaking.png" alt="kljhkh" width="10%">
          <p>My name is Gabby</p>
        </div>

        <div style="float: left; margin:5px;">
          <img src="Pictures/CharactersIMG/snobby_character/Snobby_camper_speaking.png" alt="kljhkh" width="10%">
          <p>My name is Ella</p>
        </div>

      </div>

      <div>
        <h3>Choose who to talk to</h3>
        <button class="nextButton" onclick="next4()">Next</button>
      </div>

    </div>
  `);
}

function next3() {
  const $replacementDiv = $("#replacementDiv");

  $replacementDiv.replaceWith(`
    <div id="replacementDiv" >
      <img src="Pictures/CharactersIMG/dies_female/Exists_to_Die_Speaking.png" alt="kljhkh" width="10%">
      <p> ALEX: "This is my first time at camp. Have you been here before?"</p>
      <p>     <span id='test1'>YOU:</span> "No, this is my first time at camp too."<p>
      <p> ALEX: "That's great! I was worried everyone would know each other already from last year."
      <p>"Hey, after dinner do you wanna go explore the woods"</p>
      <button class="choiceButton" onclick="yesWoods()">Sure!</button>
      <button class="choiceButton" onclick="noWoods()">Maybe later...</button>
    </div>
  `);
}

function yesWoods() {
  
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" >
      <img src="Pictures/CharactersIMG/dies_female/Exists_to_Die_Speaking.png" alt="kljhkh" width="10%">
      <p> ALEX: "Great! I'll see you then!"</p>
      
      <button class="nextButton" onclick="">Next</button>
    </div>
  `);
}

function noWoods() {
 
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" >
      <img src="" alt="exists to die dissappointed" width="10%">
      <p> ALEX: "Oh...okay then..."</p>
     
      <button class="nextButton" onclick="">Next</button>
    </div>
  `);
}



