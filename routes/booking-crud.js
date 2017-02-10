var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST

router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');
//var dbHost = 'mongodb://localhost:27017/test';
//mongoose.connect(dbHost);

var bookingSchema = mongoose.Schema({
  BookingID:String,
     BDate:String,
    // customerName:String,
    mName:String,
    tName:String,
     seatno:String,
    //  Email : String,
    //      Phone : String,
    tLoc:String,
    sTime:String,
    noofTickets:String,
    amountPaid:String,
   // res:Array
    });

var Book = mongoose.model('Book', bookingSchema, 'book');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log("Connected to DB");
// });

router.get('/bk', function (req, res,next) {
    console.log("REACHED GET FUNCTION ON SERVER");

    Book.find({}, function (err, docs) {
         res.json(docs);
         console.log(docs);

    });
});

router.get('/bk/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Book.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/bk', function(req, res){
    var id=req.body.BookingID;
  console.log(req.body);
   var date=req.body.BDate;
    var name = req.body.mName;
    var tname=req.body.tName;
var id=req.body.BookingID;
    var tloc = req.body.tLoc;
    var time = req.body.sTime;
    var cnt = req.body.noofTickets;
    var amt=req.body.amountPaid;
    var count=req.body.seatno;
    // var mailid=req.body.Email;
    // var phoneno=req.body.Phone;
    // var cname=req.body.customerName;
    var rs=req.body.res;
   var Booking = new Book({
     BookingID:id,
    BDate:date,
    mName:name,
    tName:tname,
   seatno:count,
    tLoc:tloc,
    sTime:time,
    noofTickets:cnt,
    amountPaid:amt,
    res:rs,
    // Email:mailid,
    // Phone:phoneno,
    // customerName:cname,
  });

  Booking.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/bk/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Book.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/bk/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Book.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = router;
