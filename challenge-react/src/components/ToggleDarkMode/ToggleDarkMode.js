import React from 'react'

import { DarkMode, LightMode } from '@styled-icons/material'

import Button from '~components/Button'
import useDarkMode from '~hooks/useDarkMode'

function ToggleDarkMode() {
    const [darkMode, toggle] = useDarkMode()
    const Icon = darkMode ? DarkMode : LightMode

    return (
        <Button
            p="0"
            variant="transparent"
            onClick={() => toggle()}>
            <Icon width="27px" color="inherit"/>
        </Button>
    )
}

export default ToggleDarkMode
