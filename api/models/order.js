const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    reservation : { type : mongoose.Schema.Types.ObjectId, ref: 'Reservation', required: true },
    product : { type : mongoose.Schema.Types.ObjectId, ref : 'Product', required : true },
    user : { type : mongoose.Schema.Types.ObjectId, ref : 'User', required : true },
    status : { type : Number, required : true },
    qty : { type : Number, required : true },
    //createDate : { type : Date, required : true },
    //createTime : { type : TimeRanges, required : true },
    lastStatus : { type : Number, required: true },
    //lastTime : {type : TimeRanges, required: true}
});

module.exports = mongoose.model('Order', orderSchema, 'orders')