
const Product = require("../model/product");
const genericResponse = require("../utils/genericResponse");
class ProductRepo {
  constructor() {}

  async getAllProducts() {
    let products = await Product.find();
    return products;
  }
  async createProduct(product) {
    let response = new genericResponse();
    try {
      let newProduct = new Product({
        name: product.name,
        description: product.description,
        image: product.image,
        length: product.length,
        color: product.color,
        style: product.style,
      });
      await newProduct.save();
      response.success = true;
    } catch (error) {
      console.log(error);
      response.success = false;
      response.error = error;
    }
    return response;
  }
  async deleteProduct(productId) {
    let resposne = new genericResponse();
    try {
      const product = await Product.findById(productId);
      if (product) {
        await product.remove();
        resposne.success = true;
      }
    } catch (error) {
      console.log(error);
      resposne.error = error;
    }
    return resposne;
  }
  async updateProduct(productId, productData) {
    let response = new genericResponse();
    try {
      const product = await Product.findById(productId);
      if (product) {
        await Product.findByIdAndUpdate(
          productId,
          {
            name: productData.name,
            description: productData.description,
            image: productData.image,
            length: productData.length,
            color: productData.color,
            style: productData.style,
          },
          { new: true }
        );
        response.success = true;
      }
    } catch (error) {
      console.log(error);
      response.error = error;
    }
    return response;
  }
}
module.exports = ProductRepo;
