import React, {useState} from "react";

type TodoFormPropsType = {
    addTodo: any
}

export const TodoForm = (props: TodoFormPropsType) => {
    const [text, setText] = useState('')

    const onSubmitHandler = (event: any) => {
        event.preventDefault()
        props.addTodo(text)
        setText('')
    }

    return (
        <form>
            <input
                placeholder={"Enter new todo"}
                value={text}
                onChange={(e)=> setText(e.target.value)}/>
            <button onClick={onSubmitHandler} type={"submit"}>Submit</button>
        </form>
    )
}