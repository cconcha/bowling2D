import React from 'react'
import Routes from './routes'
import { global as GlobalStyle, theme } from './styles'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    // <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Routes />
      </>
    </ThemeProvider>
    // </Provider>
  )
}

export default App
