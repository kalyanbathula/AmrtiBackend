const express=require("express");
const router=express.Router();
const productController=require("../controllers/product.controller.js");

console.log("hello")
router.get('/', productController.getAllProducts);
router.get('/id/:id', productController.findProductById);
router.get('/search', productController.searchProduct);
router.post('/createProduct',productController.createProduct)


module.exports = router;