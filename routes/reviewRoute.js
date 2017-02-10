var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var router=express.Router();

router.use(bodyParser.urlencoded({extended:true}));

var mongoose = require('mongoose');


var reviewschema1=mongoose.Schema({
  moviename:String,
avg1:String,
  //description:String
});

var review=mongoose.model('review',reviewschema1,'avg');

router.get('/readreview',function(req,res)
{
  review.find({},function(err,docs)
{
  res.json(docs);
});
});


router.post('/leavereview/:m,t',function(req,res)
{
  var rv=new review({
    moviename:req.params.m,
   // avg:req.body.title,
   avg1:req.params.t
   // description:req.body.desc
  });
  rv.save(function(err,docs)
{
  if(err) throw err;
  console.log("Review Posted Successfully")
});
});



module.exports=router
