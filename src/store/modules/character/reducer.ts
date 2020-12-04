import { CharacterAction, CharacterState } from './types'

const initialState: CharacterState = {
  loadingSignInRequest: false,
  error: false,
  characters: [],
  totalPages: 0
}

export default function auth(
  state = initialState,
  action: CharacterAction
): CharacterState {
  switch (action.type) {
    case '@character/GET_CHARACTERS':
      console.log('entrou no switch case')
      return {
        ...state,
        loadingSignInRequest: true
      }
    case '@character/GET_CHARACTERS_SUCESS':
      console.log(
        'entrou no reducer: ' + JSON.stringify(action.payload.characters)
      )
      console.log('entrou no reducer: ' + action.payload.totalPages)
      return {
        ...state,
        loadingSignInRequest: false,
        characters: action.payload.characters,
        totalPages: action.payload.totalPages
      }
    case '@character/GET_CHARACTERS_FAILURE':
      return {
        ...state,
        loadingSignInRequest: false,
        error: true
      }
    default:
      return state
  }
}
