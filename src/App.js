import React from "react";
import TodosList from "./components/todos";
import { TodosProvider } from "./components/todosContext";


function App() {
  
  return (
    <TodosProvider>
      <TodosList />
    </TodosProvider>
    
  );
}

export default App;
