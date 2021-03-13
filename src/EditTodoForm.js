import { TextField } from '@material-ui/core'
import React from 'react'
import useInputState from "./hooks/useInputState"
function EditTodoForm({editTodo,id,task,toggleEditForm}) {
    const [value , handleChange , reset] = useInputState(task);
    return (
        <form onSubmit = { (e) =>{
            e.preventDefault();
            editTodo(id,value);
            toggleEditForm();
            reset();
        }}
        style = {{marginLeft:"1rem" , width:"100%"}}>
        <TextField 
            margin = "normal"
            value = {value} 
            onChange = {handleChange} 
            fullWidth
            autoFocus
        />
        </form>
    )
}

export default EditTodoForm
