var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST

router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');

var AvgSchema = mongoose.Schema({
  Mailid:Array,
movieName:String,
avgrating:Array,
   });

var Avg = mongoose.model('Avg',AvgSchema,'Avgrating');


router.get('/avg', function (req, res) {
    console.log("avg rating");

    Avg.find({}, function (err, docs) {
         res.json(docs);
         console.log(docs);

    });
});

router.get('/avg/:id', function (req, res) {
    console.log("avg rating id");
     Avg.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/avg', function(req, res){
  var mail =req.body.Mailid;
  var name = req.body.movieName;
  var value=req.body.avgrating;
   var rate = new Avg({
     Mailid:mail,
  movieName:name,
  avgrating:value,
  });
  rate.save(function(err, docs){
    if ( err ) throw err;
    console.log("avg rating Saved Successfully");
    res.json(docs);
  });
})

// router.post('/ar/:a1/:a',function(req,res){
// var ra=new Avg({

//   t:req.params.a1,
//   r: req.params.a,

//   });
//   ra.save(function(err, docs){
//     if ( err ) throw err;
//     console.log("Successfully : "+docs);
//   });
// });

router.delete('/avg/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Avg.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/avg/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Avg.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
