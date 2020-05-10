import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import momo from "../images/momo.png";
import logo from "../images/logo1.png";
import uncleSam from "../images/uncle-sam.jpg";
import groar from "../audio/groar.mp3";
import background from "../images/background.jpg";

const Cross = styled.p`
	font-size: 2rem;
	margin: 0 0.5rem 0 0;
	cursor: pointer;
	&:hover {
		color: lightgray;
	}
`;

const Content = styled.div`
	position: relative;
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: space-between;
`;

const HeaderWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
`;

const FlexDiv = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	align-items: center;
	flex-wrap: wrap;
`;

const cryAnimation = keyframes`
  from {
	font-size: 1vw;
	color: lightgreen;
	margin: 0 1rem 0 1rem;

  }

  to {
	margin: 0 1rem 0 1rem;	  
   font-size: 4vw;
   color: lightgreen;
  }
`;

const AnimatedWarCry = styled.h2`
	animation: ${cryAnimation} 1.5s linear 1;
	margin: 0 1rem 0 1rem;
`;

const Logo = styled.img`
	width: 13%;
	height: auto;
	margin: 1rem;
`;

const UncleSam = styled.img`
	margin: 1rem;
	max-height: 40vh;
	border-radius: 4px;
	border: 1px solid lightgray;
`;

const MomoWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

const Momo = styled.img`
	width: auto;
	max-height: 18vh;
	align-self: flex-start;
	cursor: pointer;
`;

const WarCry = styled.h2`
	font-size: 4vw;
	color: lightgreen;
	margin: 0 1rem 0 1rem;
`;

const Header = styled.h1`
	margin: 1rem 0 0 0;
	font-size: 2rem;
`;
const SmallHeader = styled.p`
	font-size: 1.25rem;
`;

const Quote = styled.div`
	max-width: 50%;
	margin: 1rem;
`;
const Text = styled.h2`
	font-size: 1.25rem;
	margin: 0.5rem 0 0 0;
`;

const Button = styled.button`
	margin-top: 5rem;
	border: none;
	background: #222725;
	padding: 1rem;
	border-radius: 4px;
	color: white;
	font-size: 1rem;
	cursor: pointer;
	border: 1px solid lightgray;

	&:hover {
		background: #354e4f;
	}
`;

const Icon = styled(FontAwesomeIcon)`
	color: green;
	margin: 0.5rem;
`;

const Background = styled.div`
	background: #074701;
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 1;
`;

const BackgroundImage = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 1;
	opacity: 0.15;
`;

function DinoModalContent({ setCurrentDisplay }) {
	const [animatedWarCry, setAnimatedWarCry] = useState(false);

	const handleGroar = () => {
		const audio = new Audio(groar);
		audio.play();
		setAnimatedWarCry(true);
		let timer = setTimeout(() => setAnimatedWarCry(false), 1500);
		return () => {
			clearTimeout(timer);
		};
	};

	return (
		<>
			<Background>
				<BackgroundImage src={background} alt="" />
			</Background>

			<Content>
				<HeaderWrapper>
					<Logo src={logo} alt="" />
					<Header>
						La Coa des Morfales{" "}
						<SmallHeader>
							Rejoignez Momo et sa bande de dinos !
						</SmallHeader>
					</Header>
					<Cross onClick={() => setCurrentDisplay("quit")}>X</Cross>
				</HeaderWrapper>
				<FlexDiv>
					<UncleSam src={uncleSam} alt="" />
					<Quote>
						<Text>
							<Icon icon="quote-left" />
							Mange un félin, garde la marmotte pour demain
							<Icon icon="quote-right" />
						</Text>
						<Button onClick={() => setCurrentDisplay("welcome")}>
							Rejoindre les dinos
						</Button>
					</Quote>
				</FlexDiv>
				<MomoWrapper>
					<Momo src={momo} alt="" onClick={handleGroar} />
					{animatedWarCry ? (
						<AnimatedWarCry>GRAOUUUUUUURRRRRRRRRR!</AnimatedWarCry>
					) : (
						<WarCry>GRAOUUUUUUURRRRRRRRRR!</WarCry>
					)}
				</MomoWrapper>
			</Content>
		</>
	);
}

export default DinoModalContent;
