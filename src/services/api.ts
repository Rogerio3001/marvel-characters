import axios from 'axios'

export default axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/'
})

const endPoints = {
  CHARACTERS: '/characters',
  CHARACTERS_ID: (id: string) => `/characters/${id}`
}

export { endPoints }
