import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import momo from "../images/momo.png";
import logo from "../images/logo.png";

const Cross = styled.p`
	font-size: 2rem;
	margin: 0 0.5rem 0 0;
	align-self: flex-end;
	cursor: pointer;
	&:hover {
		color: lightgray;
	}
`;

const cryAnimation = keyframes`
  from {
	font-size: 1vw;
	color: lightgreen;
  }

  to {
   font-size: 4vw;
   color: lightgreen;
  }
`;

const AnimatedWarCry = styled.h2`
	display: inline-block;
	animation: ${cryAnimation} 2s linear 1;
	padding: 2rem 1rem;
	font-size: 1.2rem;
`;

const Logo = styled.img`
	width: auto;
	height: 30%;
`;

const MomoWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Momo = styled.img`
	width: 15%;
	height: auto;
	align-self: flex-start;
	cursor: pointer;
`;

const WarCry = styled.h2`
	font-size: 4vw;
	color: lightgreen;
	margin: 0 1rem 0 1rem;
`;

const Header = styled.h1`
	margin: 0 0 0.5rem 0;
`;
const Text = styled.h2`
	font-size: 1rem;
	margin: 0.5rem 0 0 0;
`;

const Icon = styled(FontAwesomeIcon)`
	color: green;
	margin: 0.5rem;
`;

function DinoModalContent({ setGifVisible }) {
	const [animatedWarCry, setAnimatedWarCry] = useState(false);

	return (
		<>
			<Cross onClick={() => setGifVisible(true)}>X</Cross>
			<Header>La Coa des Morfales</Header>
			<Logo src={logo} alt="" />
			<Text>Rejoignez Momo et sa bande de dinos !</Text>
			<Text>
				<Icon icon="quote-left" />
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Doloribus, iste.
				<Icon icon="quote-right" />
			</Text>
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
