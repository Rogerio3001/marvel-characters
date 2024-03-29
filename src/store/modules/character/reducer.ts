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
      return {
        ...state,
        loadingSignInRequest: true
      }
    case '@character/GET_CHARACTERS_SUCESS':
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
    case '@character/GET_CHARACTER_ID':
      return {
        ...state,
        loadingSignInRequest: true
      }
    case '@character/GET_CHARACTER_SUCESS_ID':
      return {
        ...state,
        loadingSignInRequest: false,
        characters: action.payload.characters
      }
    case '@character/GET_CHARACTER_FAILURE_ID':
      return {
        ...state,
        loadingSignInRequest: false,
        error: true
      }
    case '@character/GET_COMICS':
      return {
        ...state,
        loadingSignInRequest: true
      }
    case '@character/GET_COMICS_SUCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        comics: action.payload.comics
      }
    case '@character/GET_COMICS_FAILURE':
      return {
        ...state,
        loadingSignInRequest: false,
        error: true
      }
    default:
      return state
  }
}
