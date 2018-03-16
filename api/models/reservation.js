const mongoose = require ('mongoose');

const reserveSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    table : { type : mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
    user : {type : mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    reff : { type : String, required: false },
    guest : { type : String, required : true },
    //date : { type : Date, required: true },
    //time : { type : TimeRanges, required: true }
});

module.exports = mongoose.model('Reservation', reserveSchema, 'reservations')