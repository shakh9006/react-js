import React from 'react'

const Count = ({count}) => {
    return (
        <div className='birthday-count'>
            <label htmlFor="birthday-count">
                {count} birthdays today
            </label>
        </div>
    )
}

export default Count