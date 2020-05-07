import React from "react";
import "./App.css";
import hordesView from "./images/hordes-main.jpg";
import styled from "styled-components";

const Core = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const CoreImage = styled.img`
	margin: 0 auto 0 auto;
`;

function App() {
	return (
		<div className="App">
			{/* <div>LES DINOS</div> */}
			<Core>
				<CoreImage src={hordesView} alt="" />
			</Core>
		</div>
	);
}

export default App;
