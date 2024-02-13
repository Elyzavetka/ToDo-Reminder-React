import Todo from "./Todo";
import styles from './TodoList.module.css'

const TodoList = ({ todos }) => {
    return (
        <div className={styles.todoListContainer}>
            {todos.length > 0 ? (todos.map((todo, index) => <Todo key={index} todo={todo} />)) : (<h2>there is no todo</h2>)}
            {}
        </div>
    )
}

export default TodoList;