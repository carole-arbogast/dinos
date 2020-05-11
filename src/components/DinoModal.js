import React, { useState } from "react";
import styled from "styled-components";
import DinoModalContent from "./DinoModalContent";
import dinoGif from "../images/dinos.gif";
import Welcome from "./Welcome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackIcon = styled(FontAwesomeIcon)`
	cursor: pointer;
	margin: 1rem;
`;

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
	background: ${(props) => props.backgroundColor};
	min-height: 75%;
	width: 70%;
	border-radius: 6px;
	border: 1px solid lightgray;
	position: relative;
	display: flex;
`;

const DinoGifWraper = styled.div`
	display: flex;
	flex-direction: column;
	background: black;
	width: 100%;
	height: 100%;
`;

const DinoGif = styled.img`
	width: 100%;
	height: auto;
`;

function DinoModal() {
	const [currentDisplay, setCurrentDisplay] = useState("main");
	return (
		<>
			<ModalWrapper>
				<ModalContent
					backgroundColor={
						currentDisplay === "quit" ? "black" : "white"
					}
				>
					{
						{
							quit: (
								<DinoGifWraper>
									<BackIcon
										onClick={() =>
											setCurrentDisplay("main")
										}
										icon="chevron-left"
									></BackIcon>
									<DinoGif src={dinoGif} alt="" />
								</DinoGifWraper>
							),
							main: (
								<DinoModalContent
									setCurrentDisplay={setCurrentDisplay}
								></DinoModalContent>
							),
							welcome: (
								<Welcome
									setCurrentDisplay={setCurrentDisplay}
								/>
							),
						}[currentDisplay]
					}
				</ModalContent>
			</ModalWrapper>
		</>
	);
}

export default DinoModal;
