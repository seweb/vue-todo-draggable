import defaultData  from '../../utils/board'

export default {
  state: {
    board: JSON.parse(localStorage.getItem('board')) || defaultData
  },

  mutations: { 
    ADD_CARD(state, payload) {
      state.board.data.unshift(payload)
    },

    EDIT_CARD(state, payload) {
      state.board.data.forEach(item => {
        if(item.id === payload.id) {
          item.description = payload.description,
          item.name = payload.name,
          item.id = payload.id
        }
      })
    },

    UPDATE_BOARD(state, payload) {
      state.board = payload
    }
  }
}