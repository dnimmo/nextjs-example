import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const startingState = {
  loggedIn: false
}

export const actionTypes = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT'
}

export const reducer = 
  (state = startingState, action) => {
    switch (action.type) {
      case actionTypes.LOG_IN:
        return { ...state, loggedIn: true }
      case actionTypes.LOG_OUT:
        return { ...state, loggedIn: false }
      default:
        return state
    }
  }

export const logIn =
  () => dispatch({ type: actionTypes.LOG_IN })

export const logOut =
  () => dispatch({ type: actionTypes.LOG_OUT })

export const initialStore = 
  (initialState = startingState) => (
    createStore(
      reducer, 
      initialState, 
      composeWithDevTools(applyMiddleware(thinkMiddleware))
    )
  )