import styled from 'styled-components'
import { breakpoint } from '../Layout'

export const Topic = styled.div`
  padding-bottom: 24px;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  align-items: center;

  ${breakpoint.mobile} {
    display: flex;
    justify-content: center;
    font-size: 24px;
  }

  strong {
    margin-right: 16px;
  }
`

export const InfoWrapper = styled.div`
  ${breakpoint.mobile} {
    & > strong:first-child {
      display: none;
    }

    & > ${Topic}:nth-of-type(4) {
      display: none;
    }
  }
`

export const Description = styled.div`
  padding: 24px 0 32px 0;

  ${breakpoint.mobile} {
    text-align: center;
    font-size: 18px;
  }
`
