import Todo from "./Todo";
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <div className={styles.todoListContainer}>
            {todos.length > 0 ? (todos.map((todo, index) => <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo} />)) : (<h2>there is no todo</h2>)}
            {}
        </div>
    )
}

export default TodoList;