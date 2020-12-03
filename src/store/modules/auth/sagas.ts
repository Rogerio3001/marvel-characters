import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { takeLatest, call, put, all } from 'redux-saga/effects'

import api, { endPoints } from '../../../services/api'
import md5 from 'md5'

export function* signIn({ payload }: ActionType<typeof actions.signinRequest>) {
  try {
    const { privateKey, publicKey } = payload

    const ts = new Date().getTime()
    const toHash = ts + privateKey + publicKey
    const hash = md5(toHash.toString())

    const { data } = yield call(api.get, endPoints.CHARACTERS, {
      params: {
        ts,
        apikey: publicKey,
        hash,
        offset: 0,
        limit: 20
      }
    })

    yield put(actions.signinSucess({ characters: data.data }))
  } catch (err) {
    yield put(actions.signinFailure())
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)])
