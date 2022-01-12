var express = require('express');
var router = express.Router();
const LoginManager = require("../loginManager").LoginManager;
var Blogs =  require('../model/Blog').Blog
/* GET home page. */
router.get('/', (req, res) => {
  let userName = LoginManager.getUsername();
  if (userName === null){
    userName = "New User"
  }
  

    
      res.render("../views/pages/home",{ pageTitle: "Tony's Blogs", user: userName})
 
 


  
});

module.exports = router;
