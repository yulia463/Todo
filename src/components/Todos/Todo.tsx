import React from "react";
import styles from './Todo.module.css'

type TodoPropsType = {
    todo: any
    index:number
    deleteTodo:()=>void
}

export const Todo = (props: TodoPropsType) => {
    return (
        <div className={styles.todo}>
            <div onDoubleClick={props.deleteTodo} className={styles.todoText}>
                {props.todo}
            </div>
        </div>
    )
}