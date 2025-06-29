import { useContext, useState } from "react";
import './TodoListItem.css';
import TodoContext from "../../contexts/TodoContext";


function TodoListItem({ todo, onEditMode, offEditMode }) {
    const [isFinished, setIsFinished] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [todoData, setTodoData] = useState(todo.data);
    const { dispatch } = useContext(TodoContext);


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

            <div className="todoItem-buttons">
                <button 
                    onClick = {() => setIsFinished(!isFinished)} 
                    disabled = {isEditing}
                > 
                    {(isFinished) ? 'Undone' : 'Done'}  
                </button>

                <button 
                    onClick = {() => {
                        if (isEditing) {
                            dispatch({ type: "edit_todo", payload: {id:todo.id, newTodo:todoData} });
                            offEditMode();
                        }
                        else onEditMode();
                        setIsEditing(!isEditing);
                    }} 
                    disabled = {isFinished || (todoData=="")}
                > 
                    {(isEditing) ? 'Save' : 'Edit'}  
                </button>

                <button 
                    onClick = {() => dispatch({ type: "delete_todo", payload: {id:todo.id} })} 
                    disabled = {isEditing}
                > 
                    Remove
                </button>
            </div>

        </div>
    )
}

export default TodoListItem;
