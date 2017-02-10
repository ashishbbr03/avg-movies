
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
    bookID: String,
    tookID1: String,
    dookID: String,
    tookID: String,
    seatID: String
 });
var Book = mongoose.model('Book', BookSchema, 'book');



//Master
  router.get('/getBook', function (req, res) {
    console.log("REACHED book GET FUNCTION ON SERVER");
    Book.find({}, function (err, docs) {
         res.json(docs);
    });
});

  router.get('/getBook/:id', function (req, res) {
    console.log("REACHED book GET ID FUNCTION ON SERVER");
    console.log(req.params.id);
     Book.find({bookID: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addBook', function(req, res){
  console.log(req.body);
  var id = req.body.bookID;
  var tookID1 = req.body.tookID1;
  var dookID = req.body.dookID;
  var tookID = req.body.tookID;
  var seatID = req.body.seatID;



  var book = new Book({
    bookID: id,
    tookID1: tookID1,
    dookID: dookID,
    tookID: tookID,
    seatID: seatID

  });

console.log(book);
  book.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/deleteBook/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
   console.log(req.params.id);
      Book.remove({bookID:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateBook/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Book.findOneAndUpdate({bookID:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

  module.exports = router;
