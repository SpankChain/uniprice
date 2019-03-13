# Uniprice

Estimate the $USD price of an ERC20 Token by getting its DAI price from Uniswap!

## Usage

`npm i uniprice --save`

```
// 0. require the module
const Uniprice = require('./uniprice')

// 1. create a new instance of the Uniprice object
// options:
// - provider -> an ethers.js provider, defaults to using INFURA
// - factoryAddress -> address for the factory, defaults to Mainnet
// - daiExchangeAddress -> address for DAI exchange, defaults to Mainnet
const uniprice = Uniprice(options)

// 1.5. (optional) if you don't have the exchange contract address, get it
// https://docs.uniswap.io/smart-contract-api/factory#getexchange
uniprice.factory.getExchange(tokenAddress)

// 2. look up the exchange contract by its address, save it by its name
// - returns an object which can be used to get the price
const spankSwap = uniprice.setExchange('SPANK', '0x4e395304655f0796bc3bc63709db72173b9ddf98')

// 3. get the current price in DAI
console.log(await spankSwap.getPrice())

// alternatively use the uniprice object and provide the name used in step #2
console.log(await uniprice.getPrice('SPANK'))

// 4. optionally drop the exchange
uniprice.dropExchange('SPANK')
```

### TODO
- multi-token support (iterate over all exchanges to get many prices at once)
- any sort of tests (annoying b/c you have to deploy a bunch of contracts)
