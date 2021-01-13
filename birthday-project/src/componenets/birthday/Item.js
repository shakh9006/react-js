import React from 'react'
import ItemImage from './ItemImage'
import ItemDetails from './ItemDetails'

const Item = ({person}) => {
    const {src, ...info} = person
    return (
        <div className='birthday-item'>
            <ItemImage src={src}/>
            <ItemDetails person={info} />
        </div>
    )
}

export default Item