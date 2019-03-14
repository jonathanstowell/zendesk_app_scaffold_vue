import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

declare var ZAFClient: any;

var client = ZAFClient.init();

const MAX_HEIGHT = '500px';

Vue.config.productionTip = false

var entry = new Vue({
  router,
  store,
  render: h => h(App)
});

try {
  client.on('app.registered', function (appData: any) {
    alert("mounting app");
    entry.$mount('#app')
    client.invoke('resize', { height: MAX_HEIGHT });
  });
} catch(error) {
  entry.$mount('#app')
}
