import styled from "styled-components";

export const CardLink = styled.a`
	text-decoration: none;
`;

export const Container = styled.div`
	background-color: #0e1a26;
	border: 1px solid #c89b3c;
	border-radius: 4px;
	width: 300px;
	overflow: hidden;
	box-shadow: 0 0 15px rgba(200, 170, 110, 0.2);
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: scale(1.03);
	}
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	border-bottom: 1px solid #c89b3c;
`;

export const Info = styled.div`
	padding: 20px;
`;

export const Name = styled.h2`
	margin: 0 0 5px 0;
	color: #f0e6d2;
	font-size: 1.8rem;
`;

export const Title = styled.p`
	margin: 0 0 15px 0;
	color: #a09b8c;
	font-style: italic;
	text-transform: capitalize;
`;

export const TagsContainer = styled.div`
	display: flex;
	gap: 10px;
`;

export const Tag = styled.span`
	background-color: #3c3c41;
	color: #f0e6d2;
	padding: 4px 8px;
	border-radius: 4px;
	font-size: 0.8rem;
`;
