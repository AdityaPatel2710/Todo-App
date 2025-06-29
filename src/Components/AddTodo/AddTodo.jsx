import { useContext, useState } from "react";
import TodoContext from "../../contexts/TodoContext";
import "./AddTodo.css";


function AddTodo() {
    const [newItem, setNewItem] = useState("");
    const { todos, dispatch, editMode } = useContext(TodoContext);

    
    return (
        <div className="add-todo-container">

            <input 
                type = "text"
                placeholder="Add new todo..."
                value = {newItem} 
                onChange = {(Event) => setNewItem(Event.target.value)} 
            />
            &nbsp; &nbsp;

            <div className="add-todo-buttons">
                <button 
                    disabled = {editMode || (newItem == "")}
                    onClick = {() => {
                        dispatch({ type: "add_todo", payload: {newTodo:newItem} });
                        setNewItem("");
                    }}
                >
                    Add Todo 
                </button>
                &nbsp;

                <button 
                    disabled = {(todos.length == 0) || editMode}
                    onClick = {() => {
                        setNewItem("");
                        dispatch({ type: "reset_todos", payload: {} });
                    }}
                > 
                    Reset Todo 
                </button>
            </div>

        </div>
    )
}


export default AddTodo;
