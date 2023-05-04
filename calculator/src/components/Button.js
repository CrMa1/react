import React from "react";
import '../stylesheets/Button.css';

function Button(props) {
  
  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '.');
  };

  return(
      <div
        onClick={()=>props.setClick(props.children)}
        className={`button-container ${isOperator(props.children)?'operator':null}`.trimEnd()}>
        {props.children}
      </div>
  ); 
}


export default Button;