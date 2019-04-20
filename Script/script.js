$(document).ready(function() {

  var myArray = [
    "Adam Sandler",
    "Adele",
    "Ariana Grande",
    "Al Pacino",
    "Angelina Jolie",
    "Anthony Hopkins",
    "Arnold Schwarzenegger",
    "Ashton Kutcher",
    "Barbara Streisand",
    "Ben Affleck",
    "Ben Stiller",
    "Benedict Cumberbatch",
    "Beyonce",
    "Bill Murray",
    "Bill O'Reilly",
    "Bill Paxton",
    "Billy Joel",
    "Bon Jovi",
    "Brad Pitt",
    "Brian Cox",
    "Elon Musk",
    "Joe Rogan",
    "Ozzy Osbourne",
    "Britney Spears",
    "Bruce Lee",
    "Bruce Springsteen",
    "Bruce Willis",
    "Bruno Mars",
    "Calvin Harris",
    "Cameron Diaz",
    "Carrie Fisher",
    "Catherine Zeta-Jones",
    "Celine Dion",
    "Chance The Rapper",
    "Channing Tatum",
    "Charlie Sheen",
    "Cher",
    "Chris Evans",
    "Chris Hemsworth",
    "Chris Martin",
    "Chris Rock",
    "Chris Tucker",
    "Christian Bale",
    "Christopher Reeve",
    "Christopher Walken",
    "Chuck Norris",
    "Clint Eastwood",
    "Colin Farrell",
    "Colin Firth",
    "Conor McGregor",
    "Courteney Cox",
    "Cristiano Ronaldo",
    "Dakota Fanning",
    "Daniel Craig",
    "Daniel Radcliffe",
    "Danny DeVito",
    "Danny Glover",
    "Dave Chappelle",
    "Demi Moore",
    "Dennis Hopper",
    "Denzel Washington",
    "Dick Van Dyke",
    "Dolly Parton",
    "Dr. Dre",
    "Dr. Phil",
    "Drake",
    "Drew Barrymore",
    "Dustin Hoffman",
    "Dwayne Johnson",
    "Ed Sheeran",
    "Eddie Murphy",
    "Ellen DeGeneres",
    "Ellen Page",
    "Elton John",
    "Emilia Clarke",
    "Emma Watson",
    "Eva Mendes",
    "Fernando Alonso",
    "Forest Whitaker",
    "Gareth Bale",
    "Gene Wilder",
    "George Clooney",
    "Gordon Ramsay",
    "Grace Kelly",
    "Guy Pearce",
    "Gwyneth Paltrow",
    "Halle Berry",
    "Harrison Ford",
    "Heath Ledger",
    "Helen Mirren",
    "Helena Bonham Carter",
    "Hilary Duff",
    "Hilary Swank",
    "Howard Stern",
    "Hugh Grant",
    "Hugh Jackman",
    "Hugh Laurie",
    "Ian McKellen",
    "Ice Cube",
    "Idris Elba",
    "J.K Rowling",
    "Jack Nicholson",
    "Jackie Chan",
    "Jake Gyllenhaal",
    "James Franco",
    "James Woods",
    "Jamie Foxx",
    "Jared Leto",
    "Jason Statham",
    "Jay Z",
    "Jennifer Aniston",
    "Jennifer Hudson",
    "Jennifer Lawrence",
    "Jennifer Lopez",
    "Jessica Alba",
    "Jet Li",
    "Jim Carrey",
    "Joaquin Phoenix",
    "Joe Pesci",
    "John Travolta",
    "Johnny Depp",
    "Johnny Knoxville",
    "Jude Law",
    "Judi Dench",
    "Julia Roberts",
    "Justin Bieber",
    "Justin Timberlake",
    "Kate Beckinsale",
    "Kate Hudson",
    "Kate Winslet",
    "Katy Perry",
    "Keanu Reeves",
    "Keira Knightley",
    "Kevin Bacon",
    "Kevin Costner",
    "Kevin Hart",
    "Kevin Spacey",
    "Kim Basinger",
    "Kim Kardashian",
    "Laurence Fishbourne",
    "LeBron James",
    "Leonardo DiCaprio",
    "Lewis Hamilton",
    "Liam Neeson",
    "Lindsay Lohan",
    "Lionel Messi",
    "Lisa Kudrow",
    "Louis C.K.",
    "Ludacris",
    "Macaulay Culkin",
    "Mark Hamill",
    "Mark Wahlberg",
    "Marlon Brando",
    "Marlon Wayans",
    "Matthew McConaughey",
    "Meg Ryan",
    "Megan Fox",
    "Mel Gibson",
    "Meryl Streep",
    "Michael J. Fox",
    "Mike Myers",
    "Mila Kunis",
    "Miley Cyrus",
    "Morgan Freeman",
    "Natalie Portman",
    "Neymar",
    "Nia Long",
    "Nick Frost",
    "Nicole Kidman",
    "Novak Djokovic",
    "Orlando Bloom",
    "Patrick Swayze",
    "Penelope Cruz",
    "Pierce Brosnan",
    "Queen Latifah",
    "Reese Witherspoon",
    "Renee Zellweger",
    "Rihanna",
    "Rob Schneider",
    "Robert De Niro",
    "Robert Downey Jr.",
    "Russell Brand",
    "Russell Crowe",
    "Ryan Gosling",
    "Ryan Reynolds",
    "Sacha Baron Cohen",
    "Samuel L. Jackson",
    "Sandra Bullock",
    "Scarlett Johansson",
    "Sean Bean",
    "Sean Connery",
    "Sean Diddy Combs",
    "Sebastian Vettel",
    "Selena Gomez",
    "Seth Green",
    "Seth MacFarlane",
    "Shia LaBeouf",
    "Simon Cowell",
    "Simon Pegg",
    "Stephen Curry",
    "Steve Buscemi",
    "Sylvester Stallone",
    "Taylor Swift",
    "Tiger Woods",
    "Tom Cruise",
    "Tom Hanks",
    "Usain Bolt",
    "Vin Diesel",
    "Whitney Houston",
    "Whoopi Goldberg",
    "Will Ferrell",
    "Donald Trump",
    "Theresa May",
    "Will Smith",
    "Zac Efron",
    "Oprah Winfrey",
    "Kendall Jenner",
    "Cara Delevingne",
    "Kate Moss",
    "Pixie Lott",
    "R. Kelly",
    "Tito Ortiz",
    "Demi Lovato",
    "Jimmy Kimmel",
    "Jay Leno",
    "Macy Gray",
    "Khloé Kardashian",
    "J. Cole",
    "Sam Smith",
    "Soulja Boy",
    "Terry Crews",
    "Man",
    "Woman",
    "Drunk Man",
    "Drunk Woman",
    "Man",
    "Woman",
    "Drunk Man",
    "Drunk Woman",
    "Man",
    "Woman",
    "Drunk Man",
    "Drunk Woman",
    "Man",
    "Woman",
    "Drunk Man",
    "Drunk Woman",
    "Couple",
    "High School Student",
    "Homeless Man",
    "Homeless Woman",
    "Man",
    "Woman",
    "Drunk Man",
    "Doctor",
    "Nurse",
    "Drunk Doctor",
    "Drunk Nurse",
    "Loc Doctor",
    "Loc Nurse",
    "Drunk Loc Doctor",
    "Drunk Loc Nurse",
    "Surgeon",
    "Drunk Surgeon",
    "Drunk Loc Surgeon",
    "Drunk Woman",
    "Couple",
    "High School Student",
    "Homeless Man",
    "Homeless Woman",
    "Firefighter",
    "Paramedic",
    "Sherriff ",
    "Police Officer",
    "Garbage Man",
    "Bomb Disposal Worker",
    "Lifeguard",
    "Loc Man",
    "Loc Woman",
    "Drunk Loc Man",
    "Drunk Loc Woman",
    "Loc Couple",
    "Loc High School Student",
    "Loc Homeless Man",
    "Loc Homeless Woman",
    "Loc Firefighter",
    "Loc Paramedic",
    "Loc Sheriff",
    "Loc Police Officer",
    "Loc Garbage Man",
    "Loc Bomb Disposal Worker",
    "Loc Lifeguard",
    "Man",
    "Woman",
    "Drunk Man",
    "Drunk Woman",
    "Couple",
    "High School Student",
    "Homeless Man",
    "Homeless Woman",
    "Man",
    "Woman",
    "Drunk Man",
    "Doctor",
    "Nurse",
    "Drunk Doctor",
    "Drunk Nurse",
    "Loc Doctor",
    "Loc Nurse",
    "Drunk Loc Doctor",
    "Drunk Loc Nurse",
    "Surgeon",
    "Drunk Surgeon",
    "Drunk Loc Surgeon",
    "Drunk Woman",
    "Couple",
    "High School Student",
    "Homeless Man",
    "Homeless Woman",
    "Firefighter",
    "Paramedic",
    "Sherriff ",
    "Police Officer",
    "Garbage Man",
    "Bomb Disposal Worker",
    "Lifeguard",
    "Loc Man",
    "Loc Woman",
    "Drunk Loc Man",
    "Drunk Loc Woman",
    "Loc Couple",
    "Loc High School Student",
    "Loc Homeless Man",
    "Loc Homeless Woman",
    "Loc Firefighter",
    "Loc Paramedic",
    "Loc Sheriff",
    "Loc Police Officer",
    "Loc Garbage Man",
    "Loc Bomb Disposal Worker",
    "Loc Lifeguard",
  ];
  var myArray2 = [
    "Arrested For Indecent Exposure with P2",
    "Assaults P2",
    "Shoots P2",
    "Runs Over P2 With Car",
    "Reportedly Crashes Car",
    "Reportedly Took LSD with P2",
    "Reportedly Smoked Marajuana with P2",
    "Reportedly Smoked Salvia with P2",
    "Reportedly Attacks Security",
    "Reportedly Smears Bananas On Cars",
    "Reportedly Steals Cable Truck",
    "Reportedly Steals Hot Air Balloon",
    "Reportedly Steals Car",
    "Reportedly Steals Multiple Vehicles",
    "Poisons Children",
    "Throws Drink Over P2",
    "Reportedly Steals A Dollar of Snacks",
    "Reportedly Steals Candy",
    "Reportedly Steals Statue",
    "Reportedly Steals Presidential Statue",
    "Reportedly Steals Valuable Artwork",
    "Reportedly Steals Swan Statue",
    "Reportedly Stabs Florida Man",
    "Reportedly Hijacks Cable Car",
    "Reportedly Hijacks Light Aircraft",
    "Runs Over P2 With Car",
    "Runs Over Woman with Car",
    "Runs Over Man with Car",
    "Crashes Car",
    "Attacks Security",
    "Smears Bananas On Cars",
    "Steals Cable Truck",
    "Steals Hot Air Balloon",
    "Steals Car",
    "Steals Multiple Vehicles",
    "Gets Arrested Skinny Dipping",
    "Is Caught with P2",
    "Gets Caught In Drugs Bust",
    "Reportedly Avoiding Taxes",
    "Confesses Obscure Terrorist Plot",
    "Confesses To Being Racist",
    "Admits to Being Suicidal",
    "Comes Out as Homosexual",
    "Comes Out as Bisexual",
    "Comes Out as Transgender",
    "Comes Out as Non Binary",
    "Steals A Dollar of Snacks",
    "Steals Candy",
    "Steals Statue",
    "Steals Presidential Statue",
    "Steals Valuable Artwork",
    "Steals Swan Statue",
    "Stabs Florida Man",
    "Hijacks Cable Car",
    "Hijacks Light Aircraft",
    "Exchanges 12 Shotgun Rounds",
    "Arrested For Throwing Alligator",
    "Charged With Child Neglect",
    "Shot Over Argument",
    "Has Mental Breakdown",
    "Gets Wasted",
    "Gets Drunk, Passes Out",
    "Pulls Bull Shark From Ocean",
    "Pleasures Themselves In Back Of Cop Car",
    "Crashes Supercar",
    "Has Baby With Brother",
    "Has Baby With Sister",
    "Adopts A Child",
    "Jailed",
    "Pulls Two Guns After 7-Eleven Clerk Refuses Pennies",
    "Charged After Biting Off Chicken’s Head",
    "Has Redneck Wedding",
    "Gets Married",
    "Gets Divorced",
    "Calls Fire Department",
    "Smoked Crack",
    "Donates A Million Dollars To Charity",
    "Smoked Marajuana",
    "Says Turtle Army Will Destroy Everyone",
    "Had Daughter Sell Pot Brownies",
    "Bites Dog, Then Brother",
    "Shoots McDonalds Employee,",
    "Shoots Burger King Employee",
    "Robs KFC",
    "Offers Favors For $25 and Chicken McNuggets",
    "Fired For Sleeping With Clients,",
    "Tries To Run Over P2",
    "Tries To Run Over Ex-Boyfriend Twice After Break-Up,",
    "Tries To Run Over Ex-Girlfriend Twice After Break-Up,",
    "Reported Drug Deal Robbery,",
    "Falls Asleep",
    "Calls Cops Because Thermos Containing Semen May Explode,",
    "Shot by Casino Employee",
    "Shoots Casino Employee",
    "Shoots Blackjack Dealer",
    "Robs a Jewellery Store",
    "Shot During Jewel Heist",
    "Attempt To Rob a Bank",
    "Robs A Bank",
    "Charged With Picking Magic Mushrooms",
    "Calls 911 For Ride To Hooters",
    "Advertises Counterfeit Cash For Sale On Craigslist",
    "Stabs P2 With Sword",
    "Stabs P2 With Sword",
    "Attacks ATM For ‘Giving Them Too Much Money’",
    "Calls Police to Report A Bomb",
    "Released Poisonous Snakes,",
    "Shot Twice After Daring Brother To Shoot Them",
    "Shot Twice After Daring P2 To Shoot Them",
    "Uses Softball Skills To Bash Half-Naked Burglar's Head With Bat",
    "Attacked Taking Selfie",
    "Falls Off Building",
    "Arrested For Indecent Exposure",
    "Arrested For Assault",
    "Arrested For Bribery",
    "Arrested For Credit Fraud",
    "Arrested For Disturbing The Peace",
    "Arrested For Securities Fraud",
    "Arrested for Public Intoxication",
    "Charged with Public Intoxication",
    "Caught Up In #MeToo Movement",
    "Attacked For Wearing Nazi Memorobelia",
    "Claims There is Proof of Aleins",
    "Attacked By P2",
    "Reportedly Shot by P2",
    "Leaves with 30 Women",
    "Claims The Earth is Flat",
    "Claims We Are In A Computer Simulation",
  ];
  var modifiers = [
    "",
    "at Underage House Party",
    "While At P2s Wedding",
    "While On P2s Podcast",
    "Is Sent To Jail",
    "In Court This Week",
    "At Loc Intersection",
    "At Loc Art Gallery",
    "At Loc Strip Club",
    "At Strip Club",
    "After Ariving For Jury Duty Drunk,",
    "While Making Speech at P2s Wedding",
    "At Loc Hospital",
    "While Carrying An Alligator In Loc",
    "Wearing Clown Hat In Loc",
    "While Wearing Meat",
    "While Handcuffed",
    "While Wearing Nothing",
    "At Loc Fashion Show",
    "At Loc Film Festival",
    "At Loc Airshow",
    "At Loc Classic Car Festival",
    "At Loc Music Festival",
    "At Loc Business Expo",
    "At Loc Airport",
    "At Loc Mall",
    "In Downtown Loc",
    "At Loc Restaraunt",
    "After Show in Loc",
    "In Loc",
    "While Begging For Money In Loc",
    "Playing Show in Loc",
    "While Making a Speech In Loc",
    "After Making a Speech In Loc",
    "During a Protest",
    "During a Protest in Loc",
    "At a Speech in Loc",
    "At Climate Demonstration",
    "Nobody Injured",
    "On Loc Beach",
    "On Mountain In Loc"
  ];
  var locations = [
    "Aberdeen",
    "Adelaide",
    "Algiers",
    "Amsterdam",
    "Ankara",
    "Paraguay",
    "Athens",
    "Auckland",
    "Bangkok",
    "Barcelona",
    "Beijing",
    "Belem",
    "Belfast",
    "Belgrade",
    "Berlin",
    "Birmingham",
    "Bogota",
    "Bombay",
    "Bordeaux",
    "Bremen",
    "Brisbane",
    "Bristol",
    "Brussels",
    "Bucharest",
    "Budapest",
    "Buenos Aires",
    "Cairo",
    "Calcutta",
    "Canton",
    "Cape Town",
    "Caracas",
    "Cayenne",
    "Chihuahua",
    "Chongqing",
    "Copenhagen",
    "Cordoba",
    "Dakar",
    "Darwin",
    "Djibouti",
    "Dublin",
    "Durban",
    "Edinburgh",
    "Frankfurt",
    "Georgetown",
    "Glasgow",
    "Guatemala",
    "Hamburg",
    "Havana",
    "Helsinki",
    "Hong Kong",
    "Jakarta",
    "Johannesburg",
    "Kingston",
    "Kuala Lumpur",
    "Leeds",
    "Lisbon",
    "Liverpool",
    "London",
    "Lyons",
    "Madrid",
    "Manchester",
    "Manila",
    "Marseilles",
    "Mecca",
    "Melbourne",
    "Mexico City",
    "Milan",
    "Moscow",
    "Munich",
    "Nagasaki",
    "Nagoya",
    "Nairobi",
    "Nanjing",
    "Naples",
    "New Delhi",
    "Newcastle",
    "Odessa",
    "Osaka",
    "Oslo",
    "Panama City",
    "Paris",
    "Perth",
    "Plymouth",
    "Prague",
    "Reykjavik",
    "Rio de Janeiro",
    "Rome",
    "Salvador",
    "Santiago",
    "St Petersburg",
    "Sao Paulo",
    "Shanghai",
    "Singapore",
    "Stockholm",
    "Sydney",
    "Teheran",
    "Tokyo",
    "Tripoli",
    "Venice",
    "Vienna",
    "Vladivostok",
    "Warsaw",
    "Wellington",
    "Zurich",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "North Korea",
    "South Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "St Lucia",
    "Samoa",
    "San Marino",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "U.K",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
      ];

  $('.btn').click(function() {
    $('#first').fadeOut(1);
    $('#second').fadeOut(1);
    $('#third').fadeOut(1);
    var first = $('#first');
    var second = $('#second');
    var third = $('#third');
    var fourth = third.html();
    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    var randomItem2 = myArray2[Math.floor(Math.random() * myArray2.length)];
    var randomItem3 = modifiers[Math.floor(Math.random() * modifiers.length)];
    var location = locations[Math.floor(Math.random() * locations.length)];
    var location2 = locations[Math.floor(Math.random() * locations.length)];
    var location3 = locations[Math.floor(Math.random() * locations.length)];
    var person2 = myArray[Math.floor(Math.random() * myArray.length)];
    var person3 = myArray[Math.floor(Math.random() * myArray.length)];

    console.log(randomItem, randomItem2, randomItem3, location);
    first.delay(50).html(randomItem.replace("Loc", location));
    second.delay(50).html(randomItem2.replace("P2", person2).replace('Loc', location2));
    third.delay(50).html(randomItem3.replace("P2", person3).replace('Loc', location3));
    $('#first').fadeIn(100);
    $('#second').delay(600).fadeIn(100);
    $('#third').delay(1200).fadeIn(100);
    });
  });
