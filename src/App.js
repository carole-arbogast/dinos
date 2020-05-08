import React, { useState } from "react";
import "./App.css";
import DinoModal from "./components/DinoModal";
import hordesView from "./images/hordes-main.jpg";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faQuoteLeft,
	faQuoteRight,
	faCoffee,
} from "@fortawesome/free-solid-svg-icons";

library.add(faQuoteLeft);
library.add(faQuoteRight);
library.add(faCoffee);

const Core = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const CoreImage = styled.img`
	margin: 0 auto 0 auto;
`;

function App() {
	const [isModalOpen, setIsModalOpen] = useState(true);

	return (
		<div className="App">
			<Core>
				<DinoModal open={isModalOpen}></DinoModal>
				<CoreImage src={hordesView} alt="" />
			</Core>
		</div>
	);
}

export default App;
