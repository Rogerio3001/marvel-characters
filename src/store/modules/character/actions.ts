import { action } from 'typesafe-actions'

export type charactersRequestParams = {
  privateKey: string
  publicKey: string
  offset: number
}

export function charactersRequest({
  privateKey,
  publicKey,
  offset
}: charactersRequestParams) {
  return action('@character/GET_CHARACTERS', {
    privateKey,
    publicKey,
    offset
  })
}

export function charactersSucess({
  characters,
  totalPages
}: {
  characters: []
  totalPages: number
}) {
  return action('@character/GET_CHARACTERS_SUCESS', {
    characters,
    totalPages
  })
}

export function charactersFailure() {
  return action('@character/GET_CHARACTERS_FAILURE')
}
