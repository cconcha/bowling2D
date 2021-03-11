import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Wrapper, Input, Button, Title, Box } from '../../components'
import PlayerContext from '../../context/PlayerContext'

const LoginPage = ({ history }) => {
  const { players, setPlayers } = useContext(PlayerContext)

  return (
    <Wrapper width="400px" mt="100px">
      <Title title="Bowling 2D" uppercase center />
      <Formik
        initialValues={{
          playerOne: '',
          playerTwo: ''
        }}
        validationSchema={Yup.object({
          playerOne: Yup.string().required('Player 1 is required'),
          playerTwo: Yup.string().required('Player 2 is required')
        })}
        onSubmit={(values, actions) => {
          setPlayers(values)
          actions.resetForm()
          history.push(`/game`)
        }}
      >
        {({ errors, touched, ...props }) => (
          <Form>
            <Input
              size="sm"
              label="Player 1"
              name="playerOne"
              value={props.values.playerOne}
              error={touched.playerOne && errors.playerOne}
              onChange={props.handleChange}
            />
            <Box m="20px 0" />
            <Input
              size="sm"
              label="Player 2"
              name="playerTwo"
              value={props.values.playerTwo}
              error={touched.playerTwo && errors.playerTwo}
              onChange={props.handleChange}
            />
            <Button fluid success mt="60px" type="submit">
              Start
            </Button>
            <Button fluid error mt="20px" onClick={() => history.push(`/`)}>
              Back
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}
LoginPage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
}

export default LoginPage
