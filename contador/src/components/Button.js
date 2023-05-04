import React from 'react';
import '../stylesheets/Buttons.css';

function Button({text,resetButton,functionButton}){
    return (
        <button 
            className={resetButton ? 'clickButton' : 'resetButton'}
            onClick={functionButton}>
            {text}
        </button>
    )
}

export default Button;