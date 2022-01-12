var express = require('express');
var router = express.Router();

const LoginManager = require("../loginManager").LoginManager;
const User = require("../model/User").User;

router.get("/",(req,res) =>
{
    res.render("../views/pages/login", { pageTitle: "Log In" ,errMess: ""});
});

router.post('/', (req,res) =>{


   User.all(async rows =>{
        //get the user that has the requested username
        let user = rows.find(user => user.username === req.body.username);
        console.log(user)





        
        if(user == null){
            res.status(404);
            res.render('../views/pages/login', {errMess: "No user called "+req.body.username, pageTitle:"Login"});
        } 
        
        
        else {
            try{
                if (await req.body.password === user.password) {
                    //check user role
                    LoginManager.setUsername(req.body.username);
                    LoginManager.login();
                    LoginManager.setUserObj(user)
                    console.log("Logged in");
                    console.log(LoginManager.getUserObj().userid);
                    res.redirect("/")




            }
            else{
               
                res.render('../views/pages/login', {errMess: "Incorrect Password", pageTitle:"Login"});
            }
        
        }
            catch {
                res.status(500);
                console.log("Something went wrong")
                res.redirect('/login');
            }







        }
    
})
})



module.exports = router;