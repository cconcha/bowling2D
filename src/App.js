import React, { useState } from 'react'
import Routes from './routes'
import { global as GlobalStyle, theme } from './styles'
import { ThemeProvider } from 'styled-components'
import PlayerContext from './context/PlayerContext'

const App = () => {
  const [players, setPlayers] = useState({})
  const value = { players, setPlayers }

  return (
    <PlayerContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Routes />
        </>
      </ThemeProvider>
    </PlayerContext.Provider>
  )
}

export default App
