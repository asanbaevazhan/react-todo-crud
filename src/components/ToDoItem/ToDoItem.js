import './ToDoItem.css'
import { DeleteOutlined, EditOutlined, CheckCircleOutlined } from '@ant-design/icons';

const TodoItem = ({ item, index, deleteTodoItem, completeTodoItem, 
    updateTodoItem }) => {

    return (
        <div className="todo-list">

            <li style={{textDecoration: item.complete ? "line-through" : ""}}>
            {item.todo}</li>

            <div className="btns">
                <button 
                onClick={() => completeTodoItem(index)}
                >
                   <CheckCircleOutlined />
                </button>

                <button 
                    onClick={() => updateTodoItem(index)}
                >
                    <EditOutlined />
                </button>

                <button 
                    onClick={() => deleteTodoItem(index)}
                > 
                   <DeleteOutlined />
                </button>
            </div>
            
        </div>
)
}
export default TodoItem