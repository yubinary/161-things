import React, { useState, useEffect } from 'react';
// import axios from "axios";

import '../styles/Home.css';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [easy, setEasy] = useState([]);
  const [crazy, setCrazy] = useState([]);
  const [rare, setRare] = useState([]);
  const [school, setSchool] = useState([]);

  let quotes = [
    "1. Make the library into your bedroom and have sex in the stacks",
    "2. Finally meet the dazzling Denice Cassaro",
    "3. Go to the Cornell-Harvard men’s hockey game and throw fish on the ice",
    "4. Take off to NYC for Fall Break, being sure to post on Instagram about it at least twice",
    "5. Sled down Libe Slope during a snowstorm",
    "6. Take Hotel Administration 4300: Introduction to Wines",
    "7. Streak across the Arts Quad",
    "8. Enroll in BIOEE 1540: Introductory Oceanography as a joke, then fall in love with Bruce Monger and attend every class",
    "9. Test out Olin Library’s musically calibrated steps by kicking stones across them",
    "10. Go sake bombing at Plum Tree or Miyake",
    "11. Order ice cream at the Dairy Bar",
    "12. Climb the rock wall in Bartels Hall",
    "13. Listen to a full chimes concert from the clock tower and guess the songs played",
    "14. Order the same thing off the Collegetown Bagels menu all four years",
    "15. Register for classes during Freshman Pre-Enroll, then switch out of every single one by the time Add/Drop ends",
    "16. Wear flip-flops to class in January",
    "17. Go to the Fuertes Observatory on North Campus and look through a telescope",
    "18. Have a snowball fight in May",
    "19. Stick your hand inside a fistulated cow",
    "20. Skip class to play frisbee on the Arts Quad",
    "21. Bury a bottle of Bacardi on the Slope. Dig it up on Slope Day.",
    "22. Observe the golden hour at the Cornell Botanic Gardens",
    "23. Attend the Apple Festival on the Commons",
    "24. Flirt with your professor",
    "25. Bomb a prelim",
    "26. Ace the next one to save your grade",
    "27. Attend Hotelie prom",
    "28. Take a selfie with Happy Dave from Okenshield’s",
    "29. Take 3 finals in two days because they were just over 24 hours apart",
    "30. Get heartburn at the Chili Cook-off on the Commons",
    "31. Enjoy Ithaca’s two months of warm weather — spend a summer here!",
    "32. Go to a Shabbat dinner at 104West!",
    "33. Watch the AAP students parade down East Avenue on Dragon Day",
    "34. Walk out of class and directly to happy hour in Collegetown.",
    "35. Build a snow penis or count how many you see around campus",
    "36. Dress up and view The Rocky Horror Picture Show at Risley",
    "37. Take a class you think is impossible just for fun",
    "38. Go on a wine tour",
    "39. Kiss on the suspension bridge at midnight",
    "40. Sleep through your alarm for a 1:25 p.m. class",
    "41. Shop at the Friends of the Library Book Sale",
    "42. Get a University parking ticket, then talk your way out of it",
    "43. Buy an Ithaca Is Gorges t-shirt, then get sick of wearing it and buy a variation (Ithaca Is Gangsta, Vaginas Are Gorges, Ithaca Is Long Island…)",
    "44. Learn the “Alma Mater,” “Evening Song” and “Give My Regards to Davy”",
    "45. Attend an opening at the Herbert F. Johnson Museum of Art",
    "46. Smuggle food from the dining hall and run for your life as they try to get back your stolen cookies",
    "47. Make the Walk of Shame",
    "48. Have dinner at a professor’s house",
    "49. Get wasted at a professor’s house",
    "50. Take a selfie with a Cornell president",
    "51. Play a game of tag in the Kroch Library stacks",
    "52. See a play in Risley",
    "53. Take a class that meets outside",
    "54. Start your freshman year pre-med. Graduate as a Hotelie.",
    "55. Kayak or canoe on Beebe Lake",
    "56. Watch dancers fly through the air at Pao Bhangra show",
    "57. Have a midnight picnic in the Ag Quad",
    "58. Wait in line for half an hour for a salad at Terrace",
    "59. Ignore the “No Winter Maintenance” signs … slip and fall down the stairs",
    "60. Sit in Libe Café when you have no work to do and watch the worried students down gallons of coffee",
    "61. Write an angry letter to the editor of The Sun",
    "62. Visit Wegmans between 3 and 5 a.m.",
    "63. Explore the secret underground tunnel between Uris and Olin libraries",
    "64. Request an item from the library’s Rare and Manuscript Collection.",
    "65. Pretend you are Harry Potter and study in the A.D. White Reading Room",
    "66. See the brain collection in Uris Hall",
    "67. Eat at Taverna Banfi and charge it to CornellCard",
    "68. Eat your way through the Farmer’s Market",
    "69. Take Plant Pathology 2010: Magical Mushrooms, Mischievous Molds",
    "70. Take part in a psychology experiment",
    "71. Take an unplanned nap in a library",
    "72. Occupy Willard Straight or storm Day Hall",
    "73. Following the legend, watch a virgin cross the Arts Quad at midnight and watch A.D. White and Ezra Cornell walk towards each other and shake hands",
    "74. Live through an Ithaca blizzard and tell your friends how you survived frostbite",
    "75. Throw a flaming pumpkin into the gorge",
    "76. Join an intramural sports team. Take it too seriously and get matching uniforms.",
    "77. Spend all your lectures figuring out the day’s crossword. While sitting for the final, wish you had taken notes instead",
    "78. Hook up with your T.A.",
    "79. Order a PMP at the Hot Truck",
    "80. Play trivia at Rulloff’s on Sunday nights",
    "81. Make the trek down the hill: go to a townie bar",
    "82. Make a fool of yourself at karaoke at Loco on Tuesday",
    "83. Hit up Fishbowl Wednesdays at Level B",
    "84. Go bowling at Helen Newman Lanes",
    "85. Hand out quartercards on Ho Plaza",
    "86. Drive your car up and down Libe Slope",
    "87. Have a friend’s parents take you out to eat at John Thomas Steakhouse or Boatyard Grill",
    "88. Eat a chicken parm sandwich from Louie’s Lunch",
    "89. Order Wings Over after 2 a.m.",
    "90. Get thrown out of Balch Hall",
    "91. Heckle your tour guide friend as they’re leading a group of prospective students around campus.",
    "92. Go skinny dipping in a gorge",
    "93. Get lost during O - week as a freshman, and end up in the Commons",
    "94. Go to an a cappella concert",
    "95. Go ice skating at Lynah Rink",
    "96. Make it onto the Ivy League snap story",
    "97. Sell back your books; use money to buy alcohol",
    "98. Hang in hammock on Ho Plaza",
    "99. Eat a Pinesburger, then watch water flow over Taughannock Falls, the  highest single - drop waterfall east of the Rockies.",
    "100. Walk to a fraternity party with your entire freshman floor",
    "101. Go to a fraternity party as a senior; convince yourself you were never one of them",
    "102. Get lost in Collegetown during Orientation Week",
    "103. Get negged at a bar because the bouncer is actually friends with the person whose I.D.you are using",
    "104. See a film at Cornell Cinema",
    "105. Eat Mongo at RPCC",
    "106. See a concert at Barton Hall",
    "107. Gain the freshman 15. Pay $145 for a gym membership and don’t go.",
    "108. Eat brunch on North Campus",
    "109. Go swimming at Treman State Park, Buttermilk Falls or Second Dam",
    "110. Fail your swim test, just for kicks",
    "111. Tailgate for homecoming",
    "112. Walk the runway as a model in the Cornell Fashion Collective’s annual fashion show",
    "113. Host a prefrosh",
    "114. Request a song to be played on the clock tower",
    "115. Get guilt - tripped into giving blood",
    "116. Get asked if you are pregnant at Cornell Health",
    "117. Drink with your R.A.",
    "118. Make a chalking.Weep when it rains that night",
    "119. Get on the wrong TCAT and end up at Ithaca College",
    "120. Meet Bill Nye ’77, “The Science Guy, ” and give him a hug",
    "121. See how long you can go without doing laundry",
    "122. Go on a road trip to Canada, flirt with the border patrol, smuggle booze back",
    "123. Try to order pizza from a Blue Light phone",
    "124. Go to the sex shop, called the “Adult Outlet, ” on the Commons",
    "125. Plan on going to The Slope on Slope Day, but don’t end up making it there.",
    "126. Complain about the Slope Day headliners",
    "127. Get tapped for a secret society",
    "128. Visit Ithaca Mall, realize it is severely lacking, then drive to Destiny USA Mall in Syracuse",
    "129. Lose a friend over signing a lease in Collegetown",
    "130. Run out of BRBs in March.Live off campus events’ free food for the rest of the year",
    "131. Walk holding hands around Beebe Lake",
    "132. Visit the Sciencenter",
    "133. See Yamatai bang it out at Pulse",
    "134. Get J.A.’d for urinating on the Law School",
    "135. Take the BASICS program",
    "136. Hook up with someone randomly and then see them every day afterward",
    "137. Go to a coffee house in JAM",
    "138. See how many people you can cram into your dorm room",
    "139. Rush a fraternity / sorority or mosey a Co - op during your freshman spring",
    "140. Write dirty messages with rocks in the gorge",
    "141. Ride a horse at Oxley Equestrian Center",
    "142. Ring the giant bell in the arboretum at the Cornell Botanic Gardens",
    "143. Crash a political rally on Ho Plaza",
    "144. Do the COE ropes course",
    "145. Attend a show at the State Theatre or Hangar Theatre",
    "146. Prank call the CIT HelpDesk",
    "147. Sleep through pre - enroll and change your major as a result",
    "148. Ski at Greek Peak",
    "149. Take a night prelim near the vet school, walk back in the dark",
    "150. Cheer on your friends as they perform at the Schwartz Center",
    "151. Go to ClubFest as a first - year and sign up for a dozen clubs that you’ll never go to",
    "152. Walk to class in the snow, uphill both ways",
    "153. Buy a Cornell-grown apple from a vending machine",
    "154. Furnish an apartment entirely with items from the Dump & Run",
    "155. Eat at each dining hall at least once",
    "156. Ask for an extension on a term paper",
    "157. Take part in Holi and get colorful",
    "158. Take a midnight nap in Uris Library Cocktail Lounge and wake up 3 days later",
    "159. Tell a professor what you really think of his/her class",
    "160. Attend a Sun meeting",
    "161. Climb all 161 steps to the top of McGraw Tower"
  ]

  function categorize(quotes, i) {
    return (
      <p>{quotes[i]}</p>
    )
  }

  function handleOnClickEasy() {
    setEasy([...easy, quotes[index]]);
    setIndex(index + 1);
  }

  function handleOnClickCrazy() {
    setCrazy([...crazy, quotes[index]]);
    setIndex(index + 1);
  }

  function handleOnClickRare() {
    setRare([...rare, quotes[index]]);
    setIndex(index + 1);
  }

  function handleOnClickSchool() {
    setSchool([...school, quotes[index]]);
    console.log(school)
    setIndex(index + 1);
  }

  console.log(easy, crazy, rare, school);

  return (
    <div className="home">
      {categorize(quotes, index)}
      <button onClick={handleOnClickEasy}>Easy</button>
      <button onClick={handleOnClickCrazy}>Crazy</button>
      <button onClick={handleOnClickRare}>Rare</button>
      <button onClick={handleOnClickSchool}>School</button>
    </div >
  )
}
