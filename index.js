"use strict";
/*
    Project: Express practice
    Author: Eric Guo
    Date: Nov 25, 2018
    OTC CIS-131-W01
    This file is going to create a webserver via express module, 
    and send different page based on the request path.
*/
var express = require('express');
var app = express();
var path = require('path');

app.get(['/','/index.html','/about.html'], function(req, res){
    //the path array for all potential strings
    //console.log(req.path); //debug using
    
    var pathname = req.path; //get the request path
    var filename = "/index.html"; //determine the send file, but default is "/index.html"

    switch(pathname){
        case '/index.html':
            filename = "/index.html";
            break;
        case '/about.html':
            filename = "/about.html";
            break;
        default:
            break;
    }

    res.sendFile(path.join(__dirname + filename));
});

app.listen(3000);

console.log("Server is running."); //prompt the server is running