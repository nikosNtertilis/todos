import React from "react";
import {SearchBar} from "./components/searchBar";
import TodosList from "./components/todosList";
import { TodosProvider } from "./components/todosProvider";
import "./app.css";

function App() {
  
  return (
    <TodosProvider>
      <div id="app" className="">
        <SearchBar />
        <TodosList /> 
      </div>
    </TodosProvider>
    
  );
}

export default App;
