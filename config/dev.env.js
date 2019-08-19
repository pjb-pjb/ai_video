'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
    API_ROOT:'"http://192.168.6.10:9090"',
    WS_HOST_ROOT:'"192.168.6.10:9090"',
    IMG_ROOT:'"http://192.168.6.10:9090"'
})
