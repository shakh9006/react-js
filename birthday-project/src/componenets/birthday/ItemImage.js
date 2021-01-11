import React from 'react'

const ItemImage = ({src}) => {
    return (
        <div className='birthday-person-img'>
            <img src={src} alt="alt" />
        </div>
    )
}

export default ItemImage