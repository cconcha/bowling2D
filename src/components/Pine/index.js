import React from 'react'
import styled from 'styled-components'

const PineStyled = styled.div`
  background: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: felx;
  align-self: center;
  margin-left: 20px;
`

const EmptyPineStyled = styled.div`
  background: transparent;
  height: 30px;
`

const Pine = ({ empty }) => {
  return !empty ? <PineStyled /> : <EmptyPineStyled />
}

export default Pine
