import { useState } from 'react';
import styles from './TodoForm.module.css'

const TodoForm = ({addTodo}) => {
    const [text, setText] = useState('');

    const onSubmitHendler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }
    return (
        <div className={styles.todoFromContainer}>
            <form onSubmit={onSubmitHendler}>
                <input placeholder ="Enter new todo" type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default TodoForm;