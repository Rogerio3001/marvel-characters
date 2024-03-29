import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { takeLatest, call, put, all } from 'redux-saga/effects'

import api, { endPoints } from '../../../services/api'
import md5 from 'md5'

//Get ALL character
export function* characters({
  payload
}: ActionType<typeof actions.charactersRequest>) {
  try {
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

//Get ONE character
export function* character({
  payload
}: ActionType<typeof actions.characterRequest>) {
  try {
    const { offset, privateKey, publicKey, id } = payload

    const ts = new Date().getTime()
    const toHash = ts + privateKey + publicKey
    const hash = md5(toHash.toString())

    const { data } = yield call(api.get, `/characters/${id}`, {
      params: {
        ts,
        apikey: publicKey,
        hash,
        offset,
        limit: 20
      }
    })
    yield put(
      actions.characterSucess({
        characters: data.data.results
      })
    )
  } catch (err) {
    yield put(actions.characterFailure())
  }
}

//Get ONE character
export function* comics({ payload }: ActionType<typeof actions.comicsRequest>) {
  try {
    const { privateKey, publicKey, id } = payload

    const ts = new Date().getTime()
    const toHash = ts + privateKey + publicKey
    const hash = md5(toHash.toString())

    const { data } = yield call(api.get, `/characters/${id}/comics`, {
      params: {
        ts,
        apikey: publicKey,
        hash,
        limit: 20
      }
    })
    yield put(
      actions.comicsSucess({
        comics: data.data.results
      })
    )
  } catch (err) {
    yield put(actions.comicsFailure())
  }
}

export default all([
  takeLatest('@character/GET_CHARACTERS', characters),
  takeLatest('@character/GET_CHARACTER_ID', character),
  takeLatest('@character/GET_COMICS', comics)
])
