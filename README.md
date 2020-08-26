# quartzsim
Made by Davis Liu July/August 2020 

What is This? \
This a simulator of the Japanese mobile game Fate/Grand Order's unit acquisition system (often referred to as the gacha system). Units obtained
in this manner are completely determined by chance according to documented acquisition rates for each individual possible result (servants and craft essences (CE)).
The source code is written in HTML, CSS, and JavaScript, with the application's logic all written in JavaScript.

Why Did I Make This? \
Couldn't get the 5-star units I wanted in-game so I guess I made this out of boredom. 

Current Features:
- Single Rolls(1) & Multi Rolls (10)
  - The servant guarantee and 4* or above card guarantee are implemented into the multi-roll
- 2 Versions of the Story Banner (one contains all units available at the beginning of the game while the other features all the story-locked servants in the pool)
- All event banners available from August 2020 - December 2020 (currently totals to 13)
  - There are no seperate rate-up days, all servants on rate-up during the individual event will be available to roll all at once (rate-up day seperation will come in the future)
  - Change the banner by selecting an option from the drop-down menu
- A reset-able live stat tracker (hover over BB on the left-hand side) 
  - Tracks the following information about your rolls in the simulator:
    - Number of servants rolled (also includes percentage of total rolls)
    - Number of craft essences rolled (also includes percentage of total rolls)
    - Number of 5*/4*/3* cards rolled (also includes percentage of total rolls)
    - Number of rate-up/spook 5*/4* servants rolled 
    - Number of saint quartz theoretically spent
    - Theoretical cost to purchase the amount of saint quartz used
  - Stats are reset by clicking on BB
- Displays servants and craft essences on rate-up (hover over Jeanne on the right-hand side)
  - Divided up into 6 sections (5* Servants/4* Servants/3* Servants/ 5* CEs / 4* CEs/ 3* CEs)
  - To view the next section of rate-ups, click on Jeanne
