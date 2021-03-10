import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Wrapper, Input, Button, Title } from '../../components'
import PlayerContext from '../../context/PlayerContext'

const LoginPage = ({ history }) => {
  const { players, setPlayers } = useContext(PlayerContext)

  return (
    <Wrapper width="400px">
      <Title title="Bowling 2D" uppercase center />
      <Formik
        initialValues={{
          playerOne: '',
          playerTwo: ''
        }}
        validationSchema={Yup.object({
          playerOne: Yup.string().required('Required'),
          playerTwo: Yup.string().required('Required')
        })}
        onSubmit={(values, actions) => {
          console.log(typeof values)
          setPlayers(values)
          actions.resetForm()
        }}
      >
        {({ errors, status, touched, ...props }) => (
          <Form>
            <Input
              size="sm"
              label="Player 1"
              name="playerOne"
              value={props.values.playerOne}
              onChange={props.handleChange}
              mb="20px"
            />
            <Input
              size="sm"
              label="Player 2"
              name="playerTwo"
              value={props.values.playerTwo}
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
