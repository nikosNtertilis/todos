const FETCH_TODOS = 'FETCH_TODOS';
const fetchTodos = (inputText) => ({
    type: FETCH_TODOS,
    inputText,
});
fetchTodos.type = FETCH_TODOS;

export {
    fetchTodos,
};