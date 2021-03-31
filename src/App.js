import React from "react";
import {SearchBar} from "./components/searchBar";
import TodosList from "./components/todosList";
import { TodosProvider } from "./components/todosProvider";

function App() {
  
  return (
    <TodosProvider>
      
        <SearchBar />
        <TodosList /> 
      
    </TodosProvider>
    
  );
}

export default App;
