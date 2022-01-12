var express = require('express');
var router = express.Router();
const Blogs= require("../model/Blog").Blog;
router.get("/", (req,res)=>{
    console.log(req.url.split("=")[1])
    searchTerm = req.url.split("=")[1]
    Blogs.find(searchTerm, (row) =>{
        console.log(row)
        if(row == null){
            res.redirect("/")
        }
        else{
        res.render("../views/pages/search",{ pageTitle: "Edit", blogs: row})
        }
    })
    
})

module.exports = router;