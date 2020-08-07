export function saveState (store) {
  store.subscribe(
    (mutation, state) => {
      localStorage.setItem(
        'board',
        JSON.stringify(state.board.board)
      )
    }
  )
}
