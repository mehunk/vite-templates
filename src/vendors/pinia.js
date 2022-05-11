import { createPinia } from 'pinia'

export function install (app) {
  app.use(createPinia())
}
