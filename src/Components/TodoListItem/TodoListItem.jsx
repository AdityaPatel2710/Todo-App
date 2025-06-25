import { useState } from "react";
import './TodoListItem.css';

function handleClick(todo) {
    alert(`ToDo List item \'${todo}\' clicked!`);
}

function TodoListItem(props) {
    const [isFinished, setIsFinished] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [todoData, setTodoData] = useState(props.todo);

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
                        props.edit(props.id, todoData); 
                        props.offEditMode();
                    }
                    else props.onEditMode();
                    setIsEditing(!isEditing);
                }} 
                disabled = {(isFinished || (todoData=="")) ? true : false}
            > 
                {(isEditing) ? 'Save' : 'Edit'}  
            </button>

            <button 
                onClick = {() => props.delete(props.id)} 
                disabled = {(isEditing) ? true : false}
            > 
                Remove
            </button>

        </div>
    )
}

export default TodoListItem;
