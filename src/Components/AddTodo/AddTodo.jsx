import { useCallback, useContext, useState } from "react";
import TodoContext from "../../contexts/TodoContext";


function AddTodo() {
    const [newItem, setNewItem] = useState("");

    const { todos, setTodos, editMode } = useContext(TodoContext);

    const addNewTodo = useCallback((newTodo) => {
        setTodos( [ {
                        id: Date.now(),
                        data: newTodo
                    }, 
                    ...todos] 
                );
    }, [todos]);

    
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
                    addNewTodo(newItem);
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
                    setTodos([]);
                }}
            > 
                Reset Todo 
            </button>
        </div>
    )
}


export default AddTodo;
