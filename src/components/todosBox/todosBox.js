import React from 'react'
import './todosBox.css'

const TodosBox = ({item}) => {

    const completed = "completed" ;

    const todoCompleted = 
    item.completed
    ? completed
    : "not completed"
    
    const ifcompleted = 
    item.completed
    ? completed
    : "not-completed"
    
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
