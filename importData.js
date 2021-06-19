const Product=require('./model/product');
const connectDB = require("./config/db");
connectDB();
const PRODUCT = {
  name:'blue jeans',
  description:'it is made of pure fabrics',
  image:'a path',
  length:28,
  color:'white',
  style:'narrow bottom'
}
const importData = async ()=>{
  try {
    await Product.create(PRODUCT);
    console.log("products created");
    return;

  } catch (error) {
    console.log(error);
  }
}
const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log("products deleted");
    return;
  } catch (error) {
    console.log(error);
  }
};
if(process.argv[2]==='-i'){
importData(); 
}
else if (process.argv[2]==='-d'){
deleteData();
}