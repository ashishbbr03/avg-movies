
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');

var AssmSchema = mongoose.Schema({
    assmID: String,
    moviTitle: String
 });
var Assm = mongoose.model('Assm', AssmSchema, 'assm');



//Master
  router.get('/getAssm', function (req, res) {
    console.log("REACHED assm GET FUNCTION ON SERVER");
    Assm.find({}, function (err, docs) {
         res.json(docs);
    });
});

  router.get('/getAssm/:id', function (req, res) {
    console.log("REACHED assm GET ID FUNCTION ON SERVER");
    console.log(req.params.id);
     Assm.find({assmID: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addAssm', function(req, res){
  console.log(req.body);
  var id = req.body.assmID;
  var moviTitle = req.body.moviTitle;

  var assm = new Assm({
    assmID: id,
    moviTitle: moviTitle
  });

console.log(assm);
  assm.save(function(err, docs){
    if ( err ) throw err;
    console.log("Assm Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/deleteAssm/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
   console.log(req.params.id);
      Assm.remove({assmID:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateAssm/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Assm.findOneAndUpdate({assmID:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

  module.exports = router;
