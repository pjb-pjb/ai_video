'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
    API_ROOT:'"http://localhost:8080/"',
    WS_HOST_ROOT:'"172.16.3.178:8080"'
})
