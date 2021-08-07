var express= require("express");
var router = express.Router({mergeParams: true});


router.get("/", (req, res)=>{
    res.render("index.ejs");
})

module.exports = router;