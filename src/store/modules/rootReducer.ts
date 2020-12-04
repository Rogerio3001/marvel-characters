import { combineReducers } from 'redux'
import auth from './auth/reducer'
import character from './character/reducer'
import { StoreState } from '../createStore'

export default combineReducers<StoreState>({
  auth,
  character
})
