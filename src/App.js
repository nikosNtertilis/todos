import React from "react";
import {SearchBar} from "./components/searchBar";
import TodosList from "./components/todosList";

function App() {
  
  return (
    <div id="app">
      <SearchBar />
      <TodosList /> 
    </div>
  );
}

export default App;
