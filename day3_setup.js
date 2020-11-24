function goToDiningHall() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/Dining_Hall.png" alt="dining hall background image" width="35%">
      </div> 
    `);
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`

    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("#user").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script> 

    <div id="replacementDiv" class="center">
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_serious.png" alt="Cady">
            <div class="textbox_border" style="background: rgb(184, 69, 31);">
                <span class="nametag" style="background: rgb(184, 69, 31);">KATIE:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"We have news. Benjy and I tried to go visit Alex in the infirmary."</p>
                </div>
            </div>
        </div>
  
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_worried.png" alt="MC">
          <div class="textbox_border" style="background: rgb(49, 151, 121);">
            <span  id = "user" class="nametag" style="background: rgb(49, 151, 121);"></span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"How's she doing?!"</p>
              </div>
          </div>
        </div>      
  
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Worried.png" alt="Benjy">
            <div class="textbox_border" style="background: rgb(186, 123, 114);">
                <span class="nametag" style="background: rgb(186, 123, 114);">BENJY:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"She was nowhere to be found. We looked all over. She just wasn't there!"</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Irritated.png" alt="Zach">
            <div class="textbox_border" style="background: rgb(25, 58, 148);">
                <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
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
                <span class="nametag" style="background: gray;">CODY:</span> 
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
    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("span:last").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script> 
    <div id="replacementDiv" class="center">
        <p>As soon as Cody leaves, everyone starts whispering.</p>
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Worried.png" alt="Benjy">
            <div class="textbox_border" style="background: rgb(186, 123, 114);">
                <span class="nametag" style="background: rgb(186, 123, 114);">BENJY:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"She left this morning? We went to look for Alex before that! It was the middle of the night when we checked the infirmary!"</p>
                </div>
            </div>
        </div>
        
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_Worried.png" alt="Cady">
            <div class="textbox_border" style="background: rgb(184, 69, 31);">
                <span class="nametag" style="background: rgb(184, 69, 31);">KATIE:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"You're right! This doesn't add up."</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_worried.png" alt="MC">
            <div class="textbox_border" style="background: rgb(49, 151, 121);">
                <span  class="nametag" style="background: rgb(49, 151, 121);"> </span> 
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
    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("span:first").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script> 
    <div id="replacementDiv" class="center">
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_worried.png" alt="MC">
            <div class="textbox_border" style="background: rgb(49, 151, 121);">
                <span class="nametag" style="background: rgb(49, 151, 121);"> </span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I think we should investigate the bears."</p>
                </div>
            </div>
        </div>      

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_worried.png" alt="Theo">
            <div class="textbox_border" style="background: rgb(130, 103, 72);">
                <span class="nametag" style="background: rgb(130, 103, 72);">THEO:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I agree. Let's go check the woods for signs of a bear."</p>
                </div>
            </div>
        </div>

        <p>Gabby walks over.</p>
        
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_worried.png" alt="Gabby">
            <div class="textbox_border" style="background: rgb(93, 55, 125);">
                <span class="nametag" style="background: rgb(93, 55, 125);">GABBY:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Did you say bears? I have a book on bears in my cabin. Maybe there's something useful in there."</p>
                </div>
            </div>
        </div>
        
        <button id="goWith_Theo" class="choiceButton" onclick="friendAlertTheo()">Go with Theo to the woods</button>
        <button id="goWith_Gabby" class="choiceButton" onclick="friendAlertGabby()">Go with Gabby to her cabin</button>

        <div id="friendAlertGabby">
            <p>Congratulations! You've befriended Gabby!</p>
            <script>

            updateachievements('befriend_gabby');
     
            </script>
            <button class="nextButton" onclick="goWithGabby()">Continue</button>
        </div>

        <div id="friendAlertTheo">
            <p>Congratulations! You've befriended Theo!</p>
            <script>

            updateachievements('befriend_theo');
     
            </script>
            <button class="nextButton" onclick="athleticKidAsks()">Continue</button>
        </div>
    </div>
    `);
}

function friendAlertGabby() {
    hideButton('goWith_Theo');
    hideButton('goWith_Gabby');
    $('#friendAlertGabby').slideToggle("slow"); 
}

function friendAlertTheo() {
    hideButton('goWith_Theo');
    hideButton('goWith_Gabby');
    $('#friendAlertTheo').slideToggle("slow"); 
}


function athleticKidAsks() {
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>You and Theo are about to head to the woods.</p>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_Speaking.png" alt="Cady">
            <div class="textbox_border" style="background: rgb(184, 69, 31);">
                <span class="nametag" style="background: rgb(184, 69, 31);">KATIE:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Hey guys! Can I tag along?"</p>
                </div>
            </div>
        </div>

        <p>Choose what to say:</p>
        <button class="choiceButton" onclick="yesAthleticKid()">"Of course!"</button>
        <br><br>
        <button class="choiceButton" onclick="noAthleticKid()">"It will be quieter with less people."</button>
    </div>
    `);

}


// not done

/*
function goWithTheo() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/woods.png" alt="woods background image" width="35%">
      </div> 
    `);
}
*/

function yesAthleticKid() {
    // Cady is there, and you need a chance to befriend her
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
    <script>

    updateachievements('befriend_zach');

    </script>
      <div id="backgroundImgDiv">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>The three of you start walking to the woods.</p>
        <p>Choose what to do on the way:</p>
        <button class="choiceButton" onclick="talkToCady()">Talk to Katie</button>
        <br><br>
        <button class="choiceButton" onclick="arriveAtWoods()">Walk in silence for fear of bears</button>
    </div>
    `);
}

function talkToCady() {
    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`

    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("span:first").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script>

    <div id="replacementDiv" class="center">
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_Speaking.png" alt="MC">
            <div class="textbox_border" style="background: rgb(49, 151, 121);">
                <span class="nametag" style="background: rgb(49, 151, 121);"></span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"So I heard you like sports. What's your favorite one to play?"</p>
                </div>
            </div>
        </div>
        
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_Speaking.png" alt="Cady">
            <div class="textbox_border" style="background: rgb(184, 69, 31);">
                <span class="nametag" style="background: rgb(184, 69, 31);">KATIE:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Soccer! It's my favorite to play and watch. Do you like watching soccer too?"</p>
                </div>
            </div>
        </div>

        <p>Choose what to say:</p>
        <button id="yesSoccer" class="choiceButton" onclick="friendAlertCady()">"Yes!"</button>
        <br><br>
        <button id="noSoccer" class="choiceButton" onclick="arriveAtWoods()">"Nah, I'm more of a basketball person."</button>
    </div>
    `);
}

function friendAlertCady() {
    $('#yesSoccer').hide();
    $('#noSoccer').hide();
    $('#friendAlertCady').slideToggle("slow");
}

function dismissCadyAlert() {
    $('#friendAlertCady').hide();
    arriveAtWoods();
}


function noAthleticKid() {
    // Cady is not there.
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("span:first").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script>
    <div id="replacementDiv" class="center">
        <p>You and Theo start walking to the woods.</p>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_Speaking.png" alt="MC">
            <div class="textbox_border" style="background: rgb(49, 151, 121);">
                <span class="nametag" style="background: rgb(49, 151, 121);"></span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"We should probably be very quiet just in case there are bears around."</p>
                </div>
            </div>
        </div>     

        <button class="nextButton" onclick="arriveAtWoods()">Next</button>
    </div>
    `);

}

function arriveAtWoods() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/woods.png" alt="woods background image" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`

    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("span:last").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script>

    <div id="replacementDiv" class="center">
        <p>You arrive at the woods.</p>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_worried.png" alt="Theo">
            <div class="textbox_border" style="background: rgb(130, 103, 72);">
                <span class="nametag" style="background: rgb(130, 103, 72);">THEO:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Oh my gosh do you see that?! Those huge claw marks!"</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_worried.png" alt="MC">
            <div class="textbox_border" style="background: rgb(49, 151, 121);">
                <span class="nametag" style="background: rgb(49, 151, 121);"></span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"OK there are definitely bears here. Let's go back!"</p>
                </div>
            </div>
        </div>

        <button class="nextButton" onclick="returnToDiningHall()">Next</button>
    </div>
    `);
}

function goWithGabby() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/Girls_Cabin_with_objects.png" alt="girl's cabin background image" width="35%" class="center">
        
        <div id="bunnyRemoveID" class="object_container">
            <button class="bunny_button" width="50%" onclick="bunnyIsClicked()">Click me</button> 
        </div>

        <div id="bookHideID" class="object_container">
           <button class="book_button" width="50%" onclick="bookIsClicked()">Click me</button> 
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
    $('#bunnyRemoveID').remove();
    $('#bookHideID').hide();
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
    $('#bookHideID').show();
}

function putBunnyDown() {
    $('#bunnyIsClickedDiv').hide();
    $('#bookHideID').show();
}

function dismissEllaAlert() {
    $('#friendAlertElla').hide();
    $('#bookHideID').show();
}

function keepInspecting() {
    $('#bookIsClickedDiv').hide();
}

function returnToDiningHall() {
    $('#bookIsClickedDiv').hide();
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/trail to dining hall.png" alt="walking back to the dining hall - background image" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <script>
  
    function getName() {
      playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
          
          $("span:first").prepend(data.val().name + ":");
  
       });
      }
  getName();
  </script>
    <div id="replacementDiv" class="center">
        <p>You are walking back to the dining hall, but something seems off...</p>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_worried.png" alt="MC">
            <div class="textbox_border" style="background: rgb(49, 151, 121);">
                <span class="nametag" style="background: rgb(49, 151, 121);"></span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I feel like... I feel like we're being watched..."</p>
                </div>
            </div>
        </div>     

        <button class="nextButton" onclick="arriveAtDiningHall()">Next</button>
    </div>
    `);
}

function arriveAtDiningHall() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/Dining_Hall_Claw_Marks.png" alt="dining hall background image" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>When you arrive at the dining hall, everyone is crowded around the door, peering inside.</p>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Worried.png" alt="Benjy">
            <div class="textbox_border" style="background: rgb(186, 123, 114);">
                <span class="nametag" style="background: rgb(186, 123, 114);">Benjy</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"There are claw marks everywhere!"</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Scared.png" alt="Zach">
            <div class="textbox_border" style="background: rgb(25, 58, 148);">
                <span  class="nametag" style="background: rgb(25, 58, 148);">Zach</span> 
                <div  class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Oh my gosh what the--"</p>
                </div>
            </div>
        </div>      

        <p>Choose what to do:</p>
        <button class="choiceButton" onclick="panic()">Panic!</button>
        <button class="choiceButton" onclick="panic()">REALLY PANIC!</button>
    </div>
    `);
}

function panic() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/Dining_Hall_Claw_Marks.png" alt="dining hall background image" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>Everyone starts to panic! It is mayhem!!!</p>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_worried.png" alt="Gabby">
            <div class="textbox_border" style="background: rgb(93, 55, 125);">
                <span class="nametag" style="background: rgb(93, 55, 125);">GABBY:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"We need a counselor!"</p>
                </div>
            </div>
        </div>

        <button class="nextButton" onclick="needCounselor()">Next</button>
    </div>
    `);
}

function needCounselor() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/Dining_Hall_Claw_Marks.png" alt="dining hall background image" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Male_counselor/Cody_Speaking.png" alt="Cody">
            <div class="textbox_border" style="background: gray;">
                <span class="nametag" style="background: gray;">CODY:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Did someone say counselor? Hey guys!"</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Worried.png" alt="Benjy">
            <div class="textbox_border" style="background: rgb(186, 123, 114);">
                <span class="nametag" style="background: rgb(186, 123, 114);">BENJY:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Look at the dining hall! There are claw marks all over it!"</p>
                </div>
            </div>
        </div>

        <button class="nextButton" onclick="raccoon()">Next</button>
    </div>
    `);
}

function raccoon() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/Dining_Hall_Claw_Marks.png" alt="dining hall background image" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Male_counselor/Cody_Speaking.png" alt="Cody">
            <div class="textbox_border" style="background: gray;">
                <span class="nametag" style="background: gray;">CODY:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"Oh! I didn't notice that. Hm, must've been a raccoon."</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Worried.png" alt="Benjy">
            <div class="textbox_border" style="background: rgb(186, 123, 114);">
                <span class="nametag" style="background: rgb(186, 123, 114);">BENJY:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"What kind of raccoon could possibly d--"</p>
                </div>
            </div>
        </div>

        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Male_counselor/Cody_Speaking.png" alt="Cody">
            <div class="textbox_border" style="background: gray;">
                <span class="nametag" style="background: gray;">CODY:</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">*cuts Benjy off*<br>"ANYWAYS! I've got some news. It looks like there's been a mudslide. No one can get in or out of the camp right now. But don't worry! We have people working on clearing it, and you'll be able to leave camp at the end of the week as scheduled!" Now off to the cabins, everyone!</p>
                </div>
            </div>
        </div>

        <button class="choiceButton" onclick="endOfDay3()">END OF DAY 3</button>
    </div>
    `);
}

function endOfDay3() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>End of day 3</p>
        <p>Achievement page and transition go here</p>
        <button class="nextButton" onclick="">Next</button>
    </div>
    `);
}

function hideButton(elt_id) {
    let id = '#' + elt_id
    $(id).hide();
}

function endOfDay3() {
    updateachievements('day3')
    window.href.location = "achievements3.html"
  }