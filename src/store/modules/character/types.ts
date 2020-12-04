import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type CharacterAction = ActionType<typeof actions>

export interface CharacterState {
  readonly loadingSignInRequest: boolean
  readonly error: boolean
  readonly characters: any
  readonly totalPages: number
  readonly id?: string
  readonly comics?: any
}
