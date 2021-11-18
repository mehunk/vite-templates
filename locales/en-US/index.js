import { importLangFiles } from '@/utils/i18n'

const shared = {
  home: 'Home',
  about: 'About'
}

export default {
  ...shared,
  ...importLangFiles(import.meta.globEager('./*.yml'))
}
