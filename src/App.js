import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faQuoteLeft,
	faQuoteRight,
	faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Home";

library.add(faQuoteLeft);
library.add(faQuoteRight);
library.add(faCoffee);

function App() {
	return (
		<div className="App">
			<Home></Home>
		</div>
	);
}

export default App;
