const Web3 = require('web3')
const web3 = {
  'node1': new Web3(new Web3.providers.HttpProvider('http://localhost:22000')),
  'node2': new Web3(new Web3.providers.HttpProvider('http://localhost:22001')),
  'node3': new Web3(new Web3.providers.HttpProvider('http://localhost:22002')),
  'node4': new Web3(new Web3.providers.HttpProvider('http://localhost:22003')),
  'node5': new Web3(new Web3.providers.HttpProvider('http://localhost:22004')),
  'node6': new Web3(new Web3.providers.HttpProvider('http://localhost:22005')),
  'node7': new Web3(new Web3.providers.HttpProvider('http://localhost:22006'))
}
const address = "0x286d4284ca2de1fc487f0227bb5c09910f37d386"
const abi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"type":"constructor"}]
const GASLIMIT = 4000000

const contract = {
  'node1': new web3['node1'].eth.Contract(abi, address),
  'node2': new web3['node2'].eth.Contract(abi, address),
  'node3': new web3['node3'].eth.Contract(abi, address),
  'node4': new web3['node4'].eth.Contract(abi, address),
  'node5': new web3['node5'].eth.Contract(abi, address),
  'node6': new web3['node6'].eth.Contract(abi, address),
  'node7': new web3['node7'].eth.Contract(abi, address)
}
const accounts = {
  '1':'0xed9d02e382b34818e88b88a309c7fe71e65f419d',
  '2':'0xca843569e3427144cead5e4d5999a3d0ccf92b8e',
  '3':'0x0fbdc686b912d7722dc86510934589e0aaf3b55a',
  '4':'0x9186eb3d20cbd1f5f992a950d808c4495153abd5',
  '5':'0x0638e1574728b6d862dd5d3a3e0942c3be47d996',
  '6':'0xae9bc6cd5145e67fbd1887a5145271fd182f0ee7',
  '7':'0xcc71c7546429a13796cf1bf9228bff213e7ae9cc'
}
const privateList = {
  '1':'BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=',
  '2':'QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=',
  '3':'1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=',
  '4':'oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=',
  '5':'R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=',
  '6':'UfNSeSGySeKg11DVNEnqrUtxYRVor4+CvluI8tVv62Y=',
  '7':'ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc='
}

exports.get = function(node, cb){
  contract['node'+node].methods.get().call(cb)
}

exports.set = function(value, node, privateFor, cb){
  var list = []
  for (var i=0;i<privateFor.length;i++){
    list.push(privateList[privateFor[i]])
  }
  var options = {'from':accounts[node], 'gas':GASLIMIT, 'privateFor':list}
  contract['node'+node].methods.set(value).send(options, cb)
}

exports.isConnected = function(node){
  return web3['node'+node].isConnected()
}
