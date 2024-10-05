✅present working directory in the terminal 

npm init -y (next time)

✅npm init 

check package.json

"main": "index.js",

✅create index.js file


add to the scripts 

✅  "start" : "node index.js"


add 

✅"type" : "module",


install express in the terminal

✅ npm install express


Nodemon development dependencies

✅npm i -D nodemon

at "scripts" package.json

✅ "dev" : "nodemon index.js"

documentation for index.js

https://expressjs.com/en/starter/hello-world.html 

❌const express = require('express') 

✅import express from 'express';

✅const app = express();

✅const port = 3000;

✅app.listen(port, () => { 
    console.log(`Server is running on http://localhost://${port}`);


})



at the terminal :

❌npm run start

✅npm run dev

npm


✅app.get('/', (req, res) => {

    res.send(`🚀Hello, Welcome to the World's best shopping list 🛒`);

});





Define the API Endpoints:

/shopping-list: Get the current shopping list.

/shopping-list/items: Get a list of items in the shopping list.

/shopping-list/items/create: Add an item to the shopping list.

/shopping-list/items/:itemId/update: Update an item in the shopping list.

/shopping-list/items/:itemId/delete: Remove an item from the shopping list.


Each item object can have fields like:

id (unique identifier)

name

price

quantity

category


app.use(express.json());
