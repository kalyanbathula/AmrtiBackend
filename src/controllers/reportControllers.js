const mongoose = require('mongoose');
const Report = require('../models/productReportmodel');
const QRcode = require('qrcode');
const fixedurl = "https://amrti.com/reports";

async function findlength(category) {
    
    const reports = await Report.find({ category: category });
    console.log(reports);
    const length = reports.length;
    console.log('Length:', length);
    return length;
}

exports.createReport = async (req, res) => {
    console.log(req.body);
    const detail1 = req.body.detail1;
    const category = req.body.category;
    const length=await findlength(category); 

    const fullUrl = `${fixedurl}/${category}/${detail1}/${length}`;
    const qrCodeData = await QRcode.toDataURL(fullUrl);



    req.body.qrCode = qrCodeData;

    
        const report = await Report.create(req.body);

        res.status(202).json({
            status: 'success',
            data: {
                report
            }
        });
   
    
};
