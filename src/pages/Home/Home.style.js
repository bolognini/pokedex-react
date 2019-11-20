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

  &::placeholder {
    color: #E5E5E5;
  }

  ${breakpoint.mobile} {
    width: 80%;
  }
`
