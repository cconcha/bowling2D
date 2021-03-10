import { createContext } from 'react'

const PlayerContext = createContext({
  players: {},
  setPlayers: () => {}
})
export default PlayerContext
