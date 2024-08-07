import { useState } from "react"
import "./styles.css"
import NewTodoForm from "./NetTodoForm";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos(c => {
      return [...c, 
          {id: crypto.randomUUID(), title, completed: false}]
      })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }

  console.log(todos)

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App