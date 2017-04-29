import { applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import combineReducers from './reducers'
import {persistedState} from './localStorage'

const middleware = applyMiddleware(thunk, logger());

export default createStore(combineReducers, persistedState, middleware);