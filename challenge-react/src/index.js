import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import createStore from './createStore'

const store = createStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
