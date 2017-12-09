var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")


router.get("/", function(req, res) {
	burger.all(function(data) {
		console.log(data);
		var hbsObject = {
			burgers: data
		};
		res.render("index", hbsObject);
	});
});


router.post('/api/burgers', function(req, res){
	console.log('hit route');
	burger.create([
	'burger_name', 'devoured'
	], [
	req.body.name, false
	], function(result){
		//send back the ID of the new burger
		burger.all(function(data){
		var hbsObject = {
			burgers:data
		};
		console.log(hbsObject);
		res.redirect('/');
		});
	});
});




router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {

      res.redirect("/")
    }
  });
});



module.exports = router;