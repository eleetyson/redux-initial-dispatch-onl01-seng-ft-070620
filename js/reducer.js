let state; // declare but don't assign state

// only need a default argument to set initial state
function changeState(state={count: 0}, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state
  }
}

function dispatch(action) {
  state = changeState(state, action)
  render()
}

function render() {
  document.body.textContent = state.count
}

// dispatching actions of '@@INIT' and 'INCREASE_COUNT'
dispatch({ type: '@@INIT' }) //=> { count: 0 }
dispatch({ type: 'INCREASE_COUNT' }) //=> { count: 1 }
