import { createContext } from 'react'

const PlayerContext = createContext({
  players: {},
  setPlayers: () => {},
  scorePlayers: [[], []],
  setScorePlayers: () => {}
})

export default PlayerContext
