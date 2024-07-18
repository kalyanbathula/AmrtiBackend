const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({

    category:{
        type:String,
        required:[true,"Product must have a category"]

    },
    batchNo: {
        type: String,
        required: [true, 'Batch number is required']
    },
    detail1: {
        type: String,
        required: [true, 'Detail 1 is required']
    },
    detail2: {
        type: String,
        required: [true, 'Detail 2 is required']
    },
    detail3: {
        type: String,
        required: [true, 'Detail 3 is required']
    },
    detail4: {
        type: String,
        default: ''
    },
    qrCode: {
        type: String,
        required: [true, 'QR Code is required']
    }
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;
