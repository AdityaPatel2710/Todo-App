import { useState } from "react";
import './TodoListItem.css';


function TodoListItem({ todo, onDelete, onEdit, onEditMode, offEditMode }) {
    const [isFinished, setIsFinished] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [todoData, setTodoData] = useState(todo.data);

    return (
        <div className="todoItem-container">
            <li>
            {
                (isEditing) ? <input value = {todoData} onChange = {(Event) => setTodoData(Event.target.value)} /> : <span 
                                                                                                                    className = {(isFinished) ? "todo-done" : "todo-not-done"}
                                                                                                                > 
                                                                                                                    {todoData} 
                                                                                                                </span> 
            }
            </li>

            <button 
                onClick = {() => setIsFinished(!isFinished)} 
                disabled = {(isEditing) ? true : false}
            > 
                {(isFinished) ? 'ReDo' : 'Done'}  
            </button>

            <button 
                onClick = {() => {
                    if (isEditing) {
                        onEdit(todo.id, todoData); 
                        offEditMode();
                    }
                    else onEditMode();
                    setIsEditing(!isEditing);
                }} 
                disabled = {(isFinished || (todoData=="")) ? true : false}
            > 
                {(isEditing) ? 'Save' : 'Edit'}  
            </button>

            <button 
                onClick = {() => onDelete(todo.id)} 
                disabled = {(isEditing) ? true : false}
            > 
                Remove
            </button>

        </div>
    )
}

export default TodoListItem;
