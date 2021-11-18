import camelCase from 'lodash/camelCase'

import { parsePath } from './path'

export function importLangFiles (moduleMap) {
  return Object.fromEntries(
    Object.entries(moduleMap)
      .map(([key, value]) => {
        const path = parsePath(key)
        return [camelCase(path.name), value.default]
      })
  )
}
