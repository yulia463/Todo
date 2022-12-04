import React from "react";

type TodoPropsType={
todo:any
}
export const Todo=(props:TodoPropsType)=>{
return(
    <div>
        <h3>{props.todo}</h3>
    </div>
)
}