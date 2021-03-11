import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, ScoreTable, GameBoard, Button, Box } from '../../components'
import PlayersContext from '../../context/PlayerContext'
import styled from 'styled-components'

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-column-gap: 80px;
  align-items: center;
`

const GamePage = ({ history, ...props }) => {
  const [playerState, setPlayerState] = useState([1, 0])
  const [activeColor, setActiveColor] = useState()
  const [play, setPlay] = useState(false)
  const [strike, setStrike] = useState(false)

  const pines = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0]
  ]
  const [pinesArray, setPinesArray] = useState(pines)

  const playerColors = useMemo(() => {
    return ['#049be2', '#ffa200']
  }, [])

  useEffect(() => {
    setActiveColor(playerColors[playerState.indexOf(1)] || playerColors[playerState.indexOf(2)])
  }, [playerState, playerColors])

  const handlePlay = () => {
    setPlay(!play)
    let pinesUp
    setTimeout(() => {
      pinesUp = setNewPinesArray()
    }, 1000)
    setTimeout(() => {
      setNewPlayerStates(pinesUp)
    }, 2000)
  }

  const setNewPinesArray = () => {
    let newPinesArray = pinesArray.map((el) => el.map((pin) => pin * Math.round(Math.ceil(Math.random() * 5) / 10)))
    let pinesUp = newPinesArray.map((el) => el.filter((pin) => pin === 1).length).reduce((cur, acc) => cur + acc)
    setPinesArray(newPinesArray)
    if (pinesUp === 0 && playerState[playerState.indexOf(1)]) setStrike(true)

    return pinesUp
  }

  const setNewPlayerStates = (pinesUp) => {
    let newPlayersState = new Array(playerState.length).fill(0)

    // This way to accept more players in the future
    if (playerState[playerState.indexOf(1)] && pinesUp > 0) newPlayersState[playerState.indexOf(1)] = 2
    else if (playerState[playerState.indexOf(2)]) {
      if (playerState[playerState.indexOf(2) + 1] !== undefined) newPlayersState[playerState.indexOf(2) + 1] = 1
      else newPlayersState[0] = 1
      setPinesArray(pines)
    } else if (playerState[playerState.indexOf(1)] && pinesUp === 0) {
      if (playerState[playerState.indexOf(1) + 1] !== undefined) newPlayersState[playerState.indexOf(1) + 1] = 1
      else newPlayersState[0] = 1
      setPinesArray(pines)
    }

    setPlayerState(newPlayersState)
    setStrike(false)
    setPlay(false)
  }

  return (
    <PlayersContext.Consumer>
      {(context) => {
        return (
          context?.players && (
            <Wrapper mt="50px">
              <GridStyled>
                <Box>
                  <ScoreTable
                    playerName={context.players.playerOne}
                    playerColor={playerColors[0]}
                    active={playerState[0] > 0}
                  ></ScoreTable>
                  <Box m="20px 0" />
                  <GameBoard activeColor={activeColor} play={play} strike={strike} pinesArray={pinesArray} />
                  <Box m="20px 0" />
                  <ScoreTable
                    playerName={context.players.playerTwo}
                    playerColor={playerColors[1]}
                    active={playerState[1] > 0}
                  ></ScoreTable>
                </Box>
                {!play && (
                  <Button bgcolor={activeColor} height="300px" fluid onClick={() => handlePlay()} disabled={play}>
                    Play
                  </Button>
                )}
              </GridStyled>
            </Wrapper>
          )
        )
      }}
    </PlayersContext.Consumer>
  )
}

GamePage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
}

export default GamePage
