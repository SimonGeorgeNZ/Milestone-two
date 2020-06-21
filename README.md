# Milestone Two Project
## Pick Six

Pick Six is intended for educational purposes only. No copywrite infringements are intended

![MockupImages](https://github.com/SimonGeorgeNZ/Milestone-two/blob/master/assets/images/allImages.jpg?raw=true)

# Live demo

A live demo of Pick Six can be found at [Pick Six](https://simongeorgenz.github.io/Milestone-two/)

# Technologies used

- [HTML](https://html.com/) - Content is written in HTML 
- [CSS](https://www.w3.org/Style/CSS/) - Styling is achieved through a linked CSS style document
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Modals and dropdown menu's were achieved through Javascript
- [Bootstrap](https://getbootstrap.com/) - Bootstrap was used as a framework 
- [JQuery](https://jquery.com/) - JQuery was used for DOM manipulation
- [Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator) - I used Font Squirrel to generate the official All Blacks font

# UX

Pick Six is designed for a user to look through individual stats of players from the New Zealand Rugby Team - The All Blacks, and selecting their favourite players
into their six. Once the user has picked their six favourite, they will be able to view the combined stats and see how their players would perform together. 

I wanted to use the colour scheme and typography that is used by the All Blacks marketing. This results in a clean look with straight lines and a purely black and white
colour scheme. 

![Wireframe Images](https://github.com/SimonGeorgeNZ/Milestone-two/blob/master/assets/images/Milestone%20two%20planning.jpg?raw=true)

# How to use Pick Six

The page loads up with a welcome modal to explain to the user how the site works. This modal is stored in session storage so should only load the first time 
a user opens the site. This was to combat when the user clicks the "All Players" button in the menu, it displays all player data and would load the modal again, 
which I didn't want. 

The user is able to view the player profile for an individual player by clicking the "View" button on the specific player. If they wish to then select the player, 
they can do so my clicking the "Select" button. Clicking ther select button will add the player to their list on the left side of the screen, and will remove the 
"select" button from that particular player. When six players are in their list, all remaining "Seclect" buttons turn off so the user isn't tempted to try and add more than six. 

Users can modify the amount of players they see on the main screen by selecting one of the search buttons in the menu (Forwards and Backs) which will display 
only players of that position type.

Players can be removed from the users team by unchecking the box next to a selected players name. This will remove the player from the list, will add the "Select" button 
back to this player, and will remove that players data from the arrays that make up the combined data available when six players are selected. 

Once the user has selected their six players, the menu options change from the search buttons previously mentioned, to a single option to view combined data. There is also 
a modal that will appear so the user is aware of what to do next. 

## Features for the future

Eventually I would like to change from only selecting six players to selecting a full team of 15 players, however on the API I used there was only 30 players available, 
so without multiple options in each position it seemed unneccessary. With the option of selecting a full team of players, I would also like the stats to be more along the 
lines of - Run meters, scrum win %, line out win % etc, so that the combined data would give more of an understanding towards how successful a users full team would be 
in a game. 

If I was to make a full team selection, I would add a master reset button that would reset all data if clicked by the user. This way the user wouldn't have to delete 
all individual players from the list.

From a coding perspective, if I was re do this assessment I would look into how to manipulate array data through functions without having to re write essentially the same line
of code - This was pointed out to me by my mentor, however to fix the issue would take longer than I had before handing the assessment in. 

# Testing

I used HTML and CSS validation websites to test my coding, I also used auditing features within Google Chrome however with a lot of the data on screen being generated 
dynamically it was hard to audit totally. 

I tested my site across multiple browsers and across multiple devices, as well as asking my friends and family to test it. Everything responded as it should do and I was happy
with the results. Below are the features I was concerned about and how I tested their accuracy. 

## Responsive sizing 

I tested across a range of devices and used the Developer Tools within Google Chrome. I wanted my site to look the same on desktop and tablet, so combat this, within my CSS 
I used media queerys below 576px and specific styling to suit. 

## Selecting more than 6 players 

I made sure only 6 players were available for selection by adding the function in that when 6 were selected, all remaining "Select" buttons would have their 
display automatically turned off. 

## Deleted players data wouldn't be available

If a player was deleted from the users selected player list I wanted to make sure their data was removed from the combined data arrays. I did this by selecting 6 players and
making note of the combined data numbers. I then removed a player from the list and selected a different player. I made note of the individual data for the new player
I added, then I checked the combined data again and made sure it was correct. 

I also console logged the arrays to make sure the correct data was contained. 



# Deployment

I have deployed my site using Github

[The final site can be found here](https://simongeorgenz.github.io/Milestone-two/)

# Credits

Firstly I would like to acknowledge the tutor support. Without the expertise and direction I recieved throughout this assessment I would have struggled
a lot. 

I used [W3Schools](https://www.w3schools.com/) extensively throughout this assessment and used [Stack Overflow](https://stackoverflow.com/) for features I
wasn't sure how to implement, the main two including;

- How to remove specific data from an array (splice data with indexOf)
- Adding array data together (Reduce)

# Media 

[All Blacks Logo](http://stats.allblacks.com/asp/atoz.asp?group=Ahttp://stats.allblacks.com/images/ablogo.png)

Player data was found on sports API website [Sport Radar](https://developer.sportradar.com/)

# Acknowledgements

I took inspiration for this site from various sites that allow users to create their dream team

# Anti Plagiarism

To the best of my knowledge I have credited all sources of media and code that is not my own. Anything missed is absolutely an error on my part, and is unintentional, and is in no way me trying to be villainous.



