import { applyMiddleware, createStore, Middleware, Reducer } from 'redux'
import { AuthAction, AuthState } from './modules/auth/types'
import { CharacterAction, CharacterState } from './modules/character/types'
import { composeWithDevTools } from 'redux-devtools-extension'

export interface StoreState {
  auth: AuthState
  character: CharacterState
}

export type StoreAction = AuthAction | CharacterAction

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares))
  return createStore(reducers, enhancer)
}
