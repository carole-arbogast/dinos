import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import momo from "../images/momo.png";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rotate = keyframes`
  from {
	color: blue;
	font-size: 1vw;
  }

  to {
   color: green;
   font-size: 4vw;
  }
`;

const AnimatedWarCry = styled.h2`
	display: inline-block;
	animation: ${rotate} 2s linear 1;
	padding: 2rem 1rem;
	font-size: 1.2rem;
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
	background: #053010;
	width: 75%;
	height: 75vh;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: space-between;
	border: 1px solid lightgray;
`;

const Header = styled.h1`
	margin: 1rem 0 0 0;
`;
const Text = styled.h2`
	font-size: 1rem;
	margin: 0.5rem 0 0 0;
`;

const Icon = styled(FontAwesomeIcon)`
	color: green;
	margin: 0.5rem;
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
`;

const WarCry = styled.h2`
	font-size: 4vw;
	color: lightgreen;
	margin: 0 1rem 0 1rem;
`;

function DinoModal() {
	const [animatedWarCry, setAnimatedWarCry] = useState(false);
	return (
		<>
			<ModalWrapper>
				<ModalContent>
					<Header>La Coa des Morfales</Header>
					<Logo src={logo} alt="" />
					<Text>Rejoignez Momo et sa bande de dinos !</Text>
					<Text>
						<Icon icon="quote-left" />
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Doloribus, iste.
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
							<AnimatedWarCry>
								GRAOUUUUUUURRRRRRRRRR!
							</AnimatedWarCry>
						) : (
							<WarCry>GRAOUUUUUUURRRRRRRRRR!</WarCry>
						)}
					</MomoWrapper>
				</ModalContent>
			</ModalWrapper>
		</>
	);
}

export default DinoModal;
