// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { http, config } from './api'
import url from './api/requestUrl'
import storage from './tools/storage'
import 'babel-polyfill'
import './tools/filter'
import '../static/css/reset.css'
import '../static/font/iconfont.css'
// import AtComponents from 'at-ui'
// import 'at-ui-style' 
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'; 

// import Fyui from 'vue-fly-ui'

config.mock ? require('./mock') : null

// Vue.use(AtComponents)
Vue.use(Mint)
// Vue.use(Fyui)

Vue.config.productionTip = false
Vue.prototype.$url = url
Vue.prototype.$http = http
Vue.prototype.$storage = storage
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
