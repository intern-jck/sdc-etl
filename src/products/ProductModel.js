const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductModel = new Schema({
  product_id: String,
  product_name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features:[
    {
      feature: String,
      value: String,
    }
  ],
  styles: [
    {
      style_id: String,
      style_name: String,
      sale_price: String,
      original_price: String,
      default_style: String,
      skus: [
        {
          size: String,
          quantity: String,
        }
      ],
      photos: [
        {
          url: String,
          thumbnail_url: String,
        }
      ]
    }
  ]
});

const Product = mongoose.model('Products', ProductModel);
module.exports = Product;
