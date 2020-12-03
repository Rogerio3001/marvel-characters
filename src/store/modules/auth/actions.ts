import { action } from 'typesafe-actions'

type signinRequestParams = {
  privateKey: string
  publicKey: string
}

export function signinRequest({ privateKey, publicKey }: signinRequestParams) {
  return action('@auth/SIGN_IN_REQUEST', {
    privateKey,
    publicKey
  })
}

export function signinSucess({ characters }: { characters: [] }) {
  return action('@auth/SIGN_IN_SUCESS', {
    characters
  })
}

export function signinFailure() {
  return action('@auth/SIGN_IN_FAILURE')
}
