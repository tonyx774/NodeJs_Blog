var express = require("express");
var router = express.Router();
const User = require("../model/User").User;
router.get("/", (req,res) =>
{
    res.render("../views/pages/register",{ pageTitle: "Register" });

});

router.post("/", (req,res) =>
{
    const newUser = {username:req.body.username, password:req.body.password}

    User.create(newUser, err =>{
        if (err)
          console.error(err.message);
    })
    console.log(req.body.username)
    console.log(req.body.password)
    res.redirect("/login");

});
module.exports = router;