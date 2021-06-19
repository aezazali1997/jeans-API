const prodController = require('../controllers/productController'); 
const express=require('express');
const router=express.Router();

router.get('/',prodController.getProduct)
router.post("/", prodController.createProduct);
router.delete("/:productId", prodController.deleteProduct); 
router.put("/:productId", prodController.updateProduct);
module.exports=router;
