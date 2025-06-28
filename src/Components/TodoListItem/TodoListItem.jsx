import { useContext, useState } from "react";
import './TodoListItem.css';
import TodoContext from "../../contexts/TodoContext";


function TodoListItem({ todo, onEditMode, offEditMode }) {
    const [isFinished, setIsFinished] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [todoData, setTodoData] = useState(todo.data);

    const { todos, setTodos } = useContext(TodoContext);

    function deleteTodo(id) {
        let remainingTodos = todos.filter((item) => (item.id != id));
        setTodos(remainingTodos);
    }

    function editTodo(id, newTodo) {
        let newTodos = todos.map((todo) => {
            if(todo.id == id) todo.data = newTodo;
            return todo;
        })
        setTodos(newTodos);
    }


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
                disabled = {isEditing}
            > 
                {(isFinished) ? 'Undone' : 'Done'}  
            </button>

            <button 
                onClick = {() => {
                    if (isEditing) {
                        editTodo(todo.id, todoData); 
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
                onClick = {() => deleteTodo(todo.id)} 
                disabled = {isEditing}
            > 
                Remove
            </button>

        </div>
    )
}

export default TodoListItem;
