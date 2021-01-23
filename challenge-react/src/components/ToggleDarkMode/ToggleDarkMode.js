import React from 'react'

import { DarkMode, LightMode } from '@styled-icons/material'

import useDarkMode from '~hooks/useDarkMode'

function ToggleDarkMode() {
    const [darkMode, toggle] = useDarkMode()
    const Icon = darkMode ? DarkMode : LightMode

    return (
        <button onClick={() => toggle()} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <Icon width="24px" color="var(--text-color)"/>
        </button>
    )
}

export default ToggleDarkMode
