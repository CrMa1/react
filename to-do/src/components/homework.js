import React from 'react';
import '../style/homework.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Homework({ id, text, completed, completeHomework, deleteHomework }){
    return (
        <div className={ completed ? 'homework-container completed': 'homework-container' }>
            <div
                onClick={ () => completeHomework(id) }
                className="homework-text">
                {text}
            </div>
            <div 
                onClick={ () => deleteHomework(id) }
                className="homework-container-icons">
                <AiOutlineCloseCircle className='homework-delete' />
            </div>
        </div>
    )
}

export default Homework;