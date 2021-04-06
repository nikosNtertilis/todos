import React from 'react';
import './todosBox.css';
import withTodosCompleted from './withTodosCompleted';

const TodosBox = ({item, todoCompleted, ifcompleted}) => (
    <div className="todosBox border-radius" id={item.id}>

        <div id ="title" className="title-padding title-align title-size">
            {item.title}
        </div>
        
        <div 
        id="isCompleted" 
        className={`
            ${ifcompleted} 
            todo-completed 
            align-bottom 
            align-text-center 
            border-bottom
        `}
        >
            {todoCompleted}
        </div>
    </div>
);

export default withTodosCompleted(TodosBox);
