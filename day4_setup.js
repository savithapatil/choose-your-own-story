function jodyRoom() {


  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
    <p>Zach comes back with the phones and Jody's journal </p>
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
          <span  class="nametag" style="background: rgb(25, 58, 148);">Zach</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"Check it out. I found Jody's journal while looking for our phones."</p>
            </div>
        </div>
      </div>
      <br>
      </div>


      <div class="wrapper">
      <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_Speaking.png" alt="theo">
      <div class="textbox_border" style="background: rgb(130, 103, 72);">
        <span  class="nametag" style="background: rgb(130, 103, 72);">Theo</span> 
          <div  class="textbox_text">
            <p style=" margin: 15px; text-align: left;">"I don't like how this sounds. I'm calling home."</p>
          </div>
      </div>
    </div>

    <p> All campers grab their phones and dial for help.</p> 

    <div class="wrapper">
    <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/snobby_character/Snobby_Speaking.png" alt="Ella">
    <div class="textbox_border" style="background: rgb(217, 173, 54);">
      <span  class="nametag" style="background: rgb(217, 173, 54);">Ella</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"Hand me the yellow phone. That one's mine." *Starts dialing* .....  "No way! My calls aren't going through."</p>
        </div>
    </div>
  </div>

  

  <div class="wrapper">
  <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_Speaking.png" alt="katie speaking">
  <div class="textbox_border" style="background: rgb(184, 69, 31);">
    <span  class="nametag" style="background: rgb(184, 69, 31);">Katie</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"Same here."</p>
      </div>
  </div>
</div>

<p>None of the campers are able to make any calls.</p>



<div class="wrapper">
  <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Speaking.png" alt="Benjy">
  <div class="textbox_border" style="background: rgb(186, 123, 114);">
    <span  class="nametag" style="background: rgb(186, 123, 114);">Benjy</span> 
      <div  class="textbox_text">
        <p style=" margin: 15px; text-align: left;">"Oh no!"</p>
      </div>
  </div>
</div>


  <div class="wrapper">
  <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_Speaking.png" alt="smart kid">
  <div class="textbox_border" style="background: rgb(93, 55, 125);">
  <span  class="nametag" style="background: rgb(93, 55, 125);">Gabby</span> 
      <div  class="textbox_text">
      <p style=" margin: 15px; text-align: left;">"There must be really bad reception up here. Dont worry. I bet there's a landline we could use."</p>
    </div>
</div>
</div>
<br>

<div class="wrapper">
<img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_Speaking.png" alt="theo">
<div class="textbox_border" style="background: rgb(130, 103, 72);">
<span  class="nametag" style="background: rgb(130, 103, 72);">Theo</span> 
  <div  class="textbox_text">
    <p style=" margin: 15px; text-align: left;">"We should ask Jody what's going on."</p>
  </div>
</div>
</div>



<div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_Speaking.png" alt="MC">

          <div class="textbox_border" style="background: rgb(49, 151, 121);">
            <span  class="nametag" style="background: rgb(49, 151, 121);">YOU:</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"Let's split up. One of you should go look for a landline. The other should look for Jody. "</p>
              </div>
          </div>
        </div>
      <br>


      <div class="wrapper">
      <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_Speaking.png" alt="smart kid">
      <div class="textbox_border" style="background: rgb(93, 55, 125);">
      <span  class="nametag" style="background: rgb(93, 55, 125);">Gabby</span> 
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



      function codyRoom() {


        const $backgroundImgDiv = $("#backgroundImgDiv");
        $backgroundImgDiv.replaceWith(`
          <div id="backgroundImgDiv">
          <p>Zach comes back with the phones and Cody's journal </p>
            <img src="Pictures/Background/Cody_Journal.png" alt="Jody's journal" width="35%">
          </div> 
        `);
      
      
      const $replacementDiv = $("#replacementDiv");
        $replacementDiv.replaceWith(`
          <div id="replacementDiv" class="center">
          
            <div class="wrapper">
      
              <div class="wrapper">
              <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/bad_camper/Bad_Kid_Speaking.png" alt="bad annoyed">
              <div class="textbox_border" style="background: rgb(25, 58, 148);">
                <span  class="nametag" style="background: rgb(25, 58, 148);">Zach</span> 
                  <div  class="textbox_text">
                    <p style=" margin: 15px; text-align: left;">"I found our phones... and Cody's journal. We have to get out of here. Now!"</p>
                  </div>
              </div>
            </div>
            <br>
            </div>
      
      
            <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_Speaking.png" alt="theo">
            <div class="textbox_border" style="background: rgb(130, 103, 72);">
              <span  class="nametag" style="background: rgb(130, 103, 72);">Theo</span> 
                <div  class="textbox_text">
                  <p style=" margin: 15px; text-align: left;">"This is freaking me out!"</p>
                </div>
            </div>
          </div>
      
          <p>All campers grab their phones and dial for help.</p> 

       

          <div class="wrapper">
          <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/snobby_character/Snobby_Speaking.png" alt="Ella">
          <div class="textbox_border" style="background: rgb(217, 173, 54);">
            <span  class="nametag" style="background: rgb(217, 173, 54);">Ella</span> 
              <div  class="textbox_text">
                <p style=" margin: 15px; text-align: left;">"My calls won't go through. What's going on? " </p>
              </div>
          </div>
        </div>
      
      
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/athletic_camper/Sporty_Camper_Speaking.png" alt="katie speaking">
        <div class="textbox_border" style="background: rgb(184, 69, 31);">
          <span  class="nametag" style="background: rgb(184, 69, 31);">Katie</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"I can't get mine to work either!"</p>
            </div>
        </div>
      </div>
      
      <p>None of the campers are able to make any calls.</p>
      
      
      
      <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/nice_camper/Nice_Camper_Speaking.png" alt="Benjy">
        <div class="textbox_border" style="background: rgb(186, 123, 114);">
          <span  class="nametag" style="background: rgb(186, 123, 114);">Benjy</span> 
            <div  class="textbox_text">
              <p style=" margin: 15px; text-align: left;">"We're stuck here!"</p>
            </div>
        </div>
      </div>
      
      
        <div class="wrapper">
        <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_Speaking.png" alt="smart kid">
        <div class="textbox_border" style="background: rgb(93, 55, 125);">
        <span  class="nametag" style="background: rgb(93, 55, 125);">Gabby</span> 
            <div  class="textbox_text">
            <p style=" margin: 15px; text-align: left;">"There must be really bad reception up here. We have to go find a landline."</p>
          </div>
      </div>
      </div>
      <br>
      
      <div class="wrapper">
      <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/Outdoor_camper/Outdoorsy_camper_Speaking.png" alt="theo">
      <div class="textbox_border" style="background: rgb(130, 103, 72);">
      <span  class="nametag" style="background: rgb(130, 103, 72);">Theo</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">"We have to tell Jody about Cody's journal. She could help."</p>
        </div>
      </div>
      </div>
      
      
      
      <div class="wrapper">
                <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/MC_Male/Player_Camper_worried.png" alt="MC">
      
                <div class="textbox_border" style="background: rgb(49, 151, 121);">
                  <span  class="nametag" style="background: rgb(49, 151, 121);">YOU:</span> 
                    <div  class="textbox_text">
                      <p style=" margin: 15px; text-align: left;">"We need to get to the bottom of this. Fast. One of you should go look for a landline. The other should go find Jody."</p>
                    </div>
                </div>
              </div>
            <br>
      
      
            <div class="wrapper">
            <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/smart_character/Smart_Camper_Speaking.png" alt="smart kid">
            <div class="textbox_border" style="background: rgb(93, 55, 125);">
            <span  class="nametag" style="background: rgb(93, 55, 125);">Gabby</span> 
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

  const $replacementDiv = $("#replacementDiv");

  $replacementDiv.replaceWith(`

  <div id="replacementDiv" class="center">

  <p> Gabby finds the landline and calls 911 </p>

  <br>
  <p> Meanwhile, Theo looks for Jody </p>

  </div>
  `); }

  
function theoFind(){

  const $replacementDiv = $("#replacementDiv");

  $replacementDiv.replaceWith(`

  <div id="replacementDiv" class="center">

  <p>Theo is unable to find a landline... </p>

  <br>
  <p> Meanwhile, Gabby looks for Jody </p>

  </div>
  `); }