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
                   <CheckCircleOutlined
                   style={{ fontSize: '20px' }}
                   />
                </button>

                <button 
                    onClick={() => updateTodoItem(index)}
                >
                    <EditOutlined 
                            style={{ fontSize: '20px' }}
                    />
                </button>

                <button 
                    onClick={() => deleteTodoItem(index)}
                > 
                   <DeleteOutlined 
                    style={{ fontSize: '20px' }}
                   />
                </button>
            </div>
            
        </div>
)
}
export default TodoItem