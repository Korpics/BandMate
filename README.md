# BandMate
Tinder inspired Band Member match maker.

A Full-Stack Application that matches users with potential band members based on Music Influence, Genre, Distance, or Instrument. 

Wireframes
![Screenshot](./IMG_8740 2.jpeg)
![Screenshot](./IMG_9469 2.jpeg)


https://github.com/Korpics/BandMate

![alt text](https://github.com/Korpics/BandMate/master/IMG_9469 2.jpeg)



Priority Matrix

- Must be able to search through potential members with one or more of the following filters: (Instrument, Influence, Genre, or Distance)

- Must have authorization.

- Must be able to save matched users until one party has decided to rid themselves of the relationship.

- Should be able to automatically get location from user (if this becomes too difficult - then this becomes an application solely for NYC)

- Should be able to Flag users which will mark the user with a boolean property 'flagged: true' which notifies this status to admin. 

- Should be able to chat with users through the application (will implement an email option if not possible)

- Could add a sound toggle attached to an uploaded mp3 (would need to use aws for this i presume) that plays a sound snippet of the user's own music. (WILL add soundcloud link form at the very least. Pondering on whether or not music uploads should be a required feature. Would like to devote this site to dedicated musicians.)

- Could have user images (wondering if this is at all nessecary. I believe this could result in discriminatory practices from user to user?)

- Won't have (TBD - probably a lot of stuff)


MVP/PostMVP - 5min
MVP

Basic tinder like app that renders random users based on what your needs are. (e.g. Users from brooklyn who like this town needs guns and play drums).
This search will return an array of users - which you can swipe through in a 'tinder-esque' fashion - while passing or favoriting each user. 
Users will have their genres influences instruments location etc saved to their user profile during profile creation.
Email option as a minimum (ONLY when matches are made)
Flagging users results in an email to admin - who reviews accordingly. 

POST
Chat function within the application.
Location is automatically sent to the back-end when user is signed in.
Default homepage renders the closest matching musicians (this would be a summary of all the user's properties + distance)
Toggle Sound per 'User Card' to hear a snippet of original music from the creator/user.


ERD
TBD - having a hard time figuring this one out. 

UI Components
App.js stateful
SignUp stateful
LogIn stateful


SignUp - will contain the form used to create a user
LogIn - will contain the form used for user login
MatchMaker - will contain the card swiping functionality as the user searches through potential matches


SAMPLE.....
Component	Priority
SignUp - expecting this and LogIn to both take 3 hours (auth) each. 
LogIn - 3 hours Estimated Time.
MatchMaker - I expect the CSS to be the real challenge here. May need to mimick a carasoul effect as a swipe feels inorganic outside of react native and may take too much time to implement. 6 Hours Total Expected



Additional Libraries
May use https://db-ip.com for continuous location use POST mvp

SAMPLE.....
Library	What it Does
React - front end UI
Express/Node - BackEnd API creation.
JWT/bcrypt/passport - Authorization
CSS - will attempt to maintain basic css instead of branching out into Bootstrap but may need to. 

Code Snippet
TBD

Change Log
TBD This will be full though I am sure.

Issues and Resolutions
TBD This will be full as well.
