import React, { useState } from "react";
import styled from "styled-components";
import DinoModalContent from "./DinoModalContent";
import dinoGif from "../images/dinos.gif";
import logo from "../images/logo1.png";
import welcomeBackground from "../images/welcome.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

const DinoGif = styled.img`
	width: 100%;
	height: auto;
`;
const FlexDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	z-index: 2;
	padding: 1rem;
	text-align: center;
`;

const Icon = styled(FontAwesomeIcon)`
	cursor: pointer;
`;

const Logo = styled.img`
	width: 15%;
	height: auto;
`;

const Background = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 1;
`;

const WelcomeText = styled.h1`
	color: black;
	font-size: 4rem;
	-webkit-text-stroke: 1px white;
`;

const BackgroundImage = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 1;
	opacity: 0.7;
`;

function DinoModal() {
	const [currentDisplay, setCurrentDisplay] = useState("main");
	return (
		<>
			<ModalWrapper>
				<ModalContent
					backgroundColor={currentDisplay.quit ? "black" : "white"}
				>
					{
						{
							quit: <DinoGif src={dinoGif} alt="" />,
							main: (
								<DinoModalContent
									setCurrentDisplay={setCurrentDisplay}
								></DinoModalContent>
							),
							welcome: (
								<>
									<Background>
										<BackgroundImage
											src={welcomeBackground}
											alt=""
										/>
									</Background>
									<FlexDiv>
										<Header>
											<Logo src={logo} alt="" />
										</Header>
										<WelcomeText>Bienvenue ! </WelcomeText>
										<WelcomeText>
											C'est l'heure de l'apéro !
										</WelcomeText>
									</FlexDiv>
								</>
							),
						}[currentDisplay]
					}
				</ModalContent>
			</ModalWrapper>
		</>
	);
}

export default DinoModal;
