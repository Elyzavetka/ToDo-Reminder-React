import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button'
import styles from './TodoActions.module.css'

const TodosActions = ({ resetTodos, deleteCompletedTodos, completedTodosExis }) => {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos" onClick={resetTodos}><RiRefreshLine /></Button>
            <Button title="Clear Completed Todos" onClick={deleteCompletedTodos} disabled={!completedTodosExis}><RiDeleteBin2Line /></Button>
        </div>
    )
}

export default TodosActions;