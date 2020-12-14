## Discord Clone

This Discord Clone was created with the intention of being able to create a 'real-time' chatting system between my friends using the popular application known as Discord. 

I built this using React/Redux, Firebase/Firestore, and several other NPM packages such as moment-timezone and use-validate-image-url for customizing the way images and messages are sent. 

I really wanted to see the ins-and-outs of Firebase/Firestore since I've heard a lot of great things about it in terms of auth/it's NoSQL database.

This was extremely fun and it may now be my preferred 'back-end'!


![Alt text](https://i.imgur.com/KWsg4I2.png "Discord Clone")


[Deployed Link!](https://discord-clone-stanley.netlify.app/) (I suggest using a dummy gmail account if you'd like to remain private!)


## Description

This Discord clone keeps all original discord stylings in mind with Semi Custom CSS. It uses Material UI for it's icons, but everything else is custom. It allows for real time messaging between users that are currently logged in through their Google account by using Firestore and it's onSnapshot() method to listen to any document changes. This allows me to have users listen to messages in the current selected channel, and also listen to see if any channels have been added that they can join. 

As of right now, users can 
- Message one another 
- Post image links that will then render as an image 
- Create new channels


## Libraries

**Styling** Material-UI : https://github.com/mui-org/material-ui

**Image Rendering Conditions** use-validate-image-url: https://www.npmjs.com/package/use-validate-image-url

**Timezone Timestamps** moment-timezone: https://github.com/moment/moment-timezone
