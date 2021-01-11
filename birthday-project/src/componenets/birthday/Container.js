import React from 'react'
import Count from './Count'
import Item from './Item'
import Button from './Button'

const Container = ({people, ...other}) => {
    return (
        <div className='container'>
            <Count count={0} />
            <div className='birthday-list-wrapper'>
                {people.map( p => <Item key={p.id} person={p}/>)}
            </div>
            {people.length > 0 && <Button {...other} />}
        </div>
    )
}

export default Container