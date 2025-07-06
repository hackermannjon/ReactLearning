import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	background: linear-gradient(135deg, #0a1428 0%, #1e2328 50%, #0a1428 100%);
	color: #f0e6d2;
`;

export const Header = styled.header`
	background-color: #0f2027;
	background-image: linear-gradient(
		45deg,
		#0f2027 0%,
		#203a43 50%,
		#2c5364 100%
	);
	padding: 40px 20px;
	text-align: center;
	border-bottom: 3px solid #c89b3c;
`;

export const Title = styled.h1`
	color: #f0e6d2;
	font-size: 3rem;
	margin: 0 0 10px 0;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

export const Subtitle = styled.p`
	color: #c9aa71;
	font-size: 1.2rem;
	margin: 0;
`;

export const MainContent = styled.main`
	max-width: 1400px;
	margin: 0 auto;
	padding: 20px;
`;
