import { memo, useCallback, useContext, useState } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import TodoContext from "../../contexts/TodoContext";
import "./TodoList.css";

const MemoisedTodoListItem = memo(TodoListItem);

function TodoList() {
    const [currEditing, setCurrEditing] = useState(0);
    const { todos, setEditMode } = useContext(TodoContext);

    const onEditMode = useCallback(() => {
        setEditMode(true);
        setCurrEditing(currEditing + 1);
    }, [currEditing]);

    const offEditMode = useCallback(() => {
        if(currEditing == 1) setEditMode(false);
        setCurrEditing(currEditing - 1);
    }, [currEditing]);


    return (
        <ul className="todolist-wrapper">
            {
                todos.map((todo) => <MemoisedTodoListItem   
                                        key = {todo.id}
                                        todo = {todo}
                                        onEditMode = {onEditMode}
                                        offEditMode = {offEditMode}
                                    />
                        )
            }
        </ul>
    )
}

export default TodoList;
