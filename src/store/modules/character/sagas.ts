import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { takeLatest, call, put, all } from 'redux-saga/effects'

import api, { endPoints } from '../../../services/api'
import md5 from 'md5'

export function* characters({
  payload
}: ActionType<typeof actions.charactersRequest>) {
  try {
    console.log('vai fazer a request')
    const { offset, privateKey, publicKey } = payload

    const ts = new Date().getTime()
    const toHash = ts + privateKey + publicKey
    const hash = md5(toHash.toString())

    const { data } = yield call(api.get, endPoints.CHARACTERS, {
      params: {
        ts,
        apikey: publicKey,
        hash,
        offset,
        limit: 20
      }
    })
    yield put(
      actions.charactersSucess({
        characters: data.data.results,
        totalPages: data.data.total
      })
    )
  } catch (err) {
    yield put(actions.charactersFailure())
  }
}

export default all([takeLatest('@character/GET_CHARACTERS', characters)])
