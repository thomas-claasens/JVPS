'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CountrySchema = new mongoose.Schema({
  name: String,
  position: Number,
  active: Boolean,
  postzone: {type: mongoose.Schema.Types.ObjectId, ref: 'Postagezone'}
});


export default mongoose.model('Country', CountrySchema);
