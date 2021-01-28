import React from 'react'
import RCSelect from './Select.styled'

function Select(props) {
    return (
        <RCSelect classNamePrefix="react-select" {...props}/>
    )
}

export default Select
