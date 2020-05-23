## 配置项
#### dev.env.js
```
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // baseURL: '"https://www.lazetrade.com:8099/lazetradeBackend/"',
  // baseURL: '"http://localhost:8080/"'
// baseURL: '"https://www.lazetrade.com:8080/"'
  // baseURL: '"http://47.106.129.145:8099/"'
  baseURL: '"http://47.106.129.145:8099/lazetradeBackend/"'

 
})

```
#### index.js
```
'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
   //assetsPublicPath: './',
    proxyTable: {
		'/api' : {
  // baseURL: '"http://localhost:8080/"',
  // baseURL: '"https://www.lazetrade.com:8099/lazetradeBackend/"',
  baseURL: '"http://47.106.129.145:8099/lazetradeBackend/"',
      // target : 'https://www.lazetrade.com:8080/',
      // target:'http://47.106.129.145:8080/',
			changeOrigin : true,
			pathRewriter : {
				'^/api' : ''
			}
		}
	},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}

```
#### prod.env.js
```
'use strict'
module.exports = {
  NODE_ENV: '"production"',
  // baseURL: '"http://localhost:8080/"'
  // baseURL: '"https://www.lazetrade.com:8099/lazetradeBackend/"'
  // baseURL: '"https://www.lazetrade.com:8080/"'
  // baseURL: '"http://47.106.129.145:8080/"'
  baseURL: '"http://47.106.129.145:8099/lazetradeBackend/"'

}

```
#### test.env.js
```
'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})

```


