import React, {useState} from 'react';
import './App.css';
import {TodoForm} from "./components/Todos/TodoForm";
import {TodoList} from "./components/Todos/TodoList";

function App() {
    const [todos, setTodos] = useState<any>([])
    const addTodoHandler = (text: any) => {
        setTodos([...todos, text])
    }

    return (
        <div className="App">
            <h1>To do App</h1>
            <TodoForm addTodo={addTodoHandler}/>
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
