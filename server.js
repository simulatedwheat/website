// File: server.js
// Author: S. Rudqvist
// Date: 2021/11/11
// server.js contains the code for the server component for the 
// Framed by Fouchi application. Responsabilities of the server are:
//
//      1. Server the static web pages in the web component of the system
//      2. Provide the FouchiPhotography API for both the web and mobile 
//         version of the system.
//
// Modification Log:
// 2021/11/11 - Created the file. (SR)


// Import the express server
const express = require("express");

// The port the application is hosted on
const PORT = 3000;

// Create the http app
const app = express();

// Set up a route to serve static pages from the public folder
app.use(express.static("public"));


// Add an express router
const router = express.Router();

// Create API routes here:




// Use the router in the app
app.use(router);

// Tell app to listen on the port and handle startup errors.
app.listen(PORT, (err) => {
    if (err){
        console.log("Server Startup Failed.");
    }
    else {
        console.log(`Server Listening On Port ${PORT}`);
    }
});