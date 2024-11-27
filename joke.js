const express= require('express');
const path = require('path');
const router= express.Router();

const jokesAPI= require(path.join(__dirname,'jokes.json')).jokes;

router.get('/api/jokes/random' ,(req,res)=>{
    const randomIndex= Math.floor(Math.random()* jokesAPI.length);
    const randomJoke = jokesAPI[randomIndex];
    res.json({
        joke:randomJoke
    })
})

module.exports=router;

