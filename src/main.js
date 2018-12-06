import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueCurrencyFilter from 'vue-currency-filter'
  Vue.use(VueCurrencyFilter,
  {
    symbol : '$',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: '.',
    symbolPosition: 'front',
    symbolSpacing: true

  })


new Vue({
  render: h => h(App),
}).$mount('#app')
