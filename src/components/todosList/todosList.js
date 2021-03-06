import React from 'react'
import { TodosBox } from '../todosBox';
import './todosList.css';
import withFilterItemByTitle from './withFilterItemsByTitle';

const TodosList =({filterItemsByTitle, inputText, todos}) => {
 
    return (
        <div className="todosList" id="todosList">
            {filterItemsByTitle(todos, inputText).map(item => 
                <TodosBox item={item} key={item.id} />
            )}
        </div>
    )
}

export default withFilterItemByTitle(TodosList);

