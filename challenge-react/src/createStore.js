import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '~modules/rootReducer'

function createStore() {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV === 'development',
    })
}

export default createStore
