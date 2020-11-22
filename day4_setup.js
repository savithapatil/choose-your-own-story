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
  `); }