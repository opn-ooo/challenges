import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Home from '~containers/Home'
import NoMatch from '~containers/NoMatch'
import Layout from '~components/Layout'
import useTheme from '~hooks/useTheme'

function App() {
    const theme = useTheme()

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Layout>
        </ThemeProvider>
    )
}

export default App
