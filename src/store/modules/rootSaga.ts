import { all } from 'redux-saga/effects'
import auth from './auth/sagas'
import character from './character/sagas'

export default function* rootSaga() {
  return yield all([auth, character])
}
