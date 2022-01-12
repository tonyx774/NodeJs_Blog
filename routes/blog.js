var express = require('express');
var router = express.Router();
var Blogs =  require('../model/Blog').Blog
const LoginManager = require("../loginManager").LoginManager;
router.get('/', (req,res) => 
{
    console.log('Request for about page recieved');
    let userid = LoginManager.getUserObj()

    // set to -1 if user is not legged in
    if(userid === null) {
        userid = -1
        console.log("null")
    }
    else{
        userid = LoginManager.getUserObj().userid
    }
    console.log(userid)
    let blog = Blogs.all(rows =>{
        console.log(rows)
    res.render("../views/pages/blog",{ pageTitle: "Blogs", blogs : rows, userid : userid})
    })

   
});

module.exports = router;