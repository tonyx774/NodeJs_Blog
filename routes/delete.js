var express = require('express');
var router = express.Router();
const Blogs= require("../model/Blog").Blog;
const LoginManager = require("../loginManager").LoginManager;
router.get('/:id', (req, res) => {
  blogid = req.params.id
  userid = LoginManager.getUserObj();
  if(userid == null){
      userid = -1
  }
  else{
      userid = userid.userid;
  }
  Blogs.findbyId(blogid, (row) =>{
    console.log(row.creator)
    console.log(row.creator)
    console.log(row.creator)
    console.log(row.creator)
    console.log(row.creator)
    console.log(userid)
    if(row.creator == userid){
    const id = req.params.id;
    Blogs.delete(id, (err, result) =>{
    if (err)
      console.error(err.message);
  })
}
});
  res.redirect("/blogs")
  });

  module.exports = router;