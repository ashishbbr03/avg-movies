var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');




var searchSchema = mongoose.Schema({
	searchId:String,
    searchName: String
    

 });
var Search = mongoose.model('Search',searchSchema, 'search');



  router.get('/search/:name', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Search.find({searchName: req.params.name}, function (err, docs) {
         res.json(docs);
         
    });
});

module.exports=router;