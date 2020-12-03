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
