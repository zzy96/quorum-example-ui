var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var router = express.Router()

const Web3 = require('Web3')
const address = "0xac68ce80ad5c2dbc6c53dbd205d08d2c42f2c1a8" // use your address
const abi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"type":"constructor"}]
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22000"))
const SimpleStorage = new web3.eth.Contract(abi, address)

app.use('/', router)
app.use(express.static(__dirname))
app.use(bodyParser)

router.get('/value', function(req, res, next) {
  SimpleStorage.methods.get().call((error, result) => {
    if (error) {
      console.log("error: " + error)
      res.json({'value': error})
    } else {
      console.log(result)
      res.json({'value': result})
    }
  })
})

router.get('/:newValue', function(req, res, next) {
  var options = {from: '0xed9d02e382b34818e88B88a309c7fe71E65f419d', privateFor: ["QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc="]}
  SimpleStorage.methods.set(req.params.newValue).send(options, (error, txhash) => {
    if (error) {
      console.log("error: " + error)
      res.send(error)
    } else {
      console.log(txhash)
      res.send(txhash)
    }
  })
})

var server = app.listen(5000);
