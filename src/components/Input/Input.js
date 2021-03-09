import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, withTheme } from 'styled-components'
import { border, color } from 'styled-system'

const sizeStyle = {
  sm: css`
    padding: 10px 20px;
    font-size: 12px;
    line-height: 1.5;
    height: 42px;
  `
}

const WrapperInput = styled.div`
  position: relative;
  text-align: left;
`

const InputStyled = styled.input`
  display: block;
  cursor: text;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  border-color: ${(props) => (props.error ? props.theme.colors.error : '#cacaca')};
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => (props.error ? 'rgba(224, 82, 82, 0.1);' : '#fefefe')};

  ${(props) => props.size && sizeStyle[props.size] && sizeStyle[props.size]};

  :focus {
    outline: 0px;
    border-color: ${(props) => (props.error ? props.theme.colors.error : props.theme.colors.success)};
  }

  &&&::placeholder {
    color: 'secondary';
  }

  ${border}
  ${color}
`

const LabelStyled = styled.label`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.semiBold};
  margin-left: 20px;
`

const ErrorMessage = styled.small`
  color: 'error';
  margin-left: 20px;
`

const Input = ({ label, size, error, ...props }) => {
  return (
    <WrapperInput>
      {label && <LabelStyled>{label}</LabelStyled>}
      <InputStyled {...props} size={size} error={error} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </WrapperInput>
  )
}

Input.defaultProps = {
  size: 'sm',
  label: null,
  error: null
}

Input.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  error: PropTypes.string
}

export default withTheme(Input)
