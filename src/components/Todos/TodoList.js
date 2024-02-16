import Todo from "./Todo";
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
    return (
        <div className={styles.todoListContainer}>
            {todos.length > 0 ? (todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)) : (<h2>there is no todo</h2>)}
            {}
        </div>
    )
}

export default TodoList;