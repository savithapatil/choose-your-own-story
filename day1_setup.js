function clicked() {
   $('.myDiv').slideToggle("slow"); 
  //  or .show
}

function friendAlertFN() {
  $('.friendAlert').slideToggle("slow"); 
 //  or .show
}

///global variablel for points

// still need to increment the score in this function
function talkToYourMom() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
    
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/MC_Mom.png" alt="MC mom">

        <div class="textbox_border" style="background: rgb(49, 151, 121);">
          <span  class="nametag" style="background: rgb(49, 151, 121);">MOM:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"I remember when I used to go to this camp!<br>We had so much fun. We would scare each other silly over stories of this old camp legend...<br>Oh! We're here!"</p>
            </div>
        </div>
      </div>
      <br>
      <button class="nextButton" onclick="getOutOfCar()">Get out of the car</button>
        
  </div>
  `);
  return;
}

function listenToRadio() {
  const $replacementDiv = $("#replacementDiv");


  $replacementDiv.replaceWith(`    
  <div id="replacementDiv" class="center">
    <div class="wrapper">
      <img style="width: 18%; float:left;" src="Pictures/Objects/car radio.png" alt="radio">
      <div class="textbox_border" style="background: rgb(131, 43, 37);">
        <span class="nametag" style="background: rgb(131, 43, 37);">RADIO:</span> 
        <div class="textbox_text">
          <p style="margin: 15px; text-align: left;">*Static-y jazz music plays*</p>
        </div>
      </div>
    </div>
    
    <div class="wrapper">
      <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/MC_Mom.png" alt="MC mom">
      <div class="textbox_border" style="background: rgb(49, 151, 121);">
        <span class="nametag" style="background: rgb(49, 151, 121);">MOM:</span> 
        <div class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Hmm. I guess the reception is still bad up here. Oh, we've made it!"</p>
        </div>
      </div>
    </div>

      <br>
      <button class="nextButton" onclick="getOutOfCar()">Get out of the car</button>
        
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
    <div id="replacementDiv" class="center">
      
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Female_counselor/Jodie_Speaking.png" alt="Jodie Speaking">
        <div class="textbox_border" style="background: rgb(146, 146, 146);">
          <span  class="nametag" style="background: rgb(146, 146, 146);">JODIE:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">Hi! Welcome to Camp Northway! We're so happy to have you!<br>Let me introduce you to the boys' counselor, Counselor Cody"</p>
            </div>
        </div>
      </div>
      <br>
      <button class="nextButton" onclick="next1()">Next</button>      
  </div>
  `);
}

function next1() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">
        
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Male_counselor/Cody_Speaking.png" alt="cody Speaking">
          <div class="textbox_border" style="background: gray;">
            <span  class="nametag" style="background: gray;">CODY:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"Hi! Ready for a week of fun! This is going to be the most funfilled week of your lives!<br>Just don't go in the woods, because there have been a lot of bear sightings."</p>
              </div>
          </div>
        </div>

        <br>
        <button class="nextButton" onclick="next2()">Next</button>
    </div>
  `);
}

function next2() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Male_counselor/Cody_Speaking.png" >
        <div class="textbox_border" style="background: gray;">
          <span  class="nametag" style="background: gray;">CODY:</span> 
            <div  class="textbox_text">
              <p style="margin: 15px; text-align: left;">"Now, we're going to have to ask you to surrender your phones."</p>
            </div>
        </div>
      </div>


      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Female_counselor/Jodie_Speaking.png">
        <div class="textbox_border" style="background: rgb(146, 146, 146);">
          <span  class="nametag" style="background: rgb(146, 146, 146);">JODY:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"This camp is a screen free zone!"</p>
            </div>
        </div>
      </div>

      <br>
      <button class="nextButton" onclick="next3()">Next</button>
        
  </div>
  `);

  
}

function next3() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/snobby_character/Snobby_mad.png" alt="Snobby girl yelling">
        <div class="textbox_border" style="background: rgb(217, 173, 54);">
          <span  class="nametag" style="background: rgb(217, 173, 54);">???</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">You can't do that!"</p>
            </div>
        </div>
      </div>


      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Male_counselor/Cody_Speaking.png" alt="Codie Speaking">
        <div class="textbox_border" style="background: gray;">
          <span  class="nametag" style="background: gray;">CODY:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Oh but we can :)"</p>
            </div>
        </div>
      </div>

      <p>A boy with blue hair walks past you. You hear him mutter under his breath.</p>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Irritated.png" alt="bad annoyed">
        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">???</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Whatever... I'll just steal it back later."</p>
            </div>
        </div>
      </div>



      <br>
      <button class="nextButton" onclick="next4()">Next</button>
        
  </div>
  `);
}

//everyone introduces themselves
function next4() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv"><p></p></div> 
  `);

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        
    <div class="wrapper">
    <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_Speaking.png" alt="katie speaking">
    <div class="textbox_border" style="background: rgb(184, 69, 31);">
      <span  class="nametag" style="background: rgb(184, 69, 31);">Katie</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Hi! My name is Katheryn but everyone calls me Katie!"</p>
        </div>
    </div>
  </div>

  <div class="wrapper">
    <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="bad speaking">
    <div class="textbox_border" style="background: rgb(25, 58, 148);">
      <span  class="nametag" style="background: rgb(25, 58, 148);">Zach</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Zach."</p>
        </div>
    </div>
  </div>

  <div class="wrapper">
    <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/dies_female/Exists_to_Die_Speaking.png" alt="alex">
    <div class="textbox_border" style="background: rgb(65, 84, 125);">
      <span  class="nametag" style="background: rgb(65, 84, 125);">Alex</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"My name is Alex."</p>
        </div>
    </div>
  </div>


  <div class="wrapper">
    <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Speaking.png" alt="Benjy">
    <div class="textbox_border" style="background: rgb(186, 123, 114);">
      <span  class="nametag" style="background: rgb(186, 123, 114);">Benjy</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Hi, I'm Benjy."</p>
        </div>
    </div>
  </div>

  <div class="wrapper">
    <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_Speaking.png" alt="theo">
    <div class="textbox_border" style="background: rgb(130, 103, 72);">
      <span  class="nametag" style="background: rgb(130, 103, 72);">Theo</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"I'm Theo!"</p>
        </div>
    </div>
  </div>

  <div class="wrapper">
    <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_Speaking.png" alt="gabby">
    <div class="textbox_border" style="background: rgb(93, 55, 125);">
      <span  class="nametag" style="background: rgb(93, 55, 125);">Gabby</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"My name is Gabby."</p>
        </div>
    </div>
  </div>


  <div class="wrapper">
    <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/snobby_character/Snobby_Speaking.png" alt="Ella">
    <div class="textbox_border" style="background: rgb(217, 173, 54);">
      <span  class="nametag" style="background: rgb(217, 173, 54);">Ella</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"...You can call me Ella."</p>
        </div>
    </div>
  </div>


  <button class="nextButton" onclick="go2dinner()">Next</button>

      
    </div>
  `);
}

//show we're at dinner here
function go2dinner() {
  //placeholder
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">      
  
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Female_counselor/Jodie_Speaking.png">
        <div class="textbox_border" style="background: rgb(146, 146, 146);">
          <span  class="nametag" style="background: rgb(146, 146, 146);">JODY:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Now I'm sure you're all hungry, so lets head to the mess hall for dinner"</p>
            </div>
        </div>
      </div>

      <button class="nextButton" onclick="atdinner()">Next</button>

      </div>
    `);
    //next button should go to cabin, asleep and then the bad kid bursts in saying Alex got eaten
  }

//talk to Zach and he shows you a comic about monsters
function atdinner() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/Dining_Hall.png" alt="woods" width="35%" class="center">
      </div> 
    `);
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">      

        <p>At dinner you see Zach is reading a comic book. It looks familiar...</p>

        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_Speaking.png" alt="MC">
        <div class="textbox_border" style="background: rgb(49, 151, 121);">
          <span  class="nametag" style="background: rgb(49, 151, 121);">YOU:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Is that Monsters Monthly?"</p>
            </div>
        </div>
      </div>

      <br>
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="zach">
        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"...Yeah. This issue talks about the monster in the mountains here."</p>
            </div>
        </div>
      </div>

      <br>
      <p>Zach seems very serious that there could be a monster in the woods.</p>
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_Speaking.png" alt="MC">
        <div class="textbox_border" style="background: rgb(49, 151, 121);">
          <span  class="nametag" style="background: rgb(49, 151, 121);">YOU:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Cool."</p>
            </div>
        </div>
      </div>
        <button class="nextButton" onclick="next5()">Next</button>
    </div>
  `);
  //next button should go to cabin, asleep and then the bad kid bursts in saying Alex got eaten
}


//talk to and befriend exists to die
function next5() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">

      <p>A brown haired girl sits across from you. You remember her name is Alex.<p>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/dies_female/Exists_to_Die_Speaking.png" alt="alex">
        <div class="textbox_border" style="background: rgb(65, 84, 125);">
          <span  class="nametag" style="background: rgb(65, 84, 125);">Alex</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"This is my first time at camp. Have you been here before?"</p>
            </div>
        </div>
      </div>
    

      <button class="choiceButton" onclick="friendAlertFN()">"This is my first time too."</button>
      <button class="choiceButton" onclick="friendAlertFN()">"No, we can be new together!"</button>   
      
      <div class ="friendAlert" >
        <p>Congratulations! You've befriended Alex!</p>
        <button class="nextButton" onclick="invite()">"Next"</button>
      </div>

      

    </div>
  `);
}

function invite() {

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">     
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/dies_female/Exists_to_Die_Speaking.png" alt="alex">
        <div class="textbox_border" style="background: rgb(65, 84, 125);">
          <span  class="nametag" style="background: rgb(65, 84, 125);">Alex</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"That's great! I was worried everyone would know each other already from last year."</p>
              <p style=" margin: 15px; text-align: left;">"Hey, after dinner do you wanna go explore the woods"</p>
            </div>
        </div>
      </div>

      <button class="choiceButton" onclick="yesWoods()">Sure!</button>
      <button class="choiceButton" onclick="noWoods()">Maybe later...</button>

      


      <br>
      <br>
  </div>
  `);
  //next button should go to woods cut scene
}

function yesWoods() {

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">     
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/dies_female/Exists_to_Die_Excited.png" alt="alex">
        <div class="textbox_border" style="background: rgb(65, 84, 125);">
          <span  class="nametag" style="background: rgb(65, 84, 125);">Alex</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Great! Zach do you wanna come?"</p>
            </div>
        </div>
      </div>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="MC mom">

        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Sure."</p>
            </div>
        </div>
      </div>
      
      <button class="nextButton" onclick="inTheWoods()">Next</button>
    </div>
  `);
  //next button should go to woods cut scene
}

function noWoods() {

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">      

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/dies_female/Exists_to_Die_Disappointed_.png" alt="alex">
        <div class="textbox_border" style="background: rgb(65, 84, 125);">
          <span class="nametag" style="background: rgb(65, 84, 125);">Alex</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Oh...okay then. Zach do you wanna go?"</p>
            </div>
        </div>
      </div>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="MC mom">

        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Sure."</p>
            </div>
        </div>
      </div>

      <button class="nextButton" onclick="alexIsDead()">Next</button>
    </div>
  `);
  //next button should go to cabin, asleep and then the bad kid bursts in saying Alex got eaten
}

function inTheWoods() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/woods_dark.png" alt="woods" width="35%" class="center">
      </div> 
    `);
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">      

        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_Speaking.png" alt="MC">
        <div class="textbox_border" style="background: rgb(49, 151, 121);">
          <span  class="nametag" style="background: rgb(49, 151, 121);">YOU:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Wow, it's getting dark."</p>
            </div>
        </div>
      </div>

      <br>
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="zach">
        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Where'd Alex go?"</p>
            </div>
        </div>
      </div>

      <p>Suddenly you both hear a scream</p>

      <br>
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/dies_female/Exists_to_Die_Screaming.png" alt="alex">
        <div class="textbox_border" style="background: rgb(65, 84, 125);">
          <span  class="nametag" style="background: rgb(65, 84, 125);">ALEX:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"AAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHH!!!!!!!!!!!"</p>
            </div>
        </div>
      </div>

      <p>You and Zach run towards the scream. Zach is faster than you.</p>
      <button class="nextButton" onclick="inTheWoods2()">Next</button>
    </div>
  `);
}

function inTheWoods2() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/woods_dark.png" alt="woods" width="35%" class="center">
      </div> 
    `);
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center"> 
  
        <p>You burst into a clearing. You see Zach standing at the edge and he looks terrified.</p>

        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_worried.png" alt="MC">
        <div class="textbox_border" style="background: rgb(49, 151, 121);">
          <span  class="nametag" style="background: rgb(49, 151, 121);">YOU:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Where's Alex!?"</p>
            </div>
        </div>
      </div>

      <br>
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Scared.png" alt="zach">
        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"She got eaten."</p>
            </div>
        </div>
      </div>

        <button class="nextButton" onclick="">Next</button>
    </div>
  `);
}

function alexIsDead() {

  const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/Boys_Cabin_with_objects.png" alt="cabin" width="35%" class="center">
      </div> 
    `);
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center"> 

        <br>
  
        <p>You're back in your cabin getting settled in for bed.</p>

        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_worried.png" alt="MC">
        <div class="textbox_border" style="background: rgb(49, 151, 121);">
          <span  class="nametag" style="background: rgb(49, 151, 121);">YOU:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"I wonder how Zach and Alex are doing in the woods?"</p>
            </div>
        </div>
      </div>

      <p>Suddenly the Zach slams the cabin door open. He looks scared.</p>
      <br>
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Scared.png" alt="zach">
        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Alex got eaten."</p>
            </div>
        </div>
      </div>

        <button class="nextButton" onclick="">Next</button>
    </div>
  `);
  
}


