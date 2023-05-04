import React from "react";
import '../stylesheets/Counter.css';

function Counter({ clicks }) {
    return (
        <div className="Counter">
            {clicks}
        </div>
    )
}

export default Counter;