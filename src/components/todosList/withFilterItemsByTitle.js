import React from "react"

const withFilterItemByTitle = (Component) => (props) => {

    const filterItemsByTitle = (arr, query) => {
        return arr.filter(el => 
			el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }

  	return <Component filterItemsByTitle={filterItemsByTitle} {...props} />
};

export default withFilterItemByTitle;
