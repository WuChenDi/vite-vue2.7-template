import Vue from 'vue'
import './style.css'
import App from './App'

// createApp(App).mount('#app')
new Vue({
  render: (h) => h(App),
}).$mount('#app')
