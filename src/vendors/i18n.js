import { createI18n } from 'vue-i18n'

import { parsePath } from '@/utils/path'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../../locales/**/index.js'))
    .map(([key, value]) => {
      const path = parsePath(key)
      const lang = path.dirParts[path.dirParts.length - 1]
      return [lang, value.default]
    })
)

export function install (app) {
  const i18n = createI18n({
    legacy: false,
    locale: 'zh-CN',
    globalInjection: true,
    messages
  })

  app.use(i18n)
}
