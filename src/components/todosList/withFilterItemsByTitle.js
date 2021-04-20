import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectInputText, selectTodos } from "../../models/selectors";
import { updateTodos } from "../../models/slices";

const withFilterItemByTitle = (Component) => (props) => {

    const dispatch = useDispatch();

    const todos = useSelector(selectTodos);
    const inputText = useSelector(selectInputText);

    useEffect(() => {
            dispatch(updateTodos())
    }, [])

	const filterItemsByTitle = (arr, query) => arr.filter(el => 
			el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    
  	return <Component filterItemsByTitle={filterItemsByTitle} inputText={inputText} todos={todos} {...props} />
};

export default withFilterItemByTitle;
