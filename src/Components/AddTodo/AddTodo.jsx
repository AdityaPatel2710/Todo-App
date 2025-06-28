import { useState } from "react";

function AddTodo({ onAdd, editMode, onReset, isTodoEmpty }) {
    const [newItem, setNewItem] = useState("");
    
    return (
        <div>
            <input 
                type = "text"
                value = {newItem} 
                onChange = {(Event) => setNewItem(Event.target.value)} 
            />
            &nbsp; &nbsp;

            <button 
                disabled = {editMode || (newItem == "")}
                onClick = {() => {
                    onAdd(newItem);
                    setNewItem("");
                }}
            >
                Add Todo 
            </button>
            &nbsp;

            <button 
                disabled = {isTodoEmpty || editMode}
                onClick = {() => {
                    setNewItem("");
                    onReset();
                }}
            > 
                Reset Todo 
            </button>
        </div>
    )
}


export default AddTodo;
