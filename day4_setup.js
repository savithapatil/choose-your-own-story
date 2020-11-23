function jodyRoom() {


  const $backgroundImgDiv = $("#backgroundImgDiv");
  $backgroundImgDiv.replaceWith(`
    <div id="backgroundImgDiv">
    <p>Zach comes back with the phones and Jody's journal </p>
      <img src="Pictures/Background/Jody_Journal.png" alt="Jody's journal" width="35%" class="center">
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
              <p style=" margin: 15px; text-align: left;">"Check it out. I found Jody's journal in the same drawer with all of our phones."</p>
            </div>
        </div>
      </div>
      <br>

      <div class="wrapper">
      <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/snobby_character/Snobby_Speaking.png" alt="Ella">
      <div class="textbox_border" style="background: rgb(217, 173, 54);">
        <span  class="nametag" style="background: rgb(217, 173, 54);">Ella</span> 
          <div  class="textbox_text">
            <p style=" margin: 15px; text-align: left;">"Hand me the yellow one. That one's mine." *Starts dialing*</p>
          </div>
      </div>
    </div>

    <div class="wrapper">
    <img style="width: 18%; float:left;" src="Pictures/CharactersIMG/snobby_character/Snobby_mad.png" alt="Ella">
    <div class="textbox_border" style="background: rgb(217, 173, 54);">
      <span  class="nametag" style="background: rgb(217, 173, 54);">Ella</span> 
        <div  class="textbox_text">
          <p style=" margin: 15px; text-align: left;">..... No way! My calls aren't going through. </p>
        </div>
    </div>
  </div>
    <br>

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

        
  </div>
  `); }