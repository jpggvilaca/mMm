var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var accountSchema   = new Schema({
  user_id: int,
  name: String,
  credit: int
});

module.exports = mongoose.model('Account', accountSchema);