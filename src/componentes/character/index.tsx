import React from 'react'
import { character } from '../../screens/Home/types'

import { Div } from './styles'

export default function Character({
  character,
  handleImageTouch
}: {
  character: character
  handleImageTouch: any
}) {
  return (
    <Div>
      <img
        src={
          character.thumbnail.path +
          '/standard_xlarge.' +
          character.thumbnail.extension
        }
        alt={'character-' + character.name}
        onClick={() => handleImageTouch(character.id)}
      />
      <h2>{character.name}</h2>
    </Div>
  )
}
