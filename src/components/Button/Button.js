import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { color, typography, space } from 'styled-system'
import { Button as ButtonExternal } from 'react-bootstrap'

const ButtonStyled = styled(ButtonExternal)`
  &&& {
    height: ${(props) =>
      (props.height && props.height) || (props.size === 'xs' && '36px') || (props.size === 'sm' && '42px') || '54px'};
    width: ${(props) =>
      (props.fluid && '100%') ||
      (props.width && props.width) ||
      (props.size === 'xs' && '120px') ||
      (props.size === 'sm' && '148px') ||
      '180px'};
    border-radius: 0;
    font-family: ${(props) => props.theme.fonts.semiBold};
    font-size: ${(props) => (props.size === 'xs' && '12px') || (props.size === 'sm' && '14px') || '14px'};
    font-weight: 600;
    background-color: ${(props) =>
      (props.disabled && '#fff') ||
      (props.error && props.theme.colors.error) ||
      (props.success && props.theme.colors.success) ||
      props.bgColor};
    color: #fff;
    cursor: pointer;

    ${color}
    ${typography}
    ${space}

    :disabled {
      &&& {
        background-color: '#c4c4c4';
        cursor: not-allowed;
      }
    }
  }
`

const Button = ({ children, disabled, type, fluid, success, error, onClick, ...props }) => {
  return (
    <ButtonStyled
      {...props}
      fluid={fluid ? 'true' : null}
      success={success ? 'true' : null}
      error={error ? 'true' : null}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  disabled: false,
  size: 'md',
  type: 'button',
  success: false,
  error: false,
  fluid: false
}

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
  width: PropTypes.string,
  height: PropTypes.string,
  fluid: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool
}

export default withTheme(Button)
