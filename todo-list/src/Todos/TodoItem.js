import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px 10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        boxShadow: '0 1px 2px rgba(0,0,0, .5)',

        cursor: 'pointer',
        transition: 'box-shadow 0.2s linear'
    },

    input: {
        cursor: 'pointer',
        marginRight: '7px'
    },

    button: {
        border: 'none',
        color: '#fff',
        outline: 'none',
        cursor: 'pointer',
        borderRadius: '3px',
        backgroundColor: 'red',
    }
}

function TodoItem({todo, index}) {
    return (
        <li className="item-list" style={styles.li}>
            <span>
                <input style={styles.input} type="checkbox"/>
                <strong>{index + 1}.</strong>
                &nbsp;
                {todo.title}
            </span>
            <button style={styles.button}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default TodoItem