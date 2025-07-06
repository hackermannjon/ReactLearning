import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	background: linear-gradient(135deg, #0a1428 0%, #1e2328 50%, #0a1428 100%);
	color: #f0e6d2;
`;

export const Header = styled.header`
	background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
	padding: 60px 20px;
	text-align: center;
	border-bottom: 3px solid #c89b3c;
`;

export const ChampionImage = styled.img`
	width: 200px;
	height: 300px;
	border-radius: 8px;
	border: 3px solid #c89b3c;
	margin-bottom: 20px;
`;

export const ChampionName = styled.h1`
	color: #f0e6d2;
	font-size: 3.5rem;
	margin: 0 0 10px 0;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

export const ChampionTitle = styled.h2`
	color: #c9aa71;
	font-size: 1.5rem;
	font-style: italic;
	margin: 0;
`;

export const MainContent = styled.main`
	max-width: 1200px;
	margin: 0 auto;
	padding: 40px 20px;
`;

export const StatsSection = styled.section`
	background-color: #0a1428;
	border: 1px solid #c89b3c;
	border-radius: 8px;
	padding: 30px;
	margin-bottom: 30px;
`;

export const SectionTitle = styled.h3`
	color: #c89b3c;
	font-size: 2rem;
	margin-bottom: 20px;
	border-bottom: 2px solid #c89b3c;
	padding-bottom: 10px;
`;

export const StatsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 20px;
`;

export const StatCard = styled.div`
	background-color: #1e2328;
	border: 1px solid #3c3c41;
	border-radius: 6px;
	padding: 15px;
`;

export const StatLabel = styled.div`
	color: #a09b8c;
	font-size: 0.9rem;
	margin-bottom: 5px;
`;

export const StatValue = styled.div`
	color: #f0e6d2;
	font-size: 1.2rem;
	font-weight: bold;
`;

export const TagsContainer = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 20px;
	justify-content: center;
`;

export const Tag = styled.span`
	background-color: #c89b3c;
	color: #0a1428;
	padding: 8px 16px;
	border-radius: 20px;
	font-weight: bold;
	font-size: 0.9rem;
`;

export const BackButton = styled.button`
	background-color: #c89b3c;
	color: #0a1428;
	border: none;
	padding: 12px 24px;
	border-radius: 6px;
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background-color: #f0e6d2;
		transform: translateY(-2px);
	}
`;
