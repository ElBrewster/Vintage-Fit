# **Classic Fit** ✂️

## **Overview**

Many reproductions of older vintage patterns are innaccurate and cause a lot of frustration to those attempting to make a classic fit work. Currently folks get on instagram or reddit and hope they can find notes from others who have successfully attempted to use the new versions so they can save themselves some heartache in the process.  This app attempts to centralize this data bu providing a format where users can post their experience with these patterns so it can be shared and implemented by others who want to make the same item. 
[^1]: User Story
[^2]: User Story

- Two websites I used for my user demographics: [one](https://www.moodfabrics.com/), [two](https://simplicity.com/)

## View App 

### Deployed App
[visit the app here](https://classic-aepv7dq7h-elbrewster.vercel.app/)
[view patterns server](https://api-patterns-for-ash.vercel.app/patterns)

### Screenshots
<!-- [title](link) -link to that gif website -->
<!-- ![screenshot]("src/assets/screenshot1.png")  -->
<img width="1899" alt="Screen Shot 2023-03-05 at 7 35 51 PM" src="https://user-images.githubusercontent.com/113723085/223160812-d2232209-e095-4a51-bea6-1ae43414eed2.png">
<img width="369" alt="Screen Shot 2023-03-05 at 8 14 52 PM" src="https://user-images.githubusercontent.com/113723085/223160764-b11e311a-79b2-4ce4-8bd2-1b01189bb96f.png">
<img width="959" alt="Screen Shot 2023-03-05 at 8 21 55 PM" src="https://user-images.githubusercontent.com/113723085/223160781-c93fa138-a45b-449c-9001-c32c4e7928fa.png">

*italics describing my screenshot: see how this is on mobile! or see how responsive my layout is!*
*it would be nice to have small gifs of user flows?*

[wireframe](link)
---
## Setup
### Installation Instructions For Front-End
1. [Click](https://github.com/ElBrewster/Classic-Fit) to open repo 
2. Click the "Fork" button. (This will create a user copy of the repository.)
3. Open the Terminal application.
4. In Terminal, use the "cd" command to navigate to where the local repository will live.
5. In GitHub, click on the green "Code' dropdown.
6. You will see three clone options. Select "SSH".
7. Copy the SSH key.
8. In Terminal, run "git clone [insert copied SSH key here]".
9. In Terminal, use the "cd" command to navigate into the newly created directory.
10. Open the local repository in VS Code by typing: `code .`
11. Type `npm run dev` in your Terminal to run the Vite app.

### Installation Instructions For Back-End
1. Go to [this](https://github.com/ElBrewster/api-patterns-for-ash) repo and repeat setup 2-10 in front-end installation instructions.
2. In Terminal, type `npm run server.js`.
3. Go to [here](http://localhost:5500/patterns) to view server data.

## Learning Goals
- Gain experience with React, Router, Asynchronous JavaScript, and end-to-end testing in Cypress.
- Create user stories to drive the functionality of a React app.
- Display data from an API over multiple views using Router.
- Try to solve a unique problem with your app.

## Libraries and Frameworks
<div>
  <img src="https://img.shields.io/badge/-react-333333?logo=react&style=for-the-badge" width="100" height="30"/> 
  <img src="https://img.shields.io/badge/-react%20router-f44250?logo=react%20router&logoColor=white&style=for-the-badge" width="140" height="30"/>
  <img src="https://img.shields.io/badge/-cypress-007780?logo=cypress&logoColor=white&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-CSS3-315780?logo=css3&style=for-the-badge" width="100" height="30"/>
  <img src="https://img.shields.io/badge/-sass-c69?logo=sass&logoColor=white&style=for-the-badge" width="100" height="30"/>  
  <img src="https://img.shields.io/badge/-npm-c12127?logo=npm&logoColor=white&style=for-the-badge" width="80"  height="30"/>
  <img src="https://img.shields.io/badge/-vite-333333?logo=vite&style=for-the-badge" width="80" height="30"/>
</div>

### Wishlist
- Add a schema for users and ability to POST user inputs to that API.
- Add a schema for pattern notes and functionality for users to POST notes to a third API.
- Stand up Postgres database for ORM tables and seed database with my three APIs.

This app was made by El Brewster! You can find me at:
    * [GitHub](https://github.com/ElBrewster)
    * [LinkedIn](https://www.linkedin.com/in/el-brewster-9817b0255/)

[^1]: 
> User Story 1: Jessica Springstein is 47 and lives in Minesota. She is a bank teller. She spends 8 hours a week using this app and has medium-low comfort with mobile technology. She is introverted and her important relationships are with her three cats. She collects cowprint stuff, prefers having a routine. She is tired of the new pattern reproductions having inaccurate seam allowance instructions. She wants to talk to people about her interest in sewing and making these patterns but doesn't want to get caught up in socialization. she just wants to know what people think about the patterns. She is likely to use desktop and tablet views with large font and high contrast.
---
[^2]: 
> User Story 2: Ash K is 23 and is a student living in Santa Barbara. She might spend 4 hours on the weekend to sew and has high comfortability with technology. She is not introverted nor extroverted but split in the middle. She has many important relationships with other people in her sorroity and loves microbiology. She prefers exploration slightly more than having a strict routine. She wants to do something other than science sometimes and thinks sewing will bring out her creativity and keep her down-to-earth. She wants a big screen up while she uses her small $100 home depo sewing machine on the floor of her dorm room. She is frustrated that "patterns are liars". She feels nervous because she is new to sewing and she doesn't want to commit to a pattern if it's going to be a failure at the get-go. She is likely to use desktop and tablet with large font size and high contrast while she is at her sewing machine. 
    
