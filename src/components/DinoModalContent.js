import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import momo from "../images/momo.png";
import uncleSam from "../images/uncleSam.jpg";
import joker from "../images/joker.jpg";
import groar from "../audio/groar.mp3";
import bear from "../audio/bear.mp3";
import background from "../images/background.jpg";
import morfales from "../audio/morfales.mp3";

const blinking = keyframes`
  0% {
	color: white;
  }

  50% {

   color: #1c1c1c;
  }

  100% {
	color: white;
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

const Play = styled(FontAwesomeIcon)`
	font-size: 2rem;
	margin: 0.5rem 0 0 0.5rem;
	color: #382200;
	cursor: pointer;
	&:hover {
		color: #6e4302;
		animation: none;
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
	width: 100%;
`;

const HeaderWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
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
	font-size: 2vw;
	color: #093004;
  margin: 0 1rem 0 1rem;
  	@media (max-width: 800px) {
		font-size: 1vw;
	}

  }

  to {
	margin: 0 1rem 0 1rem;	  
   font-size: 4.5vw;
   color: #093004;

   	@media (max-width: 800px) {
		font-size: 3.75vw;
	}
  }
`;

const WarCry = styled.h2`
	font-size: 4.5vw;
	font-weight: 300;
	color: #093004;
	-webkit-text-stroke: 1px white;
	margin: 0 1rem 0 1rem;
	font-family: "Modak", cursive;

	@media (max-width: 800px) {
		font-size: 3.5vw;
	}
`;

const AnimatedWarCry = styled(WarCry)`
	animation: ${cryAnimation} 1.5s linear 1;
	margin: 0 1rem 0 1rem;
`;

const cardAnimation = keyframes`
  0% {
    border: 1px solid white;
  }
  50% {
    border: 1px solid green;
  }
  100%{
    border: 1px solid white;
  }
`;

const UncleSam = styled.img`
	margin: 1rem;
	max-height: 40vh;
	border-radius: 10px;
	cursor: pointer;
	animation: ${cardAnimation} 1.5s linear infinite;

	@media (max-width: 768px) {
		max-height: 25vh;
		margin: 0.5rem;
	}

	&:hover {
		animation: none;
		border: 2px solid lightgray;
	}
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

const Header = styled.h1`
	width: 100%;
	margin: 1rem 0 0 0;
	font-size: 3.5rem;
	font-weight: 300;
	font-family: "Modak", cursive;

	@media (max-width: 500px) {
		font-size: 1.5rem;
	}

	@media (max-width: 950px) {
		font-size: 2.5rem;
	}
`;
const SmallHeader = styled.p`
	font-size: 1.25rem;
	font-family: "Emilys Candy", cursive;
`;

const Quote = styled.div`
	max-width: 50%;
	margin: 1rem;

	@media (max-width: 800px) {
		margin: 0.5rem;
	}
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
	font-family: "Emilys Candy", cursive;

	&:hover {
		background: #354e4f;
	}

	@media (max-width: 800px) {
		margin-top: 0.5rem;
	}
`;

const Icon = styled(FontAwesomeIcon)`
	color: green;
	margin: 0.5rem;
`;

const Arrow = styled(FontAwesomeIcon)`
	font-size: 2rem;
	font-weight: 800;
	color: white;
	align-self: flex-start;
	margin: 0 0 1rem 1.5rem;
	animation: ${blinking} 1.5s linear infinite;
`;

const Background = styled.div`
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
	opacity: 0.6;
`;

function DinoModalContent({ setCurrentDisplay, isPlaying }) {
	const [animatedWarCry, setAnimatedWarCry] = useState(false);
	const [isCardFront, setIsCardFront] = useState(true);

	const handleGroar = () => {
		const audio = new Audio(groar);
		audio.play();
		setAnimatedWarCry(true);
		let timer = setTimeout(() => setAnimatedWarCry(false), 1500);
		return () => {
			clearTimeout(timer);
		};
	};

	const handleStartSong = () => {
		if (!isPlaying) {
			const audio = new Audio(morfales);
			audio.play();
		}
	};

	return (
		<>
			<Background>
				<BackgroundImage src={background} alt="" />
			</Background>

			<Content>
				<HeaderWrapper>
					{!isPlaying && (
						<Play
							icon="play"
							onClick={() => handleStartSong()}
						></Play>
					)}

					<Header>
						La Coa des Morfales{" "}
						<SmallHeader>
							Rejoignez Momo et sa bande de dinos !
						</SmallHeader>
					</Header>
					<Cross
						onClick={() => {
							setCurrentDisplay("quit");
							const audio = new Audio(bear);
							audio.play();
						}}
					>
						X
					</Cross>
				</HeaderWrapper>
				<FlexDiv>
					{isCardFront ? (
						<UncleSam
							onClick={() => setIsCardFront(false)}
							src={uncleSam}
							alt=""
						/>
					) : (
						<UncleSam
							onClick={() => setIsCardFront(true)}
							src={joker}
							alt=""
						/>
					)}

					<Quote>
						<Text>
							<Icon icon="quote-left" />
							Mange un félin, garde la marmotte pour demain
							<Icon icon="quote-right" />
						</Text>
						<Button
							onClick={() => {
								setCurrentDisplay("welcome");
							}}
						>
							Rejoindre les dinos
						</Button>
					</Quote>
				</FlexDiv>
				<Arrow icon="arrow-down"></Arrow>
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
