'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  //urlName: String,
  active: Boolean,
  parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
});

module.exports = mongoose.model('Category', CategorySchema);
