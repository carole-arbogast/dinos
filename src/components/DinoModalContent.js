import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import momo from "../images/momo.png";
import logo from "../images/logo1.png";
import uncleSam from "../images/uncle-sam.jpg";

const Cross = styled.p`
	font-size: 2rem;
	margin: 0 0.5rem 0 0;
	cursor: pointer;
	&:hover {
		color: lightgray;
	}
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
	flex: 2;
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
	animation: ${cryAnimation} 2s linear 1;
	margin: 0 1rem 0 1rem;
`;

const Logo = styled.img`
	width: 13%;
	height: auto;
	margin: 1rem;
`;

const UncleSam = styled.img`
	margin: 1rem;
	max-height: 35vh;
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
	font-size: 2.5rem;
`;
const SmallHeader = styled.p`
	font-size: 1.25rem;
`;

const Quote = styled.div`
	max-width: 25%;
	margin: 1rem;
`;
const Text = styled.h2`
	font-size: 1.25rem;
	margin: 0.5rem 0 0 0;
`;

const Button = styled.button`
	margin-top: 5rem;
	border: none;
	background: #80391e;
	padding: 1rem;
	border-radius: 4px;
	color: white;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		background: #80392e;
	}
`;

const Icon = styled(FontAwesomeIcon)`
	color: green;
	margin: 0.5rem;
`;

function DinoModalContent({ setGifVisible }) {
	const [animatedWarCry, setAnimatedWarCry] = useState(false);

	return (
		<>
			<HeaderWrapper>
				<Logo src={logo} alt="" />
				<Header>
					La Coa des Morfales{" "}
					<SmallHeader>
						Rejoignez Momo et sa bande de dinos !
					</SmallHeader>
				</Header>
				<Cross onClick={() => setGifVisible(true)}>X</Cross>
			</HeaderWrapper>

			<FlexDiv>
				<UncleSam src={uncleSam} alt="" />
				<Quote>
					<Text>
						<Icon icon="quote-left" />
						Mange un félin, garde la marmotte pour demain
						<Icon icon="quote-right" />
					</Text>
					<Button>Rejoindre les dinos</Button>
				</Quote>
			</FlexDiv>

			<MomoWrapper>
				<Momo
					src={momo}
					alt=""
					onClick={() => {
						setAnimatedWarCry(true);
						let timer = setTimeout(
							() => setAnimatedWarCry(false),
							2000
						);
						return () => {
							clearTimeout(timer);
						};
					}}
				/>
				{animatedWarCry ? (
					<AnimatedWarCry>GRAOUUUUUUURRRRRRRRRR!</AnimatedWarCry>
				) : (
					<WarCry>GRAOUUUUUUURRRRRRRRRR!</WarCry>
				)}
			</MomoWrapper>
		</>
	);
}

export default DinoModalContent;
