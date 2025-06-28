import TodoListItem from "../TodoListItem/TodoListItem";

function TodoList({ todos, onDelete, onEdit, onEditMode, offEditMode }) {

    // let todoList = todos.map((todo, index) => <TodoListItem todo={todo} key = {index} />);
     /**
      * this key should always be unique for a given component
      * even if the index of component change, the key should remain unchanged
      * here (key = index), which will be changed for a component if some how we sort the array, which should not be the case
      * Therefore, in most of the cases (key = id), where id is unique for a given component and never changes
      */

    return (
        <ul className="todolist-wrapper">
            {
                todos.map((todo) => <TodoListItem
                                        key = {todo.id}
                                        todo = {todo}
                                        onDelete = {onDelete}
                                        onEdit = {onEdit}
                                        onEditMode = {onEditMode}
                                        offEditMode = {offEditMode}
                                    />
                        )
            }
        </ul>
    )
}

export default TodoList;
