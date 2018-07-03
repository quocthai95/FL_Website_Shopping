var express = require('express');
var router = express.Router();

var productModels = require('../models/Product');

router.get('/',function(req,res){
    productModels.find(function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
});

router.get('/:id',function(req,res,next){


    productModels.findOne({productId:req.params.id},function(err,data){
        if(err){
             res.json(err);
             //module.exports = router;
        }
        else {
            res.json(data);
        }
    });

});

router.post('/',function(req,res){
    productModels.insertMany(req.body, function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
     });
});

router.delete('/:id',function(req,res){
    productModels.deleteOne({productId:req.params.id},function(err,data){
        if(err){
            res.json(err);
        }else {         
            res.json(data);
            
        }
    })
});

router.patch('/:id',function(req,res){
    productModels.update({productId:req.params.id},{$set: req.body},function(err,data){
        if(err) res.json(err);
        else res.json(data);
    })
});

router.post('/search',function(req,res){
    const query = req.body.productName.toString();
    productModels.find({productNameTemp:{$regex:new RegExp( query.replace(/\s+/g,"\\s+"))}},function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
});

router.post('/category3',function(req,res){
    productModels.count({"category":req.body.category}).exec(function(err,count){
        
            productModels.find({"category":req.body.category,"productId":{$ne: req.body.productId}})
            .limit(3)
            .skip(Math.floor(Math.random*count))
            .exec(function(err,data){
                if(err) {
                    res.json(err);
                }
                else {      
                    res.json(data);
                }
            });
    });
});

router.post('/category',function(req,res){

    productModels.find(req.body,function(err,data){
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });

});

module.exports = router;