import styled from "styled-components";

export const Container = styled.div`
	background-color: #0a1428;
	padding: 20px;
	border-radius: 8px;
	margin-top: 20px;
`;

export const Title = styled.h2`
	color: #f0e6d2;
	text-align: center;
	margin-bottom: 30px;
`;

export const ComparisonGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	gap: 30px;
	align-items: start;
`;

export const ChampionSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StatsContainer = styled.div`
	background-color: #1e2328;
	border: 1px solid #c89b3c;
	border-radius: 8px;
	padding: 20px;
	margin-top: 15px;
	width: 100%;
	max-width: 400px;
`;

export const StatRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 0;
	border-bottom: 1px solid #3c3c41;

	&:last-child {
		border-bottom: none;
	}
`;

export const StatLabel = styled.span`
	color: #a09b8c;
	font-weight: 500;
`;

export const StatValue = styled.span<{ isHigher?: boolean }>`
	color: ${(props) => (props.isHigher ? "#c89b3c" : "#f0e6d2")};
	font-weight: bold;
`;

export const VSSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;

export const VSText = styled.div`
	color: #c89b3c;
	font-size: 3rem;
	font-weight: bold;
`;

export const WinnerText = styled.div`
	color: #c89b3c;
	font-size: 1.2rem;
	font-weight: bold;
	text-align: center;
	padding: 10px;
	background-color: #1e2328;
	border: 2px solid #c89b3c;
	border-radius: 8px;
`;

export const EmptyState = styled.div`
	text-align: center;
	color: #a09b8c;
	font-size: 1.1rem;
	padding: 40px;
`;

export const CategoryTitle = styled.h3`
	color: #c89b3c;
	margin: 20px 0 10px 0;
	text-align: center;
	border-bottom: 2px solid #c89b3c;
	padding-bottom: 5px;
`;
