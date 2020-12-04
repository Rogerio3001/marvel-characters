import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { StoreState } from '../../store/createStore'
import { characterRequest } from '../../store/modules/character/actions'

export default function CharacterDetails() {
  const { privateKey, publicKey } = useSelector(
    (state: StoreState) => state.auth
  )

  const { characters } = useSelector((state: StoreState) => state.character)
  const { id }: { id: string } = useParams()
  const dispatch = useDispatch()

  console.log(characters)

  useEffect(() => {
    dispatch(
      characterRequest({
        privateKey: privateKey || 'Nulo',
        publicKey: publicKey || 'Nulo',
        offset: 0,
        id
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  return <h1>id: {id}</h1>
}
