import { applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './src/reducers'
import {persistedState} from './localStorage'

const middleware = applyMiddleware(thunk, logger());

export default createStore(reducer, persistedState, middleware);