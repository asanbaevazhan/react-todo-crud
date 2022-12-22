import React, { useState, useEffect } from 'react'
import './App.css'
import TodoInput from './components/ToDoInput/ToDoInput.js';
import TodoItem from './components/ToDoItem/ToDoItem.js';


function App() {
  const initialState = JSON.parse(localStorage.getItem("todoItems")) || [];
  const [todoItems, setTodoItems] = useState(initialState)

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);
  
  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, 
      { todo, 
        complete: false 
      }];
    setTodoItems(newTodoItems);
  }

  const deleteTodoItem = (index) => {
      const newTodoItems = [...todoItems]
      newTodoItems.splice(index, 1)
      setTodoItems(newTodoItems)
  }

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false
    ? (newTodoItems[index].complete = true)
    : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems)
  }

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];

    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: false };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") {
    return;
    } else {
    item.todo = newItem;
    }
    setTodoItems(newTodoItems);
    }

  return (
        <div className='app'>
          <h1>TODO LIST</h1>
          <TodoInput 
          createTodoItem={createTodoItem} 
          />

          {todoItems.map((item, index) => (
            <TodoItem
            key={index}
            index={index}
            item={item}
            deleteTodoItem={deleteTodoItem}
            completeTodoItem={completeTodoItem}
            updateTodoItem={updateTodoItem}
            />
            ))}

        </div>
  )
}

export default App;

