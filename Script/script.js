$(document).ready(function() {

  var myArray = [
    "Florida Man",
    "Florida Woman",
    "Drunk Florida Man",
    "Drunk Florida Woman",
    "Florida Couple",
    "Florida High School Student",
    "Clothe-less Florida Man",
    "Clothe-less Florida Woman"
  ];
  var myArray2 = [
  "Smears Bananas On Cars",
  "Steals Cable Truck",
  "Steals Hot Air Balloon",
  "Steals Car",
  "Steals Multiple Vehicles",
  "Steals From Walmart",
  "Steals From 7/11",
  "Steals Swan Statue",
  "Stabs Florida Man",
  "Exchange 12 Shotgun Rounds At Intersection",
  "Arrested For Throwing Alligator",
  "Charged With Child Neglect",
  "Shot Over Argument",
  "Pulls Bull Shark From Ocean",
  "Pleasures Themselves In Back Of Cop Car",
  "Crashes Into Daytona International Speedway Infield",
  "Arrested After Having Baby With Brother",
  "Jailed After Reporting For Jury Duty Drunk",
  "Pulls Two Guns After 7-Eleven Clerk Refuses Pennies",
  "Charged After Biting Off Chicken’s Head",
  "Has Redneck Wedding At Mud Park",
  "Smoked Crack While Giving Birth, Hid Baby In Back Yard",
  "Says Turtle Army Will Destroy Everyone",
  "Had Daughter Sell Pot Brownies At School",
  "Bites Dog, Then Brother",
  "Loved That Chicken From Popeyes, Hated Price, Shot Employee",
  "Offers Favors For $25 and Chicken McNuggets",
  "Lawyer Disbarred For Sleeping With Her Clients",
  "Tries To Run Over Ex-Boyfriend Twice After Break-Up",
  "Arrested After Reporting Drug Deal Robbery",
  "Arrested After Falling Asleep During Home Burglary",
  "Calls Cops Because Thermos Containing Semen May Explode",
  "Sues James Cameron, Claims Titanic Movie Based On Their Life",
  "Shot by Little Caesar’s Employee",
  "Charged With Picking Magic Mushrooms",
  "Calls 911 For Ride To Hooters"
  ];
  var myArray3 = [
    "While Carrying An Alligator",
    "Wearing Clown Mask",
    "Gets Ride To Jail Instead",
    "Nobody Seriously Injured",
    "Wearing Only A Bra",
    "May Be Charged For Shooting",
    "Is Arrested"
  ];

$('.btn').click(function() {
  var fruits = ['Apple', 'Banana'];
  var first = $('#first');
  var second = $('#second');
  var third = $('#third');
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  var randomItem2 = myArray2[Math.floor(Math.random()*myArray2.length)];
  var randomItem3 = myArray3[Math.floor(Math.random()*myArray3.length)];

  console.log(randomItem, randomItem2, randomItem3);
$('#first').html(randomItem);
$('#second').html(randomItem2);
$('#third').html(randomItem3);
});
});
