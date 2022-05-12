import dayjs from 'dayjs'

const filters = {
  formatTime (timestamp) {
    return timestamp && dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
  },
  formatDate (timestamp) {
    return timestamp && dayjs(timestamp).format('YYYY-MM-DD')
  }
}

export function install (app) {
  if (!app.config.globalProperties.$filters) {
    app.config.globalProperties.$filters = {}
  }

  Object.entries(filters).forEach(([key, fn]) => {
    app.config.globalProperties.$filters[key] = fn
  })
}
