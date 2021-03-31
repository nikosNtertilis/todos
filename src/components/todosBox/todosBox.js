import React from 'react'
import './todosBox.css'

const TodosBox = ({item}) => {

    const todoCompleted = 
    item.completed
    ? "not completed"
    : "completed"
    
    const ifcompleted = 
    item.completed
    ? "not-completed"
    : "completed"
    return (
        <div className="todosBox" id={item.id}>
            <div>
                {item.title}
            </div>
            <div className={`${ifcompleted} align-bottom`}>
                {todoCompleted}
            </div>
        </div>
    )
}

export default TodosBox
