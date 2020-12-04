import styled from 'styled-components'

const H1 = styled.h1`
  color: #fafafa;
  font-weight: bold;
  font-size: 34px;
`

const Div = styled.div`
  padding: 5rem;
  background-color: #999999;
`
const Li = styled.li`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  border: 5px solid #999999;

  background-color: black;
  cursor: pointer;
  :hover {
    border: 5px solid #005a9c;
    opacity: 0.9;
  }
`
const Ul = styled.ul`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  list-style: none;
`

export { Div, Ul, Li, H1 }
