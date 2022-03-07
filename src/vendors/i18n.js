import { createI18n } from 'vue-i18n'

import { parsePath } from '@/utils/path'

export const defaultLocale = 'zh-CN'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../../locales/*.y(a)?ml'))
    .map(([key, value]) => {
      const path = parsePath(key)
      const langName = path.name
      const langContent = {
        ...value.default
      }
      return [langName, langContent]
    })
)

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
  globalInjection: true
})

export function install (app) {
  app.use(i18n)
}

export default i18n
