import { INCREMENT } from './mutation-types'

export default {
  [INCREMENT] (state) {
    state.count++
  }
}
