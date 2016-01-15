'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  imageUrlName: String,
  active: Boolean,
  image: String,
  parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
});

module.exports = mongoose.model('Category', CategorySchema);
