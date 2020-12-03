import React from 'react'
import Signin from './screens/signin'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <Signin />
    </Provider>
  )
}

export default App
