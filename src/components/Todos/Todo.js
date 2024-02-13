import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

const Todo = ({ todo, index, deleteTodo }) => {
    return (
        <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
            <RiTodoFill />
            <div className={styles.todoText}>{todo}</div>
        </div>
    )
}

export default Todo;