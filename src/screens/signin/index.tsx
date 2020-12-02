import React from 'react'
import { H1, Form, Div, Input, Button } from './styles'

function Signin() {
  return (
    <Div>
      <H1>Dados de acesso</H1>
      <Form /* onSubmit={handleSubmit} */>
        <Input type="text" name="publicKey" defaultValue="Public Key" />
        <Input type="text" name="privateKey" defaultValue="Private Key" />
        <Button type="submit" /* disabled={isSubmitting || errors} */>
          Acessar
        </Button>
      </Form>
    </Div>
  )
}

export default Signin
