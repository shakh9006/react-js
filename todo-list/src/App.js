import React from 'react'
import TodoList from './Todos/TodoList'

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Read React documentation'},
        {id: 2, completed: false, title: 'Make Todo-List'},
        {id: 3, completed: false, title: 'Make other project with Node js, Typescript, Symfony'},
    ])

    return (
        <TodoList todos={todos}/>
    )
}

export default App