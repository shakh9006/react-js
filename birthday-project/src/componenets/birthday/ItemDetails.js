import React from 'react'

const ItemDetails = ({person}) => {
    return (
        <div className='birthday-item-details'>
            <h4>{person.name}</h4>
            <p>{person.age} years</p>
        </div>
    )
}

export default ItemDetails