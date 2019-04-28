$(document).ready(function() {
  function algorithmn(){
    $('.paper').addClass('spinning').delay(700).queue(function() {
      $('.paper').removeClass('spinning').dequeue();
    });
    // fade out items on click
    $('#first').fadeOut(1);
    $('#second').fadeOut(1);
    $('#third').fadeOut(1);
    $('.headline').fadeOut(1);
    // set up vars for Person/Event/Modifier
    var first = $('#first'); // Person
    var second = $('#second'); // Event
    var third = $('#third'); // Modifier
    var newspaper = $('#paper');

    //Generate Randoms ------------------------
    var randomGender = genderChoice[Math.floor(Math.random() * genderChoice.length)];
    var randomOccupation = occupationList[Math.floor(Math.random() * occupationList.length)];
    var randomNationality = nationalityList[Math.floor(Math.random() * nationalityList.length)];
    var randomDrug = drugList[Math.floor(Math.random() * drugList.length)];
    var randomAllVEH = allVehiclesList[Math.floor(Math.random() * allVehiclesList.length)];
    var randomLandVEH = landVehicleList[Math.floor(Math.random() * landVehicleList.length)];
    var randomSAnimal = smallAnimalList[Math.floor(Math.random() * smallAnimalList.length)];
    var randomLAnimal = bigAnimalList[Math.floor(Math.random() * bigAnimalList.length)];
    var randomTen = tenList[Math.floor(Math.random() * tenList.length)];
    var randomHundred = hundList[Math.floor(Math.random() * hundList.length)];
    var randomPaper = newspaperPostfix[Math.floor(Math.random() * newspaperPostfix.length)];
    var randomPolitical = politicalGroups[Math.floor(Math.random() * politicalGroups.length)];
    var randomCriminal = criminalOrganisations[Math.floor(Math.random() * criminalOrganisations.length)];
    var randomCity = cityList[Math.floor(Math.random() * cityList.length)];
    var randomCountry = countryList[Math.floor(Math.random() * countryList.length)];
    var randomCompany = companyList[Math.floor(Math.random() * companyList.length)];
    var celebStatus = isCelebrity[Math.floor(Math.random() * isCelebrity.length)];

    // Generate Random Male or Female and Log Value
    if (randomGender == "Male") {
      if (celebStatus == "Normal") {
        var randomPerson = maleList[Math.floor(Math.random() * maleList.length)];
        var randomPerson2 = celebFemaleList[Math.floor(Math.random() * femaleList.length)];
      } else {
        var randomPerson = celebMaleList[Math.floor(Math.random() * celebMaleList.length)];
        var randomPerson2 = celebFemaleList[Math.floor(Math.random() * celebFemaleList.length)];
      }
      var spouseGen = "Wife";
      var whatgender = "Man"

    } else if (randomGender == "Female") {
      if (celebStatus == "Normal") {
        var randomPerson = femaleList[Math.floor(Math.random() * femaleList.length)];
        var randomPerson2 = celebFemaleList[Math.floor(Math.random() * maleList.length)];
      } else {
        var randomPerson = celebFemaleList[Math.floor(Math.random() * celebFemaleList.length)];
        var randomPerson2 = celebMaleList[Math.floor(Math.random() * celebMaleList.length)];
      }
      var spouseGen = "Husband";
      var whatgender = "Woman"
    }
    // Generate Crime Story True/False ---------------
    var crimePicker = crimeStory[Math.floor(Math.random() * crimeStory.length)];

    // If Crime = True  -----------------------
    if (crimePicker == "True") {
      console.log("Criminal Story")
      var randomEvent = criminalEventList[Math.floor(Math.random() * criminalEventList.length)];
      var randomModifier = criminalModifierList[Math.floor(Math.random() * criminalModifierList.length)];

      // If Crime = False ----------------
    } else {
      console.log("Non Criminal Story")
      var randomEvent = eventList[Math.floor(Math.random() * eventList.length)];
      var randomModifier = modifiersList[Math.floor(Math.random() * modifiersList.length)];
    }

    // LOG OUTPUTS ------------
    console.log(
      randomPerson,
      randomPerson2,
      randomGender,
      randomOccupation,
      randomNationality,
      randomDrug,
      randomAllVEH,
      randomLandVEH,
      randomSAnimal,
      randomLAnimal,
      randomTen,
      randomHundred,
      randomPaper,
      randomPolitical,
      randomCriminal,
      randomCity,
      randomCountry,
      randomEvent,
      randomModifier,
      spouseGen,
      randomCompany,
    )
    var defaultPaper = "[NAT] [NPP]"
    var fullPaper = defaultPaper.replace("[NAT]", randomCity).replace("[NPP]", randomPaper);
    $('.headline').html(fullPaper);
    //REPLACE FIRST & REPLACE VARS
    first.delay(0).html(randomPerson.replace("[LOC]", randomNationality).replace('[VEH]', randomLandVEH).replace('[OCC]', randomOccupation));
    //REPLACE SECOND & REPLACE VARS
    second.delay(0).html(randomEvent.replace("[P2]", randomPerson2).replace('[LOC]', randomNationality).replace("[VEH]", randomLandVEH).replace("[SMAN]", randomSAnimal).replace("[COMP]", randomCompany).replace("[DRUG]", randomDrug).replace("[HUND]", randomHundred).replace("[BANI]", randomLAnimal).replace("[OCC]", randomOccupation));
    //REPLACE THIRD & REPLACE VARS
    third.delay(0).html(randomModifier.replace("[P2]", randomPerson2).replace('[LOC]', randomCity).replace("[VEH]", randomAllVEH).replace("[NAT]", randomNationality).replace("[CITY]", randomCity).replace("[SMAN]", randomSAnimal).replace('[OCC]', randomOccupation));

    //PRINT VATS INTO HTML
    $('#first').fadeIn(300);
    $('#second').fadeIn(300);
    $('#third').fadeIn(300);
    $('.headline').fadeIn(300);
    console.log(celebStatus)
    if (celebStatus == "Normal") {
      if (crimePicker == "True") {
        var keyword = "Police Car, Cop Car, Car Crash, Crime Scene, Courtroom, Courthouse, Protest,"
      } else {
        var keyword = whatgender
      }
    } else {
      if (crimePicker == "True") {
        var keyword = "Police Car, Cop Car, Car Crash, Crime Scene, Courtroom, Courthouse, Protest,"
      } else {
        var keyword = first.html();
      }
    }
    console.log(keyword)
    var keyword2 = second.html();

    $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
      tags: keyword,
      tagmode: "any",
      format: "json"
    },
    function(data) {
      var rnd = Math.floor(Math.random() * data.items.length);
      var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
      $('.paper__articleImage').css('background-image', "url('" + image_src + "')");
    });
  }
  $('.btn').click(algorithmn);
  $(document).keydown(function(e) {
    if (e.keyCode == 32) {
      algorithmn();
      return false;
    }

  });
});
