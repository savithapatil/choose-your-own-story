function clicked() {
   console.log("wrfhbfw");
   $('.myDiv').slideToggle("slow"); 
  //  or .show
}

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
      <img src="" alt="camp entrance background image" width="50%" class="center">
    </div> 
  `);

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv">
      <img src="" alt="Counselor Jodie says hi">
      <p>GINA: "Hi! Welcome to Camp Northway! We're so happy to have you!<br>Let me introduce you to the boys' counselor, Counselor Cody"</p>
      <button class="nextButton" onclick="next1()">Next</button>
    </div>
`);
}

function next1() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv">
      <img src="" alt="Counselor Cody says hi">
      <p>CODY: "Hi! Ready for a week of fun! This is going to be the most funfilled week of your lives!<br>Just don't go in the woods, because there have been a lot of bear sightings."</p>
      <button class="nextButton" onclick="next2()">Next</button>
    </div>
  `);
}

function next2() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv">
      <img src="" alt="Counselor Cody speaking">
      <img src="" alt="Counselor Jodie speaking">
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
      <img src="" alt="Bad counselor speaking">
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
    <div id="replacementDiv">

      <div style="float: left; margin:5px;">
        <img src="" alt="asdfasdf">
        <p>My name is asdfasdf</p>
      </div>

      <div style="float: left; margin:5px;">
        <img src="" alt="kljhkh">
        <p>My name is kljhkh</p>
      </div>
      
      <div style="float: left; margin:5px;">
        <img src="" alt="kljhkh">
        <p>My name is kljhkh</p>
      </div>

      <br>


      <div style="float: left; margin:5px;">
        <img src="" alt="kljhkh">
        <p>My name is kljhkh</p>
      </div>

      <div style="float: left; margin:5px;">
        <img src="" alt="kljhkh">
        <p>My name is kljhkh</p>
      </div>

      <div style="float: left; margin:5px;">
        <img src="" alt="kljhkh">
        <p>My name is kljhkh</p>
      </div>

      <div style="float: left; margin:5px;">
        <img src="" alt="kljhkh">
        <p>My name is kljhkh</p>
      </div>

     

      <div>
        <h3>Choose who to talk to</h3>
        <button class="choiceButton" onclick="">Person 1</button>
        <button class="choiceButton" onclick="">Person 2</button>
      </div>
    </div>
  `);
}



