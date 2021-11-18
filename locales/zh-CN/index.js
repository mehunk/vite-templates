import { importLangFiles } from '@/utils/i18n'

const shared = {
  home: '主页',
  about: '关于'
}

export default {
  ...shared,
  ...importLangFiles(import.meta.globEager('./*.yml'))
}
