const productRepo = require("../repository/productRepo");
let product = new productRepo();
module.exports = {
  getProduct: async (req, res) => {
    let products = await product.getAllProducts();
    res.json(products);
  },
  createProduct: async (req, res) => {
    let { name, description, image, length, color, style } = req.body;
    let response = await product.createProduct({
      name,
      description,
      image,
      length,
      color,
      style,
    });
    res.json(response);
  },
  deleteProduct: async (req, res) => {
    const productId = req.params.productId;
    const response = await product.deleteProduct(productId);
    res.json(response);
  },
  updateProduct: async (req, res) => {
    let { name, description, image, length, color, style } = req.body;
    let productId = req.params.productId;
    let response = await product.updateProduct(productId, {
      name,
      description,
      image,
      length,
      color,
      style,
    });
    res.json(response);
  },
};
