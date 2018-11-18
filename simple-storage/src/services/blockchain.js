const Web3 = require('web3')
const address = "0x1932c48b2bf8102ba33b4a6b545c32236e342f34"
const abi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"type":"constructor"}];

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:22000'))
var contract = new web3.eth.Contract(abi, address)
const GASLIMIT = 4000000

exports.get = function(cb){
  contract.methods.get().call(cb)
}

exports.set = function(value, cb){
  var options = {'from':'0xed9d02e382b34818e88B88a309c7fe71E65f419d', 'gas':GASLIMIT}
  contract.methods.set(value).send(options, cb)
}
