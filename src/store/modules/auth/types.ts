import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type AuthAction = ActionType<typeof actions>

export interface AuthState {
  readonly loadingSignInRequest: boolean
  readonly isSignedIn: boolean
  readonly error: boolean
  readonly characters: any
  readonly privateKey: null | string
  readonly publicKey: null | string
}
