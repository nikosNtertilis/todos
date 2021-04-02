import React from 'react'
import './todosBox.css'
import withTodosCompleted from './withTodosCompleted';

const TodosBox = ({item, todoCompleted, ifcompleted}) => (
    <div className="todosBox border-radius" id={item.id}>
        <div id ="title" className="title-padding">
            {item.title}
        </div>
        <div className={`${ifcompleted} todo-completed align-bottom align-text-center border-bottom `}>
            {todoCompleted}
        </div>
    </div>
);

const TodosBoxWithTodosCompleted = withTodosCompleted(TodosBox);

export default TodosBoxWithTodosCompleted;
