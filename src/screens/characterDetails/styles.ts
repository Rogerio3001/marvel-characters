import styled from 'styled-components'

const CharacterContainer = styled.div`
  width: 30%;
  margin-right: 5rem;
`
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 5rem;
  background-color: #999999;
  color: white;
`

const ComicsContainer = styled.div`
  display: flex;
  width: 25rem;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
`

const Ul = styled.ul`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  list-style: none;
  margin-bottom: 10rem;
`

const Button = styled.button`
  width: 40%;
  color: #ffffff;
  height: 5.6rem;
  border-radius: 1rem;
  position: relative;
  background-color: rgba(0, 90, 156, 0.6);
  transition: 0.5s all;
  font-size: 16px;
  font-weight: 400;

  :hover {
    cursor: pointer;
    background-color: rgba(0, 90, 156, 0.7);
  }
`

export {
  CharacterContainer,
  Header,
  DescriptionContainer,
  ComicsContainer,
  Ul,
  Button
}
