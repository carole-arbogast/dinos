import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DinoModal from "./DinoModal";
import hordesView from "../images/hordes-main.jpg";
import morfales from "../audio/morfales.mp3";

const Core = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const CoreImage = styled.img`
	margin: 0 auto 0 auto;
`;

function Home() {
	const [isModalOpen, setIsModalOpen] = useState(true);
	const handlePopup = () => {
		setIsModalOpen(true);
		const audio = new Audio(morfales);
		audio.play();
	};

	useEffect(() => {
		let timer = setTimeout(() => handlePopup(), 2000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<Core>
			{isModalOpen && <DinoModal></DinoModal>}
			<CoreImage src={hordesView} alt="" />
		</Core>
	);
}

export default Home;
