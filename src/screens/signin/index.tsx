import React, { useState } from 'react'
import { H1, Div, Input, Button } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../store/createStore'
import { signinRequest } from '../../store/modules/auth/actions'

import { useHistory } from 'react-router-dom'

function Signin() {
  const { loadingSignInRequest, isSignedIn, error, characters } = useSelector(
    (state: StoreState) => state.auth
  )
  const dispatch = useDispatch()
  const history = useHistory()

  const [publicKey, setPublicKey] = useState('')
  const [privateKey, setPrivate] = useState('')

  console.log('loadingSignInRequest: ' + loadingSignInRequest)
  console.log('isSignedIn: ' + isSignedIn)
  console.log('error: ' + error)
  console.log('characters: ' + characters)

  isSignedIn && history.push('/home')

  return (
    <Div>
      <H1>Dados de acesso</H1>
      <Input
        type="text"
        name="publicKey"
        placeholder="Public Key"
        onChange={(e) => setPublicKey(e.target.value)}
      />
      <Input
        type="text"
        name="privateKey"
        placeholder="Private Key"
        onChange={(e) => setPrivate(e.target.value)}
      />
      <Button
        onClick={() => dispatch(signinRequest({ privateKey, publicKey }))}
      >
        {loadingSignInRequest ? 'Carregando' : 'Acessar'}
      </Button>
    </Div>
  )
}

export default Signin
