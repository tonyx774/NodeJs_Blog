const LoginManager = require("../loginManager").LoginManager;
var express = require('express');
var router = express.Router();

router.get("/", (req,res) =>{
    LoginManager.setUserObj(null)
    LoginManager.setUsername(null)
    LoginManager.logout()
    res.redirect("/")




})

module.exports = router;