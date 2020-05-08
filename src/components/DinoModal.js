import React from "react";
import styled from "styled-components";
import momo from "../images/momo.png";
import logo from "../images/logo.png";
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
	background: #053010;
	width: 75%;
	height: 75vh;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: space-between;
`;

const Header = styled.h1`
	margin: 1rem 0 0 0;
`;
const Text = styled.h2`
	font-size: 1rem;
	margin: 0;
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
	return (
		<>
			<ModalWrapper>
				<ModalContent>
					<Header>La Coa des Morfales</Header>
					<Logo src={logo} alt="" />
					<Text>Rejoignez Momo et sa bande de dinos !</Text>
					<Text>
						<FontAwesomeIcon icon="quote-left" />
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Doloribus, iste.
						<FontAwesomeIcon icon="quote-right" />
					</Text>
					<MomoWrapper>
						<Momo src={momo} alt="" />
						<WarCry>GRAOUUUUUUURRRRRRRRRR!</WarCry>
					</MomoWrapper>
				</ModalContent>
			</ModalWrapper>
		</>
	);
}

export default DinoModal;
