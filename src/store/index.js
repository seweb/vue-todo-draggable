/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import board from './modules/board'
import { saveState } from '../utils/saveState'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [saveState],
  modules: {
    board,
  }
})
