
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');


// var dbHost = 'mongodb://localhost:27017/test';
// mongoose.connect(dbHost);



var timeSchema = mongoose.Schema({
    timeID: String,
    assmID: String,
    moviTitle: String,
    thtrID: String
 });
var Time = mongoose.model('Time', timeSchema, 'time');



//Master
  router.get('/getTime', function (req, res) {
    console.log("REACHED time GET FUNCTION ON SERVER");
    Time.find({}, function (err, docs) {
         res.json(docs);
    });
});

  router.get('/getTime/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
    console.log(req.params.id);
     Time.find({timeID: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addTime', function(req, res){
  console.log(req.body);
  var id = req.body.timeID;
  var date = req.body.assmID;
  var moviTitle = req.body.moviTitle;
  var theatreID = req.body.thtrID;
  var time = new Time({
    timeID : id,
    assmID : date,
    moviTitle : moviTitle,
    thtrID : theatreID
  });

  time.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/deleteTime/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
   console.log(req.params.id);
      Time.remove({timeID:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateTime/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Time.findOneAndUpdate({timeID:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

  module.exports = router;
