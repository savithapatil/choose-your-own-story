function clicked() {
   console.log("wrfhbfw");
   $('.myDiv').slideToggle("slow"); 
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
          <span  class="nametag" style="background: rgb(131, 43, 37);">RADIO:</span> 
            <div  class="textbox_text">
              <p style="margin: 15px; text-align: left;">"Static-y jazz music plays"</p>
            </div>
        </div>
      </div>

    
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/MC_Mom.png" alt="MC mom">
        <div class="textbox_border" style="background: rgb(49, 151, 121);">
          <span  class="nametag" style="background: rgb(49, 151, 121);">MOM:</span> 
            <div  class="textbox_text">
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

      <p><em>A boy with blue hair walks past you. You hear him mutter under his breath.</em></p>

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


  <button class="nextButton" onclick="next5()">Next</button>

      
    </div>
  `);
}

function next5() {
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/dies_female/Exists_to_Die_Speaking.png" alt="alex">
        <div class="textbox_border" style="background: rgb(65, 84, 125);">
          <span  class="nametag" style="background: rgb(65, 84, 125);">Alex</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"This is my first time at camp. Have you been here before?"</p>
            </div>
        </div>
      </div>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_Speaking.png" alt="MC">
        <div class="textbox_border" style="background: rgb(49, 151, 121);">
          <span  class="nametag" style="background: rgb(49, 151, 121);">YOU</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"No, this is my first time at camp too."</p>
            </div>
        </div>
      </div>      

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
              <p style=" margin: 15px; text-align: left;">"Great! I'll see you then!"</p>
            </div>
        </div>
      </div>
      
      <button class="nextButton" onclick="">Next</button>
    </div>
  `);
}

function noWoods() {
 
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">      

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/dies_female/Exists_to_Die_Disappointed_.png" alt="alex">
        <div class="textbox_border" style="background: rgb(65, 84, 125);">
          <span  class="nametag" style="background: rgb(65, 84, 125);">Alex</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Oh...okay then..."</p>
            </div>
        </div>
      </div>

      <button class="nextButton" onclick="">Next</button>
    </div>
  `);
}



