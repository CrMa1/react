import React, { useState } from "react";
import Form from "./Form";
import Homework from "./homework";
import '../style/list.css';

function List(){

    const [homeworks, setHomework] = useState([]); 

    const addHomework = homework =>{
        if(homework.text.trim()){
            homework.text = homework.text.trim();
            const updateHomeworks = [homework, ...homeworks];
            setHomework(updateHomeworks);
        }
    }

    const deleteHomework = id => {
        const updateHomeworks = homeworks.filter(homework => homework.id !== id);
        setHomework(updateHomeworks);
    }

    const completeHomework = id => {
        const updateHomeworks = homeworks.map(homework => {
            if(homework.id === id){
                homework.completed = !homework.completed; 
            }
            return homework;
        });
        setHomework(updateHomeworks);
    }

    return (
        <>
            <Form onSubmit={addHomework} />
            <div className="list-container">
                {
                    homeworks.map((homework) =>
                        <Homework 
                            key={homework.id}
                            id={homework.id}
                            text={homework.text}
                            completed={homework.completed} 
                            deleteHomework={deleteHomework}
                            completeHomework={completeHomework}
                        />
                    )
                }
            </div>
        </>
    );
}

export default List;