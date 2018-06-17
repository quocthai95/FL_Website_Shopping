var express = require('express');
var router = express.Router();

var productModel = require('../models/Product');

router.get('/home',function(req,res,next){

    var result = new Array();

    productModel.find({"hot": true})
        .limit(10)
        .exec(function(err,data){
           if(err){
               res.json(err);
               //module.exports = router;
           } else{
                result.push({"hot":data});
                productModel.find({"new": true})
                .limit(10)
                .exec(function(err,data2){
                    if(err){
                        res.json(err);
                    }
                    else{
                        result.push({"new":data2});  
                        productModel.find({"sale":true})
                        .limit(10)
                        .exec(function(err,data3){
                            if(err){
                                res.json(err);
                            }else{
                                result.push({"sale":data3});  
                                res.json(result);
                            }
                        });
                    }
                });
            //    result.push({"new":data[1]});
            //    result.push({"sale":data[2]});
                // res.json(data);
           }
    });
});
module.exports = router;