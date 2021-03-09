import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Button, Title } from '../../components'

const HomePage = ({ history }) => {
  return (
    <Wrapper width="400px">
      <Title title="Bowling 2D" uppercase center />
      <Button fluid success mt="60px" onClick={() => history.push(`/login`)}>
        New game
      </Button>
    </Wrapper>
  )
}

HomePage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
}

export default HomePage
