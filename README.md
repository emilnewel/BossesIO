#BossesIO

This is my solution of "Small Assignment 3" in the T-427-WEPO - Web-Programming II course at Reykjavík University using ```React, Redux and Express.js. ```

##Dependencies
The dependencies for this assignment can be found in the package.json files.
We were allowed to use ```npm create-react-app``` for this assignment


## How to run
To run, open up 2 instances of CLI's (One for client, another for server) and do the following : 

1. ``` npm install  ``` To install all dependencies (This needs to be done both for the client and the server) 

2. ``` npm start ``` both the client and the server
3. Voila! You can new view the webpage on ```localhost:3000```


## Purpose of this assignment

The purpose of this assignment was to get us familiar with React-Redux and Async Action Creators.

## Features 
 * View various Megaman heroes
 * Add new heroes (Name, Description and ImageURL required)
 * Edit already existing heroes
 * Delete already existing heroes


## Server API
 * ```GET localhost:4500/bosses``` - Returns a JSON of all the bosses in the database
 * ```GET localhost:4500/bosses/:id``` - Returns the JSON of a single boss (If it exits) otherwise returns a status code 404. 
 * ```PATCH localhost:4500/bosses/:id``` - Updates existing boss with given data if boss with corresponding id is found and returns status code 204. Returns 404 if boss with corresponding id is not found. 
 * ```POST localhost:4500/bosses``` - Create a new boss object and add it to the database, returns if status code 400 if unsuccessful or 201 if successful.
 * ```DELETE localhost:4500/bosses/:id``` - Deletes an existing boss in the database with the corresponding id and reutrns 204 if successful, 404 if boss was not found. 