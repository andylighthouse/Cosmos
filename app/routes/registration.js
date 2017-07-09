var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var url = 'mongodb://localhost:27017/learning_mongo';
var bodyParser = require('body-parser');

MongoClient.connect(url, function(err, db){
  console.log('connected successfully to sever');

  //db.close();
});

router.get('/api',function(req, res){
  res.json(postData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));
router.post('/api',function(req,res){
  let postData = req.body;
  if(postData.text.length<=0)
    return;

  console.log('valid post');
});
module.exports = router;