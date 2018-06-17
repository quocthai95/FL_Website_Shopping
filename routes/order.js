var express = require('express');
var router = express.Router();

var orderModels = require('../models/Order');

router.get('/listOrder',function(req,res){
    orderModels.find(function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    })
});

router.post('/',function(req,res){  
    orderModels.insertMany(req.body, function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
     });
});

router.delete('/:id',function(req,res){
    orderModels.deleteOne({_id:req.params.id},function(err,data){
        if(err){
            res.json(err);
        }else {
            res.json(data);
        }
    })
});

router.patch('/:id',function(req,res){
    orderModels.update({_id:req.params.id},{$set: req.body},function(err,data){
        if(err) res.json(err);
        else res.json(data);
    })
});

module.exports = router;