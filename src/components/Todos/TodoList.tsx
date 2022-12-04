import React from "react";
import {Todo} from "./Todo";

type TodoListPropsType = {
    todos: any
}

export const TodoList = (props: TodoListPropsType) => {
    return props.todos.map((todo:any, index:any) => <Todo key={index} todo={todo}/>)
}