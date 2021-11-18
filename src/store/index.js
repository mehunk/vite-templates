import { createStore } from 'vuex'

import mutations from './mutations'

const state = {
  count: 0
}

export default createStore({
  state,
  mutations
})
