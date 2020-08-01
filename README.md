# What is App-Tracker?

App-Tracker is a personal web app I developed to help me organize, update, and keep track of my job applications all on the same site.


# What are the current features?

* Add applications 
* View applications


# What are the upcoming features?

* User Authentication
* Sync with Google Calendars
* Statistics Page

# How to set-up the project locally?
1. Install the GitHub repository.
2. Open a terminal/command prompt, and navigate into :\Record-Applications-master\server\ and type **npm run watch** --> This will start the backend servers
3. Open a terminal/command prompt, and navigate into :\Record-Applications-master\frontend\ and type **npm start** --> This will start the frontend 
4. Success! If the local page doesn't automatically, please go to **port:3001** (localhost:3001, backend) and **port:3000** (localhost:3000, frontend)

# How do I deploy to make changes? (Developers only)
Assuming you already have everything set-up, simply navigate into :\server and type **npm run deploy:full**
* **deploy:full** consist of two scripts: **build:ui** and **deploy**
* **build:ui** updates the backend with the changes made in the frontend. This is done by using React build)
* **deploy** pushes production to Heroku

# I don't understand any of this, how do I start using the app tracker?
https://record-apps.herokuapp.com/
***
