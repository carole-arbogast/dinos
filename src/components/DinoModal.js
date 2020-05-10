import React, { useState } from "react";
import styled from "styled-components";
import DinoModalContent from "./DinoModalContent";
import dinoGif from "../images/dinos.gif";

const ModalWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background: transparent;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	min-height: 75%;
	width: 70%;
	border-radius: 6px;

	border: 1px solid lightgray;
	position: relative;
`;

const DinoGif = styled.img`
	width: 100%;
	height: auto;
	margin: auto 0 auto 0;
`;

function DinoModal() {
	const [gifVisible, setGifVisible] = useState(false);
	return (
		<>
			<ModalWrapper>
				<ModalContent darkBackground={gifVisible}>
					{gifVisible ? (
						<DinoGif src={dinoGif} alt="" />
					) : (
						<DinoModalContent
							setGifVisible={setGifVisible}
						></DinoModalContent>
					)}
				</ModalContent>
			</ModalWrapper>
		</>
	);
}

export default DinoModal;
