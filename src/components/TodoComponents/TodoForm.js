import React from 'react';

const TodoForm = props => {
    return (
        <div className='todo-form-container'>
            <input value={props.userInput} onChange={props.handleSubmit} onKeyPress={props.enterPressed} type='text' placeholder='Add weight to shoulders' />
            <button onClick={props.buttonPressed}>Add Task</button>
            <button className='clear' onClick={props.clearItem}>Clear Completed</button>
        </div>
    );
}

export default TodoForm;