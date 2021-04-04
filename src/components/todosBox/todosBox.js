import React from 'react'
import './todosBox.css'
import withHandleOnClick from './withHandleOnClick';
import withTodosCompleted from './withTodosCompleted';

const TodosBox = ({item, todoCompleted, ifcompleted, handleOnClick}) => (
    <div className="todosBox border-radius" id={item.id}>
        <div id ="title" className="title-padding">
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
        onClick={handleOnClick}
        >
            {todoCompleted}
        </div>
    </div>
);

const TodosBoxWithTodosCompletedWithHandleOnClick = withHandleOnClick(withTodosCompleted(TodosBox));

export default TodosBoxWithTodosCompletedWithHandleOnClick;
