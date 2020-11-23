function goToDiningHall() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="" alt="dining hall background image" width="35%" class="center">
      </div> 
    `);
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_Speaking.png" alt="Cady">
          <div class="textbox_border" style="background: rgb(184, 69, 31);">
            <span  class="nametag" style="background: rgb(184, 69, 31);">Cady</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"We have news. Benjy and I tried to go visit Alex in the infirmary."</p>
              </div>
          </div>
        </div>
  
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_Speaking.png" alt="MC">
          <div class="textbox_border" style="background: rgb(49, 151, 121);">
            <span  class="nametag" style="background: rgb(49, 151, 121);">YOU</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"How's she doing?!"</p>
              </div>
          </div>
        </div>      
  
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Speaking.png" alt="Benjy">
            <div class="textbox_border" style="background: rgb(186, 123, 114);">
                <span class="nametag" style="background: rgb(186, 123, 114);">Benjy</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"She was nowhere to be found. We looked all over. She just wasn't there!"</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="Zach">
            <div class="textbox_border" style="background: rgb(25, 58, 148);">
                <span  class="nametag" style="background: rgb(25, 58, 148);">Zach</span> 
                <div  class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"That's because she's dead."</p>
                </div>
            </div>
        </div>      
  
        <button class="nextButton" onclick="next1()">Next</button>
  
        <br>
        <br>
    </div>
    `);
}

function next1() {
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>Cody walks over.</p>
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Male_counselor/Cody_Speaking.png" alt="Cody">
            <div class="textbox_border" style="background: gray;">
                <span class="nametag" style="background: gray;">Cody</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Her mom came and got her this morning."</p>
                </div>
            </div>
        </div>
        <button class="nextButton" onclick="next2()">Next</button>
    </div>
    `);
}

function next2() {
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>As soon as Cody leaves, everyone starts whispering.</p>
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Speaking.png" alt="Benjy">
            <div class="textbox_border" style="background: rgb(186, 123, 114);">
                <span class="nametag" style="background: rgb(186, 123, 114);">Benjy</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"She left this morning? We went to look for Alex before that! It was the middle of the night when we checked the infirmary!"</p>
                </div>
            </div>
        </div>
        
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_Speaking.png" alt="Cady">
            <div class="textbox_border" style="background: rgb(184, 69, 31);">
                <span class="nametag" style="background: rgb(184, 69, 31);">Cady</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"You're right! This doesn't add up."</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_Speaking.png" alt="MC">
            <div class="textbox_border" style="background: rgb(49, 151, 121);">
                <span  class="nametag" style="background: rgb(49, 151, 121);">YOU</span> 
                <div  class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I saw claw marks last night. Maybe a bear got her and the counselors don't want to freak us out!"</p>
                </div>
            </div>
        </div>      

        <button class="nextButton" onclick="next3()">Next</button>
    </div>
    `);
}

function next3() {
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_Speaking.png" alt="MC">
            <div class="textbox_border" style="background: rgb(49, 151, 121);">
                <span class="nametag" style="background: rgb(49, 151, 121);">YOU</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I think we should investigate the bears."</p>
                </div>
            </div>
        </div>      

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_Speaking.png" alt="Theo">
            <div class="textbox_border" style="background: rgb(130, 103, 72);">
                <span class="nametag" style="background: rgb(130, 103, 72);">Theo</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I agree. Let's go check the woods for signs of a bear."</p>
                </div>
            </div>
        </div>

        <p>Gabby walks over.</p>
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_Speaking.png" alt="Gabby">
            <div class="textbox_border" style="background: rgb(93, 55, 125);">
                <span class="nametag" style="background: rgb(93, 55, 125);">Gabby</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Did you say bears? I have a book on bears in my cabin. Maybe there's something useful in there."</p>
                </div>
            </div>
        </div>
        
        <button class="choiceButton" onclick="goWithTheo()">Go with Theo to the woods</button>
        <button class="choiceButton" onclick="friendAlertGabby()">Go with Gabby to her cabin</button>

        <div id="friendAlertGabby">
            <p>Congratulations! You've befriended Gabby!</p>
            <button class="nextButton" onclick="goWithGabby()">Continue</button>
        </div>
    </div>
    `);
}

function friendAlertGabby() {
    $('#friendAlertGabby').slideToggle("slow"); 
}
  

// not done
function goWithTheo() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="" alt="woods background image" width="35%" class="center">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>Asdf</p>
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="" alt="person name">
            <div class="textbox_border" style="background: gray;">
                <span class="nametag" style="background: gray;">Person name</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"sppech."</p>
                </div>
            </div>
        </div>
        <button class="nextButton" onclick="">Next</button>
    </div>
    `);

}

function goWithGabby() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/Girls_Cabin_with_objects.png" alt="girl's cabin background image" width="35%" class="center">
        
        <div class="object_container">
            <button class="bunny_button" width="50%" onclick="bunnyIsClicked()">bunny</button> 
        </div>

        <div class="object_container">
           <button class="book_button" width="50%" onclick="bookIsClicked()">book</button> 
        </div>


      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
    </div>
    `);
}

function bunnyIsClicked() {
    $('#bunnyIsClickedDiv').slideToggle("slow"); 
}

function bookIsClicked() {
    $('#bookIsClickedDiv').slideToggle("slow"); 
}


function bunnyResponse() {
    $('#bunnyIsClickedDiv').hide();
    $('#respondToElla').slideToggle("slow");
}


function friendAlertElla() {
    $('#respondToElla').hide();
    $('#friendAlertElla').slideToggle("slow");
}

function chill() {
    $('#respondToElla').hide();
}

function putBunnyDown() {
    $('#bunnyIsClickedDiv').hide();
}

function dismissEllaAlert() {
    $('#friendAlertElla').hide();
}