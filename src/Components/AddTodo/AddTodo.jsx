import { useContext, useState } from "react";
import TodoContext from "../../contexts/TodoContext";


function AddTodo() {
    const [newItem, setNewItem] = useState("");
    const { todos, dispatch, editMode } = useContext(TodoContext);

    
    return (
        <div>
            <input 
                type = "text"
                placeholder="Add new todo..."
                value = {newItem} 
                onChange = {(Event) => setNewItem(Event.target.value)} 
            />
            &nbsp; &nbsp;

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
    )
}


export default AddTodo;
