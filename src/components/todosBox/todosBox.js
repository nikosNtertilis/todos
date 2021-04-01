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
        <div className="todosBox border-radius" id={item.id}>
            <div id ="title" className="title-padding">
                {item.title}
            </div>
            <div className={`${ifcompleted} todo-completed align-bottom align-text-center border-bottom `}>
                {todoCompleted}
            </div>
        </div>
    )
}

export default TodosBox
