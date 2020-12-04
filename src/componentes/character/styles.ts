import styled from 'styled-components'

const Div = styled.div`
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
export { Div }
