import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Input, Button, Title } from '../../components'

const LoginPage = ({ history }) => {
  return (
    <Wrapper width="400px">
      <Title title="Bowling 2D" uppercase center />
      <Input size="sm" label="Player 1" />
      <br />
      <Input size="sm" label="Player 2" />
      <Button fluid success mt="60px">
        Start
      </Button>
      <Button fluid error mt="20px" onClick={() => history.push(`/`)}>
        Back
      </Button>
    </Wrapper>
  )
}
LoginPage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
}

export default LoginPage
