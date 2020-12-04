import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../store/createStore'
import { character } from './types'
import { Ul, Div, Li, H1 } from './styles'
import ReactPaginate from 'react-paginate'
import './style.css'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Home() {
  const { characters } = useSelector((state: StoreState) => state.auth)
  const dispatch = useDispatch()

  console.log(characters)
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
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={() => {
          console.log('Entrou aqui ')
        }}
        containerClassName={'pagination'}
        /* subContainerClassName={'pages pagination'} */
        activeClassName={'active'}
      />
    </Div>
  )
}
