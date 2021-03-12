import React, { useEffect, useMemo, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Wrapper, ScoreTable, GameBoard, Button, Box } from '../../components'
import PlayerContext from '../../context/PlayerContext'
import styled from 'styled-components'

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-column-gap: 80px;
  align-items: center;
`

const GamePage = ({ history }) => {
  const { scorePlayers, setScorePlayers } = useContext(PlayerContext)
  const [playerState, setPlayerState] = useState([1, 0])
  const [activeColor, setActiveColor] = useState()
  const [activePlayer, setActivePlayer] = useState()
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
    return ['#ffa200', '#049be2']
  }, [])

  useEffect(() => {
    setActiveColor(
      playerColors[playerState.indexOf(1)] ||
        playerColors[playerState.indexOf(2)] ||
        playerColors[playerState.indexOf(3)]
    )
    setActivePlayer(
      playerState.indexOf(1) > -1
        ? playerState.indexOf(1)
        : playerState.indexOf(2) > -1
        ? playerState.indexOf(2)
        : playerState.indexOf(3)
    )
  }, [playerState, playerColors])

  useEffect(() => {
    if (
      scorePlayers.map((playerScores) => playerScores.length === 21).filter((el) => el === true).length ===
      scorePlayers.length
    ) {
      console.log('winner')
      // setScores(scorePlayers)
      // history.push('/winner')
    }
  }, [scorePlayers])

  const handlePlay = () => {
    setPlay(!play)
    let pinesUp
    setTimeout(() => {
      pinesUp = setNewPinesArray()
      setTimeout(() => {
        setNewPlayerStates(pinesUp)
      }, 1000)
    }, 1000)
  }

  const setNewPinesArray = () => {
    let newPinesArray = pinesArray.map((el) => el.map((pin) => pin * Math.round(Math.ceil(Math.random() * 5) / 10)))
    let pinesUp = newPinesArray.map((el) => el.filter((pin) => pin === 1).length).reduce((cur, acc) => cur + acc)
    setPinesArray(newPinesArray)
    if (pinesUp === 0 && playerState[playerState.indexOf(1)]) setStrike(true)
    setNewScores(10 - pinesUp)

    return pinesUp
  }

  const setNewScores = (score) => {
    let array = [...scorePlayers]

    if (playerState[activePlayer] === 1) {
      array[activePlayer].push(score)
      if (score === 10 && array[activePlayer].length < 18) array[activePlayer].push(0)
    } else if (playerState[activePlayer] === 2) {
      if (array[activePlayer].length >= 18 && array[activePlayer][array[activePlayer].length - 1] === 10) {
        array[activePlayer].push(score)
      } else {
        array[activePlayer].push(score - array[activePlayer][array[activePlayer].length - 1])
      }
    } else if (playerState[activePlayer] === 3) {
      array[activePlayer].push(score)
    }
    console.log(playerState[activePlayer])
    console.log(array[activePlayer])
    setScorePlayers(array)
  }

  const setNewPlayerStates = (pinesUp) => {
    let newPlayersState = new Array(playerState.length).fill(0)
    let playerShotOne = playerState[playerState.indexOf(1)]
    let playerShotOneIndex = playerState.indexOf(1)
    let playerShotTwoIndex = playerState.indexOf(2)

    // To accept more players in the future
    if (scorePlayers[playerShotTwoIndex] && scorePlayers[playerShotTwoIndex].length > 18) {
      newPlayersState[playerShotTwoIndex] = 3
      console.log()
      // if (scorePlayers[playerShotTwoIndex][scorePlayers[playerShotTwoIndex].length - 1] === 10) {
      setPinesArray(pines)
      // }
    } else if (playerState[playerState.indexOf(3)]) {
      if (playerState[playerState.indexOf(3) + 1] !== undefined) newPlayersState[playerState.indexOf(3) + 1] = 1
      else newPlayersState[0] = 1
      setPinesArray(pines)
    } else if (playerShotOne && pinesUp === 0 && scorePlayers[playerShotOneIndex].length > 18) {
      newPlayersState[playerShotOneIndex] = 2
      setPinesArray(pines)
    } else if (playerShotOne && pinesUp > 0) {
      newPlayersState[playerShotOneIndex] = 2
    } else if (playerState[playerShotTwoIndex]) {
      if (playerState[playerShotTwoIndex + 1] !== undefined) newPlayersState[playerShotTwoIndex + 1] = 1
      else newPlayersState[0] = 1
      setPinesArray(pines)
    } else if (playerShotOne && pinesUp === 0) {
      if (playerState[playerShotOneIndex + 1] !== undefined) newPlayersState[playerShotOneIndex + 1] = 1
      else newPlayersState[0] = 1
      setPinesArray(pines)
    }

    setPlayerState(newPlayersState)
    setStrike(false)
    setPlay(false)
  }

  return (
    <PlayerContext.Consumer>
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
                    scorePlayer={scorePlayers[0]}
                  ></ScoreTable>
                  <Box m="20px 0" />
                  <GameBoard activeColor={activeColor} play={play} strike={strike} pinesArray={pinesArray} />
                  <Box m="20px 0" />
                  <ScoreTable
                    playerName={context.players.playerTwo}
                    playerColor={playerColors[1]}
                    active={playerState[1] > 0}
                    scorePlayer={scorePlayers[1]}
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
    </PlayerContext.Consumer>
  )
}

GamePage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
}

export default GamePage
