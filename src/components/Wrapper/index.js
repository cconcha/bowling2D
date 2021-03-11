import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { space, layout, position } from 'styled-system'

const ContainerStyled = styled(Container)`
  padding-right: 20px !important;
  padding-left: 20px !important;
  margin: 0 auto;
  &&& {
    ${space}
    ${layout}
    ${position}
  }
`

const Wrapper = ({ children, ...props }) => {
  return <ContainerStyled {...props}>{children}</ContainerStyled>
}

export default Wrapper
