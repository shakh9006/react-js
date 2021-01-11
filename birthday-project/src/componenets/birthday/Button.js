import React from 'react'

const Button = ({clearAll}) => {
    return (
        <>
            <button className='birthday-clear-btn' onClick={clearAll}>Clear All</button>
        </>
    )
}

export default Button