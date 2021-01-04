import React, {useEffect}  from 'react'
import TodoList from './Todos/TodoList'
import Context from './context'
import AddTodo from "./Todos/AddTodo";
import Loader from "./Loader";

function App() {
    const [todos, setTodos]     = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 3000)
            })
    }, [])

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id)
                    todo.completed = !todo.completed
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function onCreate(title) {
        setTodos(
            todos.concat(
                {
                    title,
                    id: Date.now(),
                    completed: false,
                }
            )
        )
    }

    return (
           <Context.Provider value={{removeTodo}}>
               <div>
                   <AddTodo onCreate={onCreate}/>
                   <h1>My Todo</h1>
                   {loading  && (<Loader/>) }
                   {
                       todos.length > 0
                           ? (<TodoList todos={todos} toggleTodo={toggleTodo}/>)
                           : !loading && (<p>No todos yet!</p>)
                   }
               </div>
           </Context.Provider>
        )
}

export default App