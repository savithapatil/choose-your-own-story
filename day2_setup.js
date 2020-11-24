function loadDay2() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <div class="map">
        <img src="Pictures/Background/Boys_Cabin_with_objects.png" alt="boys Cabin" width="50%" class="center">
      </div>

      <button class="skateboard_btn" width="50%" onclick="clickSkateboard()">Click me</button> 
      <button class="soda_btn" width="50%" onclick="clickSoda()">Click me</button> 
      <button class="chips_btn" width="50%" onclick="clickChips()">Click me</button> 
      <button class="fishingRod_btn" width="50%" onclick="clickFishingRod()">Click me</button> 

      <div id="poster_btnDIV">
        <button class="poster_btn" width="50%" onclick="clickPoster()">Click me</button>              
      </div>
    </div>
  `);

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv">
      <button class="nextButton" onclick="goToDiningHall()">Next</button>
    </div>
  `);
}


function friendAlertFN() {
    $('.friendAlert').slideToggle("slow"); 
  }

  function theoFriendAlert() {
    $('#theoFriendAlert').slideToggle("slow"); 
  }
  function theoFriendAlertClose() {
    $('#theoFriendAlert').hide(); 
  }

  function clickSoda() {
    $('#soda').slideToggle("slow"); 
  } 

  function clickChips() {
    $('#chips').slideToggle("slow"); 
  } 

  function clickSkateboard() {
    $('#skateboard').slideToggle("slow"); 
  } 

  function clickFishingRod() {
    $('#fishingRod').slideToggle("slow"); 
  } 

  function clickPoster() {
    $('#poster').slideToggle("slow"); 
  } 

  function clickPoster1() {
    $('#poster').hide(); 
    $('#poster_btnDIV').remove();
    $('#poster1').slideToggle("slow"); 
  } 

  function clickPoster2() {
    $('#poster').hide(); 
    $('#poster_btnDIV').remove();
    $('#poster2').slideToggle("slow"); 
  } 


  //woods point and click functions
  function clickRabbit() {
    $('#rabbit').slideToggle("slow"); 
  } 

  function clickSign() {
    $('#sign').slideToggle("slow"); 
  } 

  function clickMushrooms() {
    $('#mushrooms').slideToggle("slow"); 
  } 
  function clickClawMarks() {
    $('#clawMarks').slideToggle("slow"); 
  } 


 function goToDiningHall() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/Dining_Hall.png" alt="camp entrance background image" width="35%">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">

      <script>
      function getName() {
          playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
              $("span:first").prepend(data.val().name + ":");
      
           });
          }
      getName();
      </script>
      
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_worried.png" alt="MC">

          <div class="textbox_border" style="background: rgb(49, 151, 121);">
            <span  class="nametag" style="background: rgb(49, 151, 121);"> </span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"I can't believe that Alex is gone... What happened last night?"</p>
              </div>
          </div>
        </div>
        <br>
        <button class="nextButton" onclick="badClaimingMonster()">Next</button>
          
    </div>
    `);
    return;
}

function badClaimingMonster() {
  const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="Zach">

          <div class="textbox_border" style="background: rgb(25, 58, 148);">
            <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"I'm telling you I know what I saw! <br> There's a monster in the woods and it ATE Alex!!"</p>
              </div>
          </div>
        </div>
        <br>
        <button class="nextButton" onclick="othersAreDoubtful()">Next</button>
          
    </div>
    `);
    return;
}

function othersAreDoubtful() {
  const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">
      
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/snobby_character/Snobby_Speaking.png" alt="" >

          <div class="textbox_border" style="background: rgb(217, 173, 54);">
            <span  class="nametag" style="background: rgb(217, 173, 54);">ELLA:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"There's no such thing as monsters! This is real life not a comic, you're so stupid."</p>
              </div>
          </div>
        </div>
        <br>


        <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_worried.png" alt="gabby">

          <div class="textbox_border" style="background: rgb(93, 55, 125);">
            <span  class="nametag" style="background: rgb(93, 55, 125);">GABBY:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"I don't think you're stupid but it was dark and scary right...you're probably just confused."</p>
              </div>
          </div>
        </div>
        <br>

        <button class="nextButton" onclick="badCounselorMakesStatement()">Next</button>
          
    </div>
    `);
    return;
}

function badCounselorMakesStatement() {
  const $replacementDiv = $("#replacementDiv");

    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">

      <p>The arguing is interrupted when Counselor Cody enters the dining hall.</p>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Male_counselor/Cody_Speaking.png" alt="Codie Speaking">
        <div class="textbox_border" style="background: gray;">
          <span  class="nametag" style="background: gray;">CODY:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Good Morning Everyone! Now I'm afraid that I have some bad news.<br>
              One of your fellow campers, Alex has fallen VERY ill. <br>
              But for the rest of you, it's a fine day to be at Camp Northside- so go have fun!"</p>
            </div>
        </div>
      </div>
        <br>
        <button class="nextButton" onclick="doYouSupport()">Next</button>
          
    </div>
    `);
    return;
}


function doYouSupport() {
  const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">

        <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Speaking.png" alt="Benjy">
          <div class="textbox_border" style="background: rgb(186, 123, 114);">
            <span  class="nametag" style="background: rgb(186, 123, 114);">BENJY:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"So Alex is fine-or, well, not fine since she's sick, but she's not dead! We should visit her."</p>
              </div>
          </div>
        </div>
        <br>

        <p>Counselor Cody leaves, and everyone seems to sigh in relief. You notice that Zach is staying quiet and he looks incredibly frustrated.</p>

        <p>You turn to him and say:</p>
        <button class="fitContentChoiceButton" onclick="friendAlertFN()">"I believe Zach, Alex wasn't sick at all last night."</button>
        <br><br>
        <button class="fitContentChoiceButton" onclick="dismissZach()">"Hey, isn't this better than there being a monster?"</button>   
        <br>
        <br>
        <div class ="friendAlert" >
          <p>Congratulations! You've befriended Zach!</p>
          <script>

        updateachievements('befriend_zach');
 
        </script>

          <button class="nextButton" onclick="believeZach()">"Next"</button>
        </div>
  
          
    </div>
    `);
    return;
}

function believeZach() {
  const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">

      <script>
      function getName() {
          playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
              $("span:odd").prepend(data.val().name + ":");
      
           });
          }
      getName();
      </script>
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Surprised.png" alt="zach surprised">

        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"...You believe me?"</p>
            </div>
        </div>
      </div>
      <br>

      <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_Speaking.png" alt="MC">

          <div class="textbox_border" style="background: rgb(49, 151, 121);">
            <span  class="nametag" style="background: rgb(49, 151, 121);"></span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"You don't look like you're lying."</p>
              </div>
          </div>
        </div>
      <br>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="Zach">

        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"We should go to the woods to see if we can find any traces of the monster"</p>
            </div>
        </div>
      </div>
     
          
      <br>
        <button class="nextButton" onclick="goToWoodsWithBadKid()">Next</button> 
    </div>
    `);
    return;
}

function dismissZach() {

  const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="zach">

        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"You know what? I don't care, I hope all of you get eaten."</p>
            </div>
        </div>
      </div>
      <br>
      <p>Zach storms away and you start to feel a little guilty.</p>
      <p>You decide to go to the woods to see for yourself if there's anything there.</p>
      <br>
      <button class="nextButton" onclick="goToWoodsAlone()">Next</button>      
    `);
    return;
  
}

//add woods point and click
function goToWoodsWithBadKid() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/woods.png" alt="woods" width="35%" class="center">
        <button class="rabbit_btn" width="50%" onclick="clickRabbit()">Click me</button> 
        <button class="sign_btn" width="50%" onclick="clickSign()">Click me</button> 
        <button class="mushrooms_btn" width="50%" onclick="clickMushrooms()">Click me</button> 
        <button class="clawMarks_btn" width="50%" onclick="clickClawMarks()">Click me</button> 
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">
        <button class="nextButton" onclick="strangeGoo()">Next</button>
    </div>
    `);
    return;
}

function goToWoodsAlone() {
    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/woods.png" alt="woods" width="35%" class="center">
        <button class="rabbit_btn" width="50%" onclick="clickRabbit()">Click me</button> 
        <button class="sign_btn" width="50%" onclick="clickSign()">Click me</button> 
        <button class="mushrooms_btn" width="50%" onclick="clickMushrooms()">Click me</button> 
        <button class="clawMarks_btn" width="50%" onclick="clickClawMarks()">Click me</button> 
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">
      <button class="nextButton" onclick="wellSomethingsInTheWoods()">Next</button>
    </div>
    `);
    return;
}

function strangeGoo() {

  const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/Weird_Sludge.png" alt="goo on hand" width="35%" class="center">
      </div> 
    `);

    const $replacementDiv = $("#replacementDiv");
    $replacementDiv.replaceWith(`
      <div id="replacementDiv" class="center">

      <script>
      function getName() {
          playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
              $("span:odd").prepend(data.val().name + ":");
      
           });
          }
      getName();
      </script>

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="MC mom">

        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Look what I found-It's gotta be monster goo!"</p>
            </div>
        </div>
      </div>
      <br>

      <p> Zach hold out his hand and on it is some kind of weird black sludge.</p>
      
        <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_worried.png" alt="MC mom">

          <div class="textbox_border" style="background: rgb(49, 151, 121);">
            <span  class="nametag" style="background: rgb(49, 151, 121);"></span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"I don't know if that's monster goo but I really don't think you should be touching it."</p>
              </div>
          </div>
        </div>
        <br>

        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="MC mom">

        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"But look this is proof that something is in the woods."</p>
            </div>
        </div>
      </div>
      <br>

      <br>
        <button class="nextButton" onclick="next()">Next</button>
    </div>
    `);
    return;
}


function wellSomethingsInTheWoods() {

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">

    <script>
function getName() {
    playersRef.orderByChild("email").equalTo(Cookies.get("Email")).on("child_added", function(data) {
        $("span:first").prepend(data.val().name + ":");

     });
    }
getName();
</script> 

      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_worried.png" alt="MC">

        <div class="textbox_border" style="background: rgb(49, 151, 121);">
          <span  class="nametag" style="background: rgb(49, 151, 121);"></span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"I don't know if it's a monster but there's definitely something in the woods."</p>
            </div>
        </div>
      </div>
      <br>   
      <button class="nextButton" onclick="next()">Next</button>

      
  `);
  return;
}

function next() {
  updateachievements('day2')
  window.location.href = "achievements2.html"
}