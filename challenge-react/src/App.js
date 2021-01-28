import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

import Layout from '~components/Layout'
import useTheme from '~hooks/useTheme'

const Home = loadable(() => import('~containers/Home'))
const NoMatch = loadable(() => import('~containers/NoMatch'))

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
