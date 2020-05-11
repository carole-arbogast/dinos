import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../images/logo1.png";
import welcomeBackground from "../images/welcome.jpg";

const Background = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 1;
`;

const blinking = keyframes`
  0% {
	color: black;
  }

  50% {

   color: grey;
  }

  100% {
	color: black;
  }
`;

const Cross = styled.p`
	font-size: 2rem;
	margin: 0 1rem 0 0;
	animation: ${blinking} 1.5s linear infinite;
	cursor: pointer;
	&:hover {
		color: grey;
		animation: none;
	}
`;

const Logo = styled.img`
	width: 15%;
	height: auto;
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

const FlexDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	z-index: 2;
	padding: 1rem;
	text-align: center;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

function Welcome({ setCurrentDisplay }) {
	return (
		<>
			<Background>
				<BackgroundImage src={welcomeBackground} alt="" />
			</Background>
			<FlexDiv>
				<Header>
					<Logo src={logo} alt="" />
					<Cross onClick={() => setCurrentDisplay("quit")}>X</Cross>
				</Header>
				<WelcomeText>Bienvenue ! </WelcomeText>
				<WelcomeText>C'est l'heure de l'apéro !</WelcomeText>
			</FlexDiv>
		</>
	);
}

export default Welcome;
