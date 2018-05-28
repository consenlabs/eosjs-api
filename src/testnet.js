const apiGen = require('./apigen')

module.exports = Testnet

const API_VERSION = 'v1'

Testnet.api = require('./api/v1')

// Always use SSL unless a browser protocol is 'http'
const protocol = 'https'

const configDefaults = { httpEndpoint: `${protocol}://t1readonly.eos.io` }

/**
  @arg {object} config
*/
function Testnet(config) {
  config = Object.assign({}, configDefaults, config)
  return apiGen(API_VERSION, Testnet.api, config)
}
