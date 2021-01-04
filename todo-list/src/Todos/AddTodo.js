import React, {useState} from 'react'
import propTypes from 'prop-types'

const styles = {

    form: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },

    input: {
        display: 'block',
        width: '70%',
        padding: '5px',
        border: '1px solid black',
        borderRight: 'none',
        outline: 'none',
        boxShadow: 'none'
    },

    button: {
        width: '29%',
        padding: '5px',
        background: 'green',
        border: 'none',
        color: '#fff',
        fontWeight: 'bold',
        outline: 'none',
        boxShadow: 'none',
        cursor: 'pointer'
    }
}

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}


function AddTodo({onCreate}) {
    const input = useInputValue('')
    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={styles.form} onSubmit={submitHandler}>
            <input style={styles.input} {...input.bind} type="text"/>
            <button style={styles.button}>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: propTypes.func.isRequired
}

export default AddTodo