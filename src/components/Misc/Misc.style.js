import styled from 'styled-components'

export const Topic = styled.div`
  padding-bottom: 24px;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  align-items: center;
`

export const CaptalizeInfo = styled.span`
  text-transform: capitalize;
`

export const CryWrapper = styled.strong`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Cry = styled.audio`
  display: none;
`

export const CryButton = styled.button`
  background: none;
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 20px solid #2F2D3B;
  border-right: none;
  border-bottom: 10px solid transparent;
  margin-left: 16px;
`
