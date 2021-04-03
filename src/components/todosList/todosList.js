import React, { useContext } from 'react'
import { TodosBox } from '../todosBox';
import { todosContext } from '../todosProvider';
import './todosList.css'
import withFetch from './withFetch';
import withFilterItemByTitle from './withFilterItemsByTitle';
import { urlJsonPlaceHolder as url } from '../../modules';

const TodosList =({filterItemsByTitle}) => {
 
    const {inputText, todos} = useContext(todosContext);

    return (
        <div className="todosList" id="todosList" >
            {filterItemsByTitle(todos, inputText).map(item => 
                <TodosBox item={item} key={item.id} />
            )}
        </div>
    )
}

const TodosListWithFetchWithFilterItemByTitle =
withFilterItemByTitle(
    withFetch(TodosList, url)
    );
export default TodosListWithFetchWithFilterItemByTitle;

