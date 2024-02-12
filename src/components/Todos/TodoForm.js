import { useState } from 'react';

const TodoForm = ({addTodo}) => {
    const [text, setText] = useState('');

    const onSubmitHendler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }
    return (
        <div>
            <form onSubmit={onSubmitHendler}>
                <input placeholder ="Enter new todo" type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default TodoForm;