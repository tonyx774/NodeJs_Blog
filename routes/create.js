var express = require('express');
var router = express.Router();
const Blog= require("../model/Blog").Blog;
const LoginManager = require("../loginManager").LoginManager;
var datetime = new Date();
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    // future code to be used with login
    if(req.params.id == -1){
        res.redirect("/login")

   }
    else{
   res.render("../views/pages/create",{ pageTitle: "Create a new blog"})
    }
   
    

});

router.post('/:id', (req,res) => {
    console.log(req.body.title)
    console.log(req.body.content)
    console.log(req.body.searchTerm)
    userid = LoginManager.getUserObj();
    
    
    
    
    if(userid == null){
        userid = -1
        res.redirect("/blogs")
    }
    else{
        userid = userid.userid;
        console.log(userid)
        console.log(userid)
        console.log(userid)
        console.log(userid)
        console.log(userid)
        console.log(userid)
    }
    const blog = {creator: userid, createDate: datetime , title: req.body.title, searchTerm: req.body.searchTerm, content: req.body.content};
    Blog.create(blog, err =>{
        if (err)
          console.error(err.message);
    })
    res.redirect("/blogs")
})




module.exports = router;