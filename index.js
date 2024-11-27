const express = require('express');
const path = require('path');



const server = express();
const JokeRouter = require('./joke');
server.use(JokeRouter);


server.listen(8080, ()=>{console.log("8080 is Working fine");
})