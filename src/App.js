import React from "react";
import {TodosList} from "./components/todosList";
import "./app.css";
import { SearchBar } from "./components/searchBar";
import { Provider } from 'react-redux'
import { store } from "./models/store";

const App= () => (
	<Provider store={store}>
		<div id="app" className="">
		<SearchBar />
		<TodosList /> 
		</div>
	</Provider>	
);


export default App;
