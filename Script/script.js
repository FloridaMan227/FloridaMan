$(document).ready(function() {

  var myArray = [
    "Florida Man ",
    "Florida Woman ",
    "Drunk Florida Man ",
    "Drunk Florida Woman ",
    "Florida Couple ",
    "Florida High School Student ",
    "Florida Homeless Man ",
    "Florida Homeless Woman ",
    "Florida Firefighter ",
    "Florida Paramedic ",
    "Florida Sheriff",
    "Florida Police Officer ",
    "Florida Garbage Man",
  ];
  var myArray2 = [
    "Smears Bananas On Cars",
    "Steals Cable Truck",
    "Steals Hot Air Balloon",
    "Steals Car",
    "Steals Multiple Vehicles",
    "Steals From Walmart",
    "Steals From 7/11",
    "Steals Swan Statue,",
    "Stabs Florida Man",
    "Hijacks Cable Car",
    "Hijacks Light Aircraft",
    "Exchanges 12 Shotgun Rounds At Intersection,",
    "Arrested For Throwing Alligator,",
    "Charged With Child Neglect,",
    "Shot Over Argument,",
    "Dets Drunk on Plane",
    "Pulls Bull Shark From Ocean,",
    "Pleasures Themselves In Back Of Cop Car,",
    "Crashes Into Daytona International Speedway Infield,",
    "Has Baby With Brother,",
    "Jailed After Reporting For Jury Duty Drunk,",
    "Pulls Two Guns After 7-Eleven Clerk Refuses Pennies,",
    "Charged After Biting Off Chicken’s Head,",
    "Has Redneck Wedding At Mud Park",
    "Smoked Crack While Giving Birth, Hid Baby In Back Yard,",
    "Says Turtle Army Will Destroy Everyone,",
    "Had Daughter Sell Pot Brownies At School,",
    "Bites Dog, Then Brother,",
    "Shoots McDonalds Employee,",
    "Offers Favors For $25 and Chicken McNuggets,",
    "Fired For Sleeping With Clients,",
    "Tries To Run Over Ex-Boyfriend Twice After Break-Up,",
    "Reported Drug Deal Robbery,",
    "Falls Asleep During Home Burglary,",
    "Calls Cops Because Thermos Containing Semen May Explode,",
    "Sues James Cameron, Claims Titanic Movie Based On Their Life,",
    "Shot by Little Caesar’s Employee",
    "Charged With Picking Magic Mushrooms,",
    "Calls 911 For Ride To Hooters,",
    "Advertises Counterfeit Cash For Sale On Craigslist,",
    "Stabs Husband With Sword,",
    "Stabs Wife With Sword,",
    "Attacks ATM For ‘Giving Him Too Much Money’",
    "Eats Chicken, Drinks Wine,",
    "Released Poisonous Snakes,",
    "Shot Twice After Daring Brother To Shoot Them,",
    "Uses Softball Skills To Bash Half-Naked Burglar's Head With Bat"
  ];
  var myArray3 = [
    "While Carrying An Alligator",
    "Wearing Clown Mask",
    "Gets Ride To Jail Instead",
    "Police Officer Killed",
    "Nobody Seriously Injured",
    "Wearing Only A Bra",
    "May Be Charged For Shooting",
    "Is Arrested",
    "When Fleeing Deputies",
    "Charged with Murder",
    "Is Charged with Theft",
    "Charged with Fraud",
    "While Holding $9000 In Stolen Jewellery",
    "Caused Over $32,000 In Damages",
    "Fiesty Grandma Hits Him With Baseball Bat",
  ];

  $('.btn').click(function() {
    var fruits = ['Apple', 'Banana'];
    var first = $('#first');
    var second = $('#second');
    var third = $('#third');
    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    var randomItem2 = myArray2[Math.floor(Math.random() * myArray2.length)];
    var randomItem3 = myArray3[Math.floor(Math.random() * myArray3.length)];

    console.log(randomItem, randomItem2, randomItem3);
    $('#first').html(randomItem);
    $('#second').html(randomItem2);
    $('#third').html(randomItem3);
  });
});
