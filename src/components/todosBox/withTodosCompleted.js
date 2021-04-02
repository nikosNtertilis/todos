import React from 'react'

const withTodosCompleted = (Component) => (props) => {

    const {item} = props;

    const completed = "completed" ;

    const todoCompleted = 
    item.completed
    ? completed
    : "not completed"
    
    const ifcompleted = 
    item.completed
    ? completed
    : "not-completed"

    return <Component todoCompleted={todoCompleted} ifcompleted={ifcompleted} {...props}  />
}

export default withTodosCompleted;
