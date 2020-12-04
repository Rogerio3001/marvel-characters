import React, { useEffect } from 'react'

import { character } from './types'

import { Ul, Div, Li, H1 } from './styles'

import ReactPaginate from 'react-paginate'
import './style.css'

import { StoreState } from '../../store/createStore'
import { useDispatch, useSelector } from 'react-redux'
import { charactersRequest } from '../../store/modules/character/actions'

export default function Home() {
  const { privateKey, publicKey } = useSelector(
    (state: StoreState) => state.auth
  )

  const { totalPages, characters } = useSelector(
    (state: StoreState) => state.character
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      charactersRequest({
        privateKey: privateKey || 'Nulo',
        publicKey: publicKey || 'Nulo',
        offset: 0
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pages = Math.ceil(totalPages / 20)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handlePageClick(e: any) {
    // TODO: Encontrar uma abordagem melhor para essa situação
    dispatch(
      charactersRequest({
        privateKey: privateKey || 'Nulo',
        publicKey: publicKey || 'Nulo',
        offset: e.selected * 20
      })
    )
  }

  return (
    <Div>
      <H1>Characters List</H1>
      <Ul>
        {characters.map((character: character, index: number) => (
          <Li key={index}>
            <img
              src={
                character.thumbnail.path +
                '/standard_xlarge.' +
                character.thumbnail.extension
              }
              alt="Characters"
            />
            <h2>{character.name}</h2>
          </Li>
        ))}
      </Ul>
      <div id="#pagination">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pages}
          marginPagesDisplayed={5}
          pageRangeDisplayed={10}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
        />
      </div>
    </Div>
  )
}
