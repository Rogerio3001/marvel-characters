import { AuthAction, AuthState } from './types'

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,
  error: false,
  characters: []
}

export default function auth(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true
      }
    case '@auth/SIGN_IN_SUCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true,
        characters: action.payload.characters
      }
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        loadingSignInRequest: false,
        error: true
      }
    default:
      return state
  }
}
