import React from 'react'
import './ToDoInput.css'

const TodoInput = ({createTodoItem}) => {
    const [value, setValue] = React.useState("")

    const handleSubmit = e => {

        e.preventDefault();
            if(value === ""){
            return console.log("Please add something to-do")
        }

        createTodoItem(value)
        setValue("")
    }

    return (
    <form onSubmit={handleSubmit}>
        
        <input
            type='text'
            placeholder='Add a new task'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='input'
        />

        <button 
            onClick={handleSubmit} 
            className='add'
        > 
            Add 
        </button>

    </form>
)
}

export default TodoInput