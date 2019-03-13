const Uniprice = require('./index')

// SPANK token address
let spankExchangeAddress = '0x4e395304655f0796bc3bc63709db72173b9ddf98';

async function main() {
  const uniprice = Uniprice()
  const spankSwap = uniprice.setExchange('SPANK', '0x4e395304655f0796bc3bc63709db72173b9ddf98')

  console.log(await spankSwap.getPrice())
  console.log(await uniprice.getPrice('SPANK'))
  // console.log(uniprice.exchanges)

  uniprice.dropExchange('SPANK')
  // console.log(uniprice.exchanges)
}

main()
