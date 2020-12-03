import React, { useState } from 'react'
import { H1, Form, Div, Input, Button } from './styles'

/* import { RouteComponentProps, navigate } from '@reach/router' */

import api, { endPoints } from '../../services/api'
import md5 from 'md5'

import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../store/createStore'
import { signinRequest } from '../../store/modules/auth/actions'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Signin() {
  const { loadingSignInRequest } = useSelector(
    (state: StoreState) => state.auth
  )
  const dispatch = useDispatch()

  const [publicKey, setPublicKey] = useState('')
  const [privateKey, setPrivate] = useState('')

  /* function handleSubmit(): void {
    const currentDate = new Date()
    const timestamp = currentDate.getTime()
    const toHash = timestamp + privateKey + publicKey
    console.log(toHash.toString())
    const hash = md5(toHash.toString())
    console.log(hash)

    api
      .get(endPoints.CHARACTERS, {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
          offset: 0,
          limit: 20
        }
      })
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err))
    navigate(`/home`)
  } */

  return (
    <Div>
      <H1>Dados de acesso</H1>
      <Form>
        <Input
          type="text"
          name="publicKey"
          defaultValue="Public Key"
          onChange={(e) => setPublicKey(e.target.value)}
        />
        <Input
          type="text"
          name="privateKey"
          defaultValue="Private Key"
          onChange={(e) => setPrivate(e.target.value)}
        />
        <Button
          onClick={() => dispatch(signinRequest({ privateKey, publicKey }))}
        >
          {loadingSignInRequest ? 'Acessar' : 'Carregando'}
        </Button>
      </Form>
    </Div>
  )
}

export default Signin
