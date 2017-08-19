
//rest button not finished//
window.onload = function() {
  $("#reset").on("click", crystalgame.reset); 
// name needs to link with reset for whole page//
};

var targetNumber = 95;
  $("#number-to-guess").text(targetNumber);
  var counter = 0;

  //need to create 4 var options to generate 4 random numbers for each image every time the game is reset//

  var numberOptions = [15];

  // Create a for loop for each numberOption. //

  // all the 4 crystal type will be put into there own for loop {  } //

  // will add in  var = Math.floor(Math.random()  to generate a random number each time game is reset//

  for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");
    var imageCrystaltwo = $("<img>");
    var imageCrystalthree = $("<img>");
    var imageCrystalfour = $("<img>");


    imageCrystal.addClass("crystal-image");
    imageCrystaltwo.addClass("crystal-image");
    imageCrystalthree.addClass("crystal-image");
    imageCrystalfour.addClass("crystal-image");


    //image 1 //
    imageCrystal.attr("src", "https://i.pinimg.com/736x/ea/77/36/ea77366ae390a5cc145de6fc2d768810--whale-pictures-penguin-pictures.jpg");

     //image 2 tiger//
    imageCrystaltwo.attr("src", "https://static.pexels.com/photos/145939/pexels-photo-145939.jpeg"); 

    //image 3 bear//
    imageCrystalthree.attr("src", "https://columbuszoo.org/Media/columbus-zoo-aquarium/05-zoo-animals-lp_n-amer.jpg?sfvrsn=2&w=960&h=556&mode=crop");
   
    //image 4 peng//
    imageCrystalfour.attr("src", "https://thumbs.dreamstime.com/t/wolf-close-up-image-head-shoulders-timber-gray-shallow-depth-field-50678220.jpg");
    


    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    imageCrystaltwo.attr("data-crystalvalue", numberOptions[i]);
    imageCrystalthree.attr("data-crystalvalue", numberOptions[i]);
    imageCrystalfour.attr("data-crystalvalue", numberOptions[i]);

 
    $("#crystals").append(imageCrystal);
    $("#crystals").append(imageCrystaltwo);
    $("#crystals").append(imageCrystalthree);
    $("#crystals").append(imageCrystalfour);
  }

  $(".crystal-image").on("click", function() {


    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    
    counter += crystalValue;

    // win//
    alert("New score: " + counter);
    if (counter === targetNumber) {
      alert("Winner!");
    }

    //lose//
    else if (counter >= targetNumber) {
      alert("Lost!");
    }
  });
