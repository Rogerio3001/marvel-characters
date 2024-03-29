/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { StoreState } from '../../store/createStore'
import {
  characterRequest,
  comicsRequest
} from '../../store/modules/character/actions'

import Character from '../../componentes/character'
import {
  CharacterContainer,
  Header,
  DescriptionContainer,
  ComicsContainer,
  Ul,
  Button
} from './styles'

export default function CharacterDetails() {
  const { privateKey, publicKey } = useSelector(
    (state: StoreState) => state.auth
  )
  const { characters, comics } = useSelector(
    (state: StoreState) => state.character
  )
  const character = characters[0]
  const { id }: { id: string } = useParams()
  const history = useHistory()

  const dispatch = useDispatch()

  function handleBack() {
    history.push('/home')
  }

  useEffect(() => {
    dispatch(
      characterRequest({
        privateKey: privateKey || 'Nulo',
        publicKey: publicKey || 'Nulo',
        offset: 0,
        id
      })
    )
    dispatch(
      comicsRequest({
        privateKey: privateKey || 'Nulo',
        publicKey: publicKey || 'Nulo',
        offset: 0,
        id
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Header>
        <CharacterContainer>
          {character && <Character character={character} />}
        </CharacterContainer>
        <DescriptionContainer>
          <h1>{character?.name}</h1>
          <h1>{character?.description}</h1>
        </DescriptionContainer>
        <Button onClick={() => handleBack()}>Voltar</Button>
      </Header>
      <Ul>
        {comics?.map((comic: any) => (
          <ComicsContainer key={comic}>
            <img
              src={
                comic.thumbnail.path +
                '/standard_xlarge.' +
                comic.thumbnail.extension
              }
              alt={'comic-' + comic.name}
            />
            <h1>{comic.title}</h1>
          </ComicsContainer>
        ))}
      </Ul>
    </>
  )
}
