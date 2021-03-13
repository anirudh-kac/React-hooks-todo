import React from 'react'
import { Checkbox, IconButton,ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import {Delete, Edit} from "@material-ui/icons"
import useToggleState from "./hooks/useToggleState"
import EditTodoForm from "./EditTodoForm"
function ToDo({task,completed,editTodo,removeTodo,toggleTodo , id}) {

    const [isEditing , toggle] = useToggleState(false);
    return (
        <ListItem style = {{height : "64px"}}>
            { isEditing ? <EditTodoForm task = {task} id = {id} editTodo = {editTodo}  toggleEditForm = {toggle}/> : 
            <>
            <Checkbox onClick = {()=> toggleTodo(id)} tabIndex = {-1} checked = {completed}/>
        <ListItemText style = {{ textDecoration : completed ? "line-through":"none"}}>
        {task}
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton>
                <Delete aria-label = "Delete" onClick = {()=>removeTodo(id) }/>
            </IconButton>
            <IconButton>
                <Edit aria-label = "edit" onClick = {toggle}/>
            </IconButton>
        </ListItemSecondaryAction>
        </>
}
    </ListItem>
    )
}

export default ToDo
