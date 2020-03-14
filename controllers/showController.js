var express = require("express");
var router = express.Router();

// Import the model (show.js) to use its database functions.
var show = require("../models/showModel.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req,res) => {
  show.all(data => {
    var allShowObject = {
      shows: data
    };
    console.log(allShowObject);
    res.render("index", allShowObject);
  });
});

router.put("/api/shows/:id", (req,res) => {
    show.update(req.params.id, data => {
        res.json(data);
    })
})

router.post("/api/shows", (req,res) => {
    show.create(req.body.name, data =>{
      res.json(data);
    })

})


module.exports = router;