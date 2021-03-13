import { Divider, List, Paper } from '@material-ui/core'
import React from 'react'
import ToDo from "./ToDo.js"

function ToDoList({todos ,editTodo, removeTodo,toggleTodo}) {
    return (
        <Paper>
            <List>
            {todos.map(todo=> (
                <>
                <ToDo editTodo = {editTodo} toggleTodo = {toggleTodo} removeTodo = {removeTodo} task = {todo.task} id = {todo.id} completed = {todo.completed}/>
                <Divider/>
                </>
            ))}
            </List>
            
        </Paper>
    )
}

export default ToDoList
