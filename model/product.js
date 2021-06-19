const mongoose=require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
   type:String,
  },
  length: {
    type: Number,
  },
  color: {
    type: String,
  },
  style: {
    type: String,
  },
});
module.exports=mongoose.model('Product',ProductSchema);