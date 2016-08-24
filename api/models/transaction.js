var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var transactionSchema   = new Schema({
  account_id: int,
  amount: int
});

module.exports = mongoose.model('Transaction', transactionSchema);