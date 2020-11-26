let stoppedCody = false;

let killedMonster = false;

function loadDay4() {
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="Pictures/Background/Boys_Cabin_with_objects.png" alt="Boys' cabin with objects" width="35%" >
    </div>
  `);

  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
        <p>Gabby and the other girls show up at the boy's cabin. </p>
        <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_worried.png" alt="MC mom">
            <div class="textbox_border" style="background: rgb(93, 55, 125);">
                <span class="nametag" style="background: rgb(93, 55, 125);">Gabby</span> 
                <div class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"There shouldn’t have been a mudslide since there hasn’t been any rain."</p>
                </div>
            </div>
        </div>
        <br>
        <button class="choiceButton" onclick="next0()">Next</button>
    </div>
  `);


}

function next0() {


  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`

  <div id="replacementDiv" class="center">
      
  
  <div class="wrapper">
  <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/snobby_character/Snobby_Speaking.png" alt="Ella">
  <div class="textbox_border" style="background: rgb(217, 173, 54);">
    <span  class="nametag" style="background: rgb(217, 173, 54);">ELLA:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"This whole place is terrible, I want to go home." (turns to Zach) "Let’s steal our phones back. My Butler will come get us if I can call home."</p>
      </div>
  </div>
</div>

<div class="wrapper">
  <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="bad annoyed">
  <div class="textbox_border" style="background: rgb(25, 58, 148);">
    <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"My time has come."</p>
      </div>
  </div>
</div>

<p>As a group you all decide the phones are probably in the counselor's cabin.</p>



  <h3>Which room should Zach investigate?</h3>
<button class="choiceButton" onclick="codyRoom()">Cody's room</button>
<button class="choiceButton" onclick="jodyRoom()">Jody's room</button> 
  

</div>

`); }
/////////////////////////////////////////////////////////////////////////////////////////////////////
//The following functions are all grouped under jody's room
///
function jodyRoom() {


  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="Pictures/Background/Jody_Journal.png" alt="Jody's journal" width="35%">
    </div> 
  `);


const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
    
      <div class="wrapper">

        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="bad annoyed">
        <div class="textbox_border" style="background: rgb(25, 58, 148);">
          <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Check it out. I found Jody's journal while looking for our phones."</p>
            </div>
        </div>
      </div>
      <br>
      </div>


      <div class="wrapper">
      <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_worried.png" alt="theo">
      <div class="textbox_border" style="background: rgb(130, 103, 72);">
        <span  class="nametag" style="background: rgb(130, 103, 72);">THEO:</span> 
          <div  class="textbox_text">
            <p style=" margin: 15px; text-align: left;">"I don't like how this sounds. I'm calling home."</p>
          </div>
      </div>
    </div>

    <p> All campers grab their phones and dial for help.</p> 

    <button class="choiceButton" onclick="jodNext0()">Next</button>

    </div>

    `); }


    function jodNext0(){

      
      const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="Pictures/Background/Jody_Journal.png" alt="Jody's journal" width="35%">
    </div> 
  `);

const $replacementDiv = $("#replacementDiv");
$replacementDiv.replaceWith(`
  <div id="replacementDiv" class="center">

    <div class="wrapper">
    <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/snobby_character/Snobby_speaking.png" alt="Ella">
    <div class="textbox_border" style="background: rgb(217, 173, 54);">
      <span  class="nametag" style="background: rgb(217, 173, 54);">ELLA:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">No way! My calls aren't going through."</p>
        </div>
    </div>
  </div>

  

  <div class="wrapper">
  <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_serious.png" alt="katie speaking">
  <div class="textbox_border" style="background: rgb(184, 69, 31);">
    <span  class="nametag" style="background: rgb(184, 69, 31);">KATIE:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"Same here."</p>
      </div>
  </div>
</div>

<p>None of the campers are able to make any calls.</p>

<button class="choiceButton" onclick="jodNext1()">Next</button>
</div>



`); }

function jodNext1(){


  
   
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="Pictures/Background/Jody_Journal.png" alt="Jody's journal" width="35%">
    </div> 
  `);
      
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
  

<div class="wrapper">
  <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Worried.png" alt="Benjy">
  <div class="textbox_border" style="background: rgb(186, 123, 114);">
    <span  class="nametag" style="background: rgb(186, 123, 114);">BENJY:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"Oh no!"</p>
      </div>
  </div>
</div>


  <div class="wrapper">
  <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_worried.png" alt="smart kid">
  <div class="textbox_border" style="background: rgb(93, 55, 125);">
  <span  class="nametag" style="background: rgb(93, 55, 125);">Gabby</span> 
      <div  class="textbox_text">
      <p style=" margin: 15px; text-align: left;">"There must be really bad reception up here. Dont worry. I bet there's a landline we could use."</p>
    </div>
</div>
</div>
<br>

<div class="wrapper">
<img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_worried.png" alt="theo">
<div class="textbox_border" style="background: rgb(130, 103, 72);">
<span  class="nametag" style="background: rgb(130, 103, 72);">Theo</span> 
  <div  class="textbox_text">
    <p style=" margin: 15px; text-align: left;">"We should ask Jody what's going on."</p>
  </div>
</div>
</div>

<button class="choiceButton" onclick="jodNext2()">Next</button>

</div>


`); }

function jodNext2(){

         
  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
      <img src="Pictures/Background/Jody_Journal.png" alt="Jody's journal" width="35%">
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
            <span  class="nametag" style="background: rgb(49, 151, 121);"></span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"Let's split up. One of you should go look for a landline. The other should look for Jody."</p>
              </div>
          </div>
        </div>
      <br>


      <div class="wrapper">
      <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_worried.png" alt="smart kid">
      <div class="textbox_border" style="background: rgb(93, 55, 125);">
      <span  class="nametag" style="background: rgb(93, 55, 125);">GABBY:</span> 
          <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Either way, lets destroy any strange statues we run into."</p>
        </div>
    </div>
    </div>
    <br>

    <h3> Who should go look for the landline? </h3>
  
    <button class="choiceButton" onclick="gabbyFind()">Gabby</button>
    <button class="choiceButton" onclick="theoFind()">Theo </button> 

      `); }


/////////////////////////////////////////
////The following functions are all grouped under Cody's room


      function codyRoom() {


        const $backgroundImgDiv = $("#backgroundImgDiv");
        $backgroundImgDiv.replaceWith(`
          <div id="backgroundImgDiv">
            <img src="Pictures/Background/Cody_Journal.png" alt="Cody's journal" width="35%">
          </div> 
        `);
      
      
      const $replacementDiv = $("#replacementDiv");
        $replacementDiv.replaceWith(`
          <div id="replacementDiv" class="center">
          
            <div class="wrapper">
      
              <div class="wrapper">
              <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="bad annoyed">
              <div class="textbox_border" style="background: rgb(25, 58, 148);">
                <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
                  <div  class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I found our phones... and Cody's journal. We have to get out of here. Now!"</p>
                  </div>
              </div>
            </div>
            <br>
            </div>
      
      
            <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_worried.png" alt="theo">
            <div class="textbox_border" style="background: rgb(130, 103, 72);">
              <span  class="nametag" style="background: rgb(130, 103, 72);">THEO:</span> 
                <div  class="textbox_text">
                  <p style=" margin: 15px; text-align: left;">"This is freaking me out!"</p>
                </div>
            </div>
          </div>
      
          <p> All campers grab their phones and dial for help.</p> 

          <button class="choiceButton" onclick="codyNext0()">Next</button>
      
          </div>
      
          `); }

      function codyNext0(){
          
      const $replacementDiv = $("#replacementDiv");
      $replacementDiv.replaceWith(`

      <div id="replacementDiv" class="center">
          <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/snobby_character/Snobby_Speaking.png" alt="Ella">
          <div class="textbox_border" style="background: rgb(217, 173, 54);">
            <span  class="nametag" style="background: rgb(217, 173, 54);">ELLA:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"My calls won't go through. What's going on?" </p>
              </div>
          </div>
        </div>
      
      
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_serious.png" alt="katie speaking">
        <div class="textbox_border" style="background: rgb(184, 69, 31);">
          <span  class="nametag" style="background: rgb(184, 69, 31);">KATIE:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"I can't get mine to work either."</p>
            </div>
        </div>
      </div>
      
      <p>None of the campers are able to make any calls.</p>

<button class="choiceButton" onclick="codyNext1()">Next</button>
</div>



`); }

function codyNext1(){

    
  const $replacementDiv = $("#replacementDiv");
  $replacementDiv.replaceWith(`
    <div id="replacementDiv" class="center">
  
      
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Worried.png" alt="Benjy">
        <div class="textbox_border" style="background: rgb(186, 123, 114);">
          <span  class="nametag" style="background: rgb(186, 123, 114);">BENJY:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"We're stuck here!"</p>
            </div>
        </div>
      </div>
      
      
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_worried.png" alt="smart kid">
        <div class="textbox_border" style="background: rgb(93, 55, 125);">
        <span  class="nametag" style="background: rgb(93, 55, 125);">GABBY:</span> 
            <div  class="textbox_text">
            <p style=" margin: 15px; text-align: left;">"There must be really bad reception up here. We have to go find a landline."</p>
          </div>
      </div>
      </div>
      <br>
      
      <div class="wrapper">
      <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_worried.png" alt="theo">
      <div class="textbox_border" style="background: rgb(130, 103, 72);">
      <span  class="nametag" style="background: rgb(130, 103, 72);">THEO:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"We have to tell Jody about Cody's journal. She could help."</p>
        </div>
      </div>
      </div>
      
      <button class="choiceButton" onclick="codyNext2()">Next</button>

</div>


`); }

function codyNext2(){
      
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
                      <p style=" margin: 15px; text-align: left;">"We need to get to the bottom of this. Fast. One of you should go look for a landline. The other should go find Jody."</p>
                    </div>
                </div>
              </div>
            <br>
      
      
            <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_worried.png" alt="smart kid">
            <div class="textbox_border" style="background: rgb(93, 55, 125);">
            <span  class="nametag" style="background: rgb(93, 55, 125);">GABBY:</span> 
                <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"Lets destroy any strange statues we run into."</p>
              </div>
          </div>
          </div>
          <br>
      
          <h3> Who should go look for the landline? </h3>
        
          <button class="choiceButton" onclick="gabbyFind()">Gabby</button>
          <button class="choiceButton" onclick="theoFind()">Theo </button> 
      
            `); }



function gabbyFind(){

  stoppedCody = true;

  const $replacementDiv = $("#replacementDiv");

  $replacementDiv.replaceWith(`

  <div id="replacementDiv" class="center">

  <p> Gabby searches for a landline and Theo searches for Jody</p>
  <br>

  <div class="wrapper">
  <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_serious.png" alt="katie speaking">
  <div class="textbox_border" style="background: rgb(184, 69, 31);">
    <span  class="nametag" style="background: rgb(184, 69, 31);">KATIE:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"I think someone should come confront Cody with me."</p>
      </div>
  </div>
</div>


<div class="wrapper">
<img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Worried.png" alt="Benjy">
<div class="textbox_border" style="background: rgb(186, 123, 114);">
  <span  class="nametag" style="background: rgb(186, 123, 114);">BENJY:</span> 
    <div  class="textbox_text">
      <p style=" margin: 15px; text-align: left;">"I'm not going. Cody is bad news."</p>
    </div>
</div>
</div>


<div class="wrapper">
<img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="bad annoyed">
<div class="textbox_border" style="background: rgb(25, 58, 148);">
  <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
    <div  class="textbox_text">
      <p style=" margin: 15px; text-align: left;">"I'll go. We need one more person....Hey you! You're coming with us."</p>
    </div>
</div>
</div>

<button class="nextButton" onclick="lookCodyNext0()">Go look for Cody</button>

  </div>
  `

  
  ); }

  
  function theoFind(){

   stoppedCody = false;

    const $replacementDiv = $("#replacementDiv");
  
    $replacementDiv.replaceWith(`
  
    <div id="replacementDiv" class="center">
  
    <p> Theo searches for a landline and Gabby searches for Jody</p>
    <br>
  
    <div class="wrapper">
    <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_serious.png" alt="katie speaking">
    <div class="textbox_border" style="background: rgb(184, 69, 31);">
      <span  class="nametag" style="background: rgb(184, 69, 31);">KATIE:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"I think someone should come confront Cody with me. "</p>
        </div>
    </div>
  </div>
  
  
  <div class="wrapper">
  <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_worried.png" alt="Benjy">
  <div class="textbox_border" style="background: rgb(186, 123, 114);">
    <span  class="nametag" style="background: rgb(186, 123, 114);">BENJY:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"I'm not going. Cody is bad news."</p>
      </div>
  </div>
  </div>
  
  
  <div class="wrapper">
  <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="bad annoyed">
  <div class="textbox_border" style="background: rgb(25, 58, 148);">
    <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"I'll go. We need one more person. Hey you! You're coming with us."</p>
      </div>
  </div>
  </div>
  
  <button class="nextButton" onclick="lookCodyNext0()">Go look for Cody</button>
  
    </div>
    `); }
//////////////////////////////////////////////////////////////////
  function lookCodyNext0(){


    const $backgroundImgDiv = $("#backgroundImgDiv");
    $backgroundImgDiv.replaceWith(`
      <div id="backgroundImgDiv">
        <img src="Pictures/Background/woods_dark.png" alt="dark woods" width="35%">
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
  
    <p>Zach, Katie, and you hear screaming coming from the woods.</p>
  
    <br>
  

    <div class="wrapper">
    <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/snobby_character/Snobby_mad.png" alt="Ella">
    <div class="textbox_border" style="background: rgb(217, 173, 54);">
      <span  class="nametag" style="background: rgb(217, 173, 54);">ELLA:</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Help me! I'm tied up!"</p>
        </div>
    </div>
  </div>


  
<div class="wrapper">
<img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_Speaking.png" alt="MC">

<div class="textbox_border" style="background: rgb(49, 151, 121);">
  <span  class="nametag" style="background: rgb(49, 151, 121);"></span> 
    <div  class="textbox_text">
      <p style=" margin: 15px; text-align: left;">"Let's go!"</p>
    </div>
</div>
</div>
<br>

    <button class="nextButton" onclick="lookCodyNext1()">Go to the woods</button>

    </div>
    `); }

    function lookCodyNext1(){


      const $backgroundImgDiv = $("#backgroundImgDiv");
      $backgroundImgDiv.replaceWith(`
        <div id="backgroundImgDiv">
          <img src="Pictures/Background/Weird_Shrine.png" alt="weird Shrine" width="35%">
        </div> 
      `);
    
  
      const $replacementDiv = $("#replacementDiv");
    
      $replacementDiv.replaceWith(`
    
      <div id="replacementDiv" class="center">

      <p>You all run into a group of statues in the middle of the woods...</p>
      <br>
    
      <div class="wrapper">
      <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_Worried.png" alt="katie speaking">
      <div class="textbox_border" style="background: rgb(184, 69, 31);">
        <span  class="nametag" style="background: rgb(184, 69, 31);">KATIE:</span> 
          <div  class="textbox_text">
            <p style=" margin: 15px; text-align: left;">"Statues... what should we do?"</p>
          </div>
      </div>
    </div>
  

    <div class="wrapper">
<img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Scared.png" alt="bad annoyed">
<div class="textbox_border" style="background: rgb(25, 58, 148);">
  <span  class="nametag" style="background: rgb(25, 58, 148);">ZACH:</span> 
    <div  class="textbox_text">
      <p style=" margin: 15px; text-align: left;">"Pipe down. Someone is coming."</p>
    </div>
</div>
</div>

<button class="nextButton" onclick="codyAppears()">Next</button>
      </div>
      `); }

      function codyAppears(){


        const $backgroundImgDiv = $("#backgroundImgDiv");
        $backgroundImgDiv.replaceWith(`
          <div id="backgroundImgDiv">
            <img src="Pictures/Background/Zach_Is_Caught.png" alt="Zach is caught" width="35%">
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
  
        <p>An evil creature towers over the group and snatches Zach. </p>
        <br>

        <p>Cody appears behind the monster, instructing it to kill Zach.</p>
    

        <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Male_counselor/Cody_Yelling.png" alt="cody Speaking">
          <div class="textbox_border" style="background: gray;">
            <span  class="nametag" style="background: gray;">CODY:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"You kids have now seen the truth. Alex didn't go mising. The beast needed to eat. Ella the brat was going to be his next meal, but I think Zach needs to go first! He's been a real pain!"</p>
              </div>
          </div>
        </div>
   
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_serious.png" alt="katie speaking">
        <div class="textbox_border" style="background: rgb(184, 69, 31);">
          <span  class="nametag" style="background: rgb(184, 69, 31);">KATIE:</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"We have to do something!!"</p>
            </div>
        </div>
      </div>
  

      <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_worried.png" alt="MC">

      <div class="textbox_border" style="background: rgb(49, 151, 121);">
        <span  class="nametag" style="background: rgb(49, 151, 121);"></span> 
          <div  class="textbox_text">
            <p style=" margin: 15px; text-align: left;">"Maybe if we break a statue!"</p>
          </div>
      </div>

      <button class="nextButton" onclick="pickStatue()">Next</button>
      </div>
    </div>
  <br>


        `); }
////////////////////
    
///////////////////////
        function pickStatue(){


          const $backgroundImgDiv = $("#backgroundImgDiv");
          $backgroundImgDiv.replaceWith(`
          <div id="backgroundImgDiv">
          <img src="Pictures/Background/Weird_Shrine.png" alt="weird Shrine" width="35%">
        </div> 
          `);
        
      
          const $replacementDiv = $("#replacementDiv");
        
          $replacementDiv.replaceWith(` 
          <div id="replacementDiv" class="center">
  
        
         <p> Pick a statue to break! You only have time for one. </p>


           
         <button class="choiceButton" onclick="wrong()">Bear</button>
         <button class="choiceButton" onclick="wrong()">Eagle</button> 
           
         <button class="choiceButton" onclick="pickLion()">Lion</button>
         <button class="choiceButton" onclick="wrong()">Tiger</button> 

         </div>

          `); }
  

          function wrong(){
            const $backgroundImgDiv = $("#backgroundImgDiv");
            $backgroundImgDiv.replaceWith(`
            <div id="backgroundImgDiv">
            <img src="Pictures/Background/Zach_Is_Eaten.png" alt="Zach is eaten" width="35%">
          </div> 
            `);
          
        
            const $replacementDiv = $("#replacementDiv");
          
            $replacementDiv.replaceWith(`
          
            <div id="replacementDiv" class="center">
  
           <p> The monster was unaffected by the broken statue and Zach is devoured. The monster disappears back into the woods looking for Ella.</p>
  
           <button class="nextButton" onclick="endScene()">Next</button>
  </div>
            `); }
          
  

            function pickLion(){
              const $backgroundImgDiv = $("#backgroundImgDiv");
              $backgroundImgDiv.replaceWith(`
              <div id="backgroundImgDiv">
              <img src="Pictures/Background/monster.png" alt="Monster" width="35%">
            </div> 
              `);
            
          
              const $replacementDiv = $("#replacementDiv");
            
              $replacementDiv.replaceWith(`
            
              <div id="replacementDiv" class="center">
             <p> The monster releases Zach and fades away permanently along with its broken statue.</p>
    
             <button class="nextButton" onclick="endScene()">Next</button>
             </div>
              `); 
            }


   function endScene(){
   
                if(stoppedCody){
                const $backgroundImgDiv = $("#backgroundImgDiv");
                $backgroundImgDiv.replaceWith(`
                <div id="backgroundImgDiv">
                <img src="Pictures/Background/Police_Car.png" alt="Police car" width="35%">
              </div> 
                `);
              
            
                const $replacementDiv = $("#replacementDiv");
              
                $replacementDiv.replaceWith(`

                <div id="replacementDiv" class="center">
  
              
               <p>You had sent Gabby to look for the landline. She was able to find the landline and she called the police. The police showed up before Cody was able to escape. <br>
               Cody is arrested. You and the remaining campers are rescued.</p>

               <button class = "choiceButton" onclick = "next()"> Congrats on Finishing! View Your Achievements Here </button>
               </div>

               </div>
  
                `);

                }

              else{

                const $backgroundImgDiv = $("#backgroundImgDiv");
                $backgroundImgDiv.replaceWith(`
                <div id="backgroundImgDiv">
                <img src="Pictures/CharactersIMG/Male_counselor/Cody_Evil.png" alt="Counselor Evil" width="35%">
              </div> 
                `);
              
            
                const $replacementDiv = $("#replacementDiv");
              
                $replacementDiv.replaceWith(`

                <div id="replacementDiv" class="center">
  
              
               <p>Theo was unable to find the landline, and nobody showed up to help. Cody was able to escape without a trace. </p>

               <button class = "choiceButton" onclick = "next()"> Congrats on Finishing! View Your Achievements Here </button>
               </div>
  
                `);


              }
              }

              function next() {
                updateachievements('day4')
                window.location.href = "achievements4.html"
              }