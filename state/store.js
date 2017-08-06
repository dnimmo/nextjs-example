import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import nextConnectRedux from 'next-connect-redux'

const startingState = {
  loggedIn: false
}

export const actionTypes = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
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
  () => ({ type: actionTypes.LOG_IN })

export const logOut =
  () => ({ type: actionTypes.LOG_OUT })

export const initialStore = 
  (initialState = startingState) => (
    createStore(
      reducer, 
      initialState, 
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  )

export default nextConnectRedux(initialStore)

