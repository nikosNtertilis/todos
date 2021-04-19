const urlJsonPlaceHolder = `https://jsonplaceholder.typicode.com/todos` ;

const fetchTodos = async () => {
    const response = await fetch(urlJsonPlaceHolder);
    const json = await response.json();
    return [...json];
}

export default fetchTodos;