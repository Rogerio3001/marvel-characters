import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #005a9c;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 3.4rem;
`
const Img = styled.img`
  flex-grow: 1;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Div = styled.div`
  margin-top: 10%;
  width: 50%;
  margin-left: 25%;
`

const Input = styled.input`
  margin-bottom: 2rem;
  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;
  position: relative;
  transition: 0.3s all;
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  text-align: center;
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
    background-color: rgba(0, 90, 156, 0.7);
  }
`

export { H1, Img, Form, Div, Input, Button }
