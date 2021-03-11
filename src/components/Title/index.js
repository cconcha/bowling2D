import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'

const baseStyle = css`
  margin: 0;
  max-width: 100%;
  font-family: ${(props) =>
    (props.bold && props.theme.fonts.bold) ||
    (props.semiBold && props.theme.fonts.semiBold) ||
    props.theme.fonts.regular};
  color: ${(props) => (props.color ? props.color : props.theme.colors.primary)};
  text-transform: ${(props) => (props.uppercase && 'uppercase') || 'none'};
  text-align: ${(props) => {
    if (props.center) return 'center'
    if (props.right) return 'right'
    return 'left'
  }};
`

const TitleStyled = styled.div`
  margin: ${(props) => (props.noMargin ? '0' : '30px 0;')};
  ${space}
`

const H1Styled = styled.h1`
  font-size: 50px;
  ${baseStyle}
`

const H2Styled = styled.h2`
  font-size: 40px;
  ${baseStyle}
`

const H3Styled = styled.h3`
  font-size: 18px;
  ${baseStyle}
`

const Title = ({ title, type, ...props }) => {
  if (type === 'h2') {
    return (
      <TitleStyled {...props}>
        <H2Styled {...props}>{title}</H2Styled>
      </TitleStyled>
    )
  }
  if (type === 'h3') {
    return (
      <TitleStyled {...props}>
        <H3Styled {...props}>{title}</H3Styled>
      </TitleStyled>
    )
  }
  return (
    <TitleStyled {...props}>
      <H1Styled {...props}>{title}</H1Styled>
    </TitleStyled>
  )
}

Title.defaultProps = {
  type: 'h1',
  noMargin: null,
  right: null,
  center: null,
  color: null,
  bold: null,
  semiBold: null,
  uppercase: null
}

Title.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3']),
  title: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Array),
    PropTypes.element
  ]).isRequired,
  noMargin: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  bold: PropTypes.bool,
  semiBold: PropTypes.bool,
  uppercase: PropTypes.bool
}

export default Title
