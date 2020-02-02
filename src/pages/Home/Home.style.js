import styled from 'styled-components'
import { breakpoint } from '../../components/Layout'

export default styled.input`
  width: 50%;
  padding-bottom: 8px;
  justify-self: center;
  border: none;
  background: none;
  border-bottom: 1px solid #E5E5E5;
  text-align: center;
  font-size: 24px;
  font-style: italic;
  font-weight: lighter;
  color: #E5E5E5;
  outline: none;
  transition: 0.2s ease-out;

  &::placeholder {
    color: #E5E5E5;
  }

  &:focus {
    border-bottom-width: 3px;
    padding: 3px;
    transition: 0.2s ease-in;
  }

  ${breakpoint.mobile} {
    width: 80%;
  }
`
