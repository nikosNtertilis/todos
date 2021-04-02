import React from "react";
import {TodosList} from "./components/todosList";
import { TodosProvider } from "./components/todosProvider";
import "./app.css";
import { SearchBar } from "./components/searchBar";

const App= () => (
	<TodosProvider>
		<div id="app" className="">
		<SearchBar />
		<TodosList /> 
		</div>
	</TodosProvider>	
);


export default App;
