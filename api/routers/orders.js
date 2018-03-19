const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//order Model
const Order = require('../models/order');

//get all
router.get('/', (req, res, next) => {
    Order.find()
        .populate('reservation', 'reff')
        .populate('product', 'initial name')
        .populate('user', 'nick fullName')
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error : err
            });
        });
});

//insert
router.post('/', (req, res, next) => {
    const newOrder = new Order({
        _id : new mongoose.Types.ObjectId(),
        reservation : req.body.reservation,
        product : req.body.product,
        user : req.body.user,
        status : req.body.status,
        qty : req.body.qty,
        //createDate : req.body.createDate,
        //createTime : req.body.createTime,
        lastStatus : req.body.lastStatus,
        //lastTime : req.body.lastTime
    });
    newOrder.save()
        .then(doc => {
            console.log(doc);
            res.status(201).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error : err
            });
        })
});

//get by id
router.get('/:id', (req,res,next) => {
    const id = req.params.id;
    Order.findById(id)
        .populate('reservation', 'reff')
        .populate('product', 'initial name')
        .populate('user', 'nick fullName')
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error : err
            })
        })
});

//update
router.patch('/:id', (req,res,next) => {
    const id = req.params.id;
    const updateOps = {};

    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    Order.update({_id:id}, {$set:updateOps})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message : err
            })
        })
})

//delete
router.delete('/:id', (req,res,next) => {
    const id = req.params.id;
    Order.remove({_id:id})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message : err
            });
        });
});

module.exports = router