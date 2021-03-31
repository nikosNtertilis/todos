import React from 'react'
import './todosBox.css'

const TodosBox = ({item}) => {
    return (
        <div className="todosBox" id={item.id}>
            {item.title}
        </div>
    )
}

export default TodosBox
