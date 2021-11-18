import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
  .use(router)
  .use(store)

// 引入所有外部插件
Object.values(import.meta.globEager('./vendors/*.js'))
  .map(v => v.install?.(app))

app.mount('#app')
