import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        margin   : 0,
        padding  : 0,
        listStyle: 'none'
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {
                props.todos.map( (todo, index) => {
                    return <TodoItem todo={todo} index={index} key={todo.id} toggleTodo={props.toggleTodo} />
                })
            }
        </ul>
    )
}


TodoList.propTypes = {
    todos     : PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList