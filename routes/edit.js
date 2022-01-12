var express = require('express');
var router = express.Router();
var Blogs =  require('../model/Blog').Blog
const LoginManager = require("../loginManager").LoginManager;
var datetime = new Date();
router.get('/:id', (req, res) => {
    userid = LoginManager.getUserObj();
    blogid = req.params.id
    
    
    
    if(userid == null){
        userid = -1
    }
    else{
        userid = userid.userid;
        console.log(userid)
    }
    if(req.params.id == -1){
        res.redirect("/login")

   }
    else{
        Blogs.findbyId(blogid, (row) =>{
            console.log(row)
            res.render("../views/pages/edit",{ pageTitle: "Edit", blog: row})
        })
    }
   


});


router.post('/:id', (req,res) => {
    blogid = req.params.id
    userid = LoginManager.getUserObj();
    if(userid == null){
        userid = -1
    }
    else{
        userid = userid.userid;
    }
    console.log("siuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
    const blog = {creator: userid, createDate: datetime , title: req.body.title, searchTerm: req.body.searchTerm, content: req.body.content};
    
    Blogs.findbyId(blogid, (row) =>{
        console.log(row.creator)
        console.log(userid)
        if(row.creator == userid){
            console.log("oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
            Blogs.delete(blogid, (err, result) =>{
                if (err)
                  console.error(err.message);
              });
            Blogs.create(blog, err =>{
                
                if (err)
                  console.error(err.message);
            })

        }
       
    })
  
    
    res.redirect("/blogs")
})




module.exports = router;