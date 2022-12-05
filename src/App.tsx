import React, {useState} from 'react';
import './App.css';
import {TodoForm} from "./components/Todos/TodoForm";
import {TodoList} from "./components/Todos/TodoList";

function App() {
    const [todos, setTodos] = useState<any>([])
    const addTodoHandler = (text: string) => {
        setTodos([...todos, text])
    }
    const deleteTodoHandler = (index: number) => {
        setTodos(todos.filter((todo:any, idx:number) => idx !== index))
    }
    return (
        <div className="App">
            <h1>To do App</h1>
            <TodoForm addTodo={addTodoHandler}/>
            <TodoList todos={todos} deleteTodo={deleteTodoHandler}/>
        </div>
    );
}

export default App;
