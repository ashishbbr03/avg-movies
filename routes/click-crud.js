var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST

router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');


var clickSchema = mongoose.Schema({
movieTitle:String,
	 });

var Click = mongoose.model('Click', clickSchema, 'movieclick');


router.get('/click', function (req, res,next) {
    console.log("REACHED GET FUNCTION ON SERVER");

    Click.find({}, function (err, docs) {
         res.json(docs);
         console.log(docs);

    });
});

router.get('/click/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Click.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/click', function(req, res){
  console.log(req.body);
    var mTitle=req.body.movieTitle;
    
   var Clicking = new Click({
    
    movieTitle:mTitle,
  });

  Clicking.save(function(err, docs){
    if ( err ) throw err;
    console.log("click transfer Successfully");
    res.json(docs);
  });

  })

router.delete('/click/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Click.remove({ID:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/click/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Click.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = router;
