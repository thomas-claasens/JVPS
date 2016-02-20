'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ProductSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean, 
  image: String,
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
});

export default mongoose.model('Product', ProductSchema);
