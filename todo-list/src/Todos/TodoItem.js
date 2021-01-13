import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from "../context";

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
        borderRadius: '50%',
        backgroundColor: 'red',
    },

    label: {
        cursor: 'pointer'
    }
}

function TodoItem({todo, index, toggleTodo}) {

    const {removeTodo} = useContext(Context)
    const bindName     = 'label_' + todo.id
    const classList    = []

    if (todo.completed)
        classList.push('done')

    return (
        <li className="item-list" style={styles.li}>
            <span>
                <input
                    id={bindName}
                    type="checkbox"
                    style={styles.input}
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <strong>{index + 1}.</strong>
                &nbsp;
                <label
                    htmlFor={bindName}
                    style={styles.label}
                    className={classList.join(' ')}
                >
                    {todo.title}
                </label>
            </span>
            <button style={styles.button} onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo       : PropTypes.object.isRequired,
    index      : PropTypes.number.isRequired,
    toggleTodo : PropTypes.func.isRequired
}

export default TodoItem