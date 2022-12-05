import React from "react";
import {Todo} from "./Todo";
import styles from './TodoList.module.css'

type TodoListPropsType = {
    todos: any
    deleteTodo:(index: any) =>void

}

export const TodoList = (props: TodoListPropsType) => {
    return (
        <div className={styles.todoListContainer}>
            {!props.todos.length && <h2>Todo list is empty</h2>}
            { props.todos.map( (todo:any, index:any) =>
                <Todo key={index} todo={todo} index={index} deleteTodo={()=> props.deleteTodo(index)}/>)}

        </div>
    )
}