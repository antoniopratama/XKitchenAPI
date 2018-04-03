const mongoose = require ('mongoose');

const reserveSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    table : { type : mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
    user : {type : mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    reff : { type : String, required: true, trim: true },
    guest : { type : String, required : true, trim: true },
    created : { type : Date, required: true, default:Date.now(), trim: true },
    paid : { type : Boolean, required: true, default: false }
    //time : { type : TimeRanges, required: true }
});

module.exports = mongoose.model('Reservation', reserveSchema, 'reservations')