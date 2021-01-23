import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Home from '~containers/Home'
import NoMatch from '~containers/NoMatch'
import GlobalStyle from '~components/GlobalStyle'
import Header from '~components/Header'
import useTheme from '~hooks/useTheme'

function App() {
    const theme = useTheme()

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Header/>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </main>
        </ThemeProvider>
    )
}

export default App
