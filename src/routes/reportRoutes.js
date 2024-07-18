const express=require("express");
const router=express.Router();
const reportController=require("../controllers/reportControllers.js")



console.log("In the Report Routes")
router.get("/",reportController.createReport)

module.exports = router;