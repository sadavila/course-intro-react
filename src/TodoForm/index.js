import React from 'react';
import { TodoContext} from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext (TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal (false);     
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal (false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>🦖 Escribe tu nuevo TODO ✨</label>
            <textarea 
                placeholder="Llegue de la barberia, bonito y bello"
                value={newTodoValue}
                onChange={onChange}
            />
           <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button
                    TodoForm-button--cancel"
                    onClick = {onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button
                    TodoForm-button--add"
                >Aceptar</button>
           </div>
        </form>
    );
}

export { TodoForm }; 