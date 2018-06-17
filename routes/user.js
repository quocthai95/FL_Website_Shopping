var express = require('express');

var router = express.Router();

var userModel = require('../models/user');
var productModels = require('../models/Product');

router.patch('/user',function(req,res){
    userModel.find(req.body,function(err,data){
        if(err){
            res.json(err);
        }else{
            if(data.length == 0){
                res.json(false);
            }else{
                res.json(true);
            }
        }
    });
});

router.post('/user',function(req,res){
    userModel.insertMany(req.body,function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
});

router.get('/randomproduct',function(req,res){
    productModels.count().exec(function (err, count) {

        // Get a random entry
        var random = Math.floor(Math.random() * count)
      
        // Again query all users but only fetch one offset by our random #
        productModels.find().limit(3).skip(random).exec(
          function (err, result) {
            // Tada! random user
            res.json(result);
          })
      })
});


module.exports = router;
