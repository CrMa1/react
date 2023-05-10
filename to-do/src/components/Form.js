import React, {useState} from 'react';
import '../style/form.css';
import { v4 as uuidv4 } from 'uuid';

function Form(props){

    const [input, setInput ] = useState('');

    const changeInput = e => {
        setInput(e.target.value);
    }

    const sendForm = e => {
        e.preventDefault();
        const newHomework = {
            id: uuidv4(),
            text: input,
            completed: false
        }
        props.onSubmit(newHomework);
    }

    return (
        <form onSubmit={sendForm} className='homewok-form'>
            <input 
                onChange={changeInput}
                className='homework-input'
                type='text'
                placeholder='Escribe una Tarea'
                name='homework'
            />   
            <button className='homework-addBtn'>Agregar</button>  
        </form>
    );
}

export default Form;