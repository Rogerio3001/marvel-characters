import { action } from 'typesafe-actions'

export type charactersRequestParams = {
  privateKey: string
  publicKey: string
  offset: number
  id?: string
}

//Sending request to get all characters
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

//sending requesto to get only one character
export function characterRequest({
  privateKey,
  publicKey,
  offset,
  id
}: charactersRequestParams) {
  return action('@character/GET_CHARACTER_ID', {
    privateKey,
    publicKey,
    offset,
    id
  })
}

export function characterSucess({ characters }: { characters: [] }) {
  return action('@character/GET_CHARACTER_SUCESS_ID', {
    characters
  })
}

export function characterFailure() {
  return action('@character/GET_CHARACTER_FAILURE_ID')
}

//sending reqeuest to get commics

export function comicsRequest({
  privateKey,
  publicKey,
  id
}: charactersRequestParams) {
  return action('@character/GET_COMICS', {
    privateKey,
    publicKey,
    id
  })
}

export function comicsSucess({ comics }: { comics: [] }) {
  return action('@character/GET_COMICS_SUCESS', {
    comics
  })
}

export function comicsFailure() {
  return action('@character/GET_COMICS_FAILURE')
}
