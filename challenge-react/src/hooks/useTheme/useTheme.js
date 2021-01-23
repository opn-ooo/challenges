import merge from 'lodash/merge'

import useDarkMode from '~hooks/useDarkMode'
import theme from '~root/theme.json'

function useTheme() {
    const [darkMode] = useDarkMode()
    const { mode: modeConfig, ...restTheme } = theme
    const mode = darkMode ? 'dark' : 'light'

    return {
        mode,
        ...merge(restTheme, modeConfig[mode]),
    }
}

export default useTheme
