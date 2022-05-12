import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
  .use(router)

// 引入所有外部插件、指令和过滤器
Object.values(import.meta.globEager('./(vendors|directives|filters)/*.js'))
  .forEach(v => v.install?.(app))

app.mount('#app')
